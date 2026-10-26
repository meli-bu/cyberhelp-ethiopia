
require("dotenv").config();

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("."));

// Test route
app.get("/api/health", (req, res) => {
    res.send("CyberHelp backend is working!");
});

// Step 1: Submit a URL to VirusTotal
app.post("/api/scan-url", async (req, res) => {
    try {
        const apiKey = process.env.VIRUSTOTAL_API_KEY;
        const url = req.body.url;

        // Check whether the API key exists
        if (!apiKey || apiKey === "paste_your_api_key_here") {
            return res.status(500).json({
                error: "VirusTotal API key is missing."
            });
        }

        // Check whether the user provided a URL
        if (!url || typeof url !== "string") {
            return res.status(400).json({
                error: "Please provide a URL."
            });
        }

        // Only allow HTTP and HTTPS URLs
        let parsedUrl;

        try {
            parsedUrl = new URL(url);
        } catch {
            return res.status(400).json({
                error: "Please enter a valid URL."
            });
        }

        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
            return res.status(400).json({
                error: "Only HTTP and HTTPS URLs are supported."
            });
        }

        // Prepare the URL for VirusTotal
        const form = new URLSearchParams();
        form.append("url", parsedUrl.href);

        // Send the URL to VirusTotal
        const response = await fetch(
            "https://www.virustotal.com/api/v3/urls",
            {
                method: "POST",
                headers: {
                    "x-apikey": apiKey,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: form.toString()
            }
        );

        const data = await response.json();

        // Handle an unsuccessful VirusTotal response
        if (!response.ok) {
            console.error("VirusTotal request failed:", response.status);

            return res.status(502).json({
                error: data.error?.message ||
                    "VirusTotal could not process the request."
            });
        }

        // Return the analysis ID to our website
        res.json({
            message: "URL submitted for analysis.",
            analysisId: data.data.id
        });

    } catch (error) {
        console.error("Scan error:", error.message);

        res.status(500).json({
            error: "An unexpected error occurred while scanning."
        });
    }
});

// Step 2: Retrieve the analysis results
app.get("/api/scan-result/:id", async (req, res) => {
    try {
        const apiKey = process.env.VIRUSTOTAL_API_KEY;

        if (!apiKey || apiKey === "paste_your_api_key_here") {
            return res.status(500).json({
                error: "VirusTotal API key is missing."
            });
        }

        const response = await fetch(
            `https://www.virustotal.com/api/v3/analyses/${encodeURIComponent(req.params.id)}`,
            {
                headers: {
                    "x-apikey": apiKey
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Results request failed:", response.status);

            return res.status(502).json({
                error: data.error?.message ||
                    "Could not retrieve the analysis results."
            });
        }

        const attributes = data.data.attributes;

        res.json({
            status: attributes.status,
            stats: attributes.stats || {},
            results: attributes.results || {}
        });

    } catch (error) {
        console.error("Results error:", error.message);

        res.status(500).json({
            error: "Could not retrieve the scan results."
        });
    }
});

// Step 3: CyberGuide Chatbot Assistant endpoint
app.post("/api/chat", (req, res) => {
    try {
        const { message, lang = "en" } = req.body;
        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Please provide a valid message." });
        }

        const q = message.toLowerCase();
        let reply = "";

        if (lang === "am") {
            if (q.includes("ቴሌግራም") || q.includes("telegram")) {
                reply = "🚨 **የቴሌግራም ጥቃት መፍትሄ:** ወዲያውኑ ወደ Telegram Settings -> Devices ገብተው 'Terminate all other sessions' ይንኩ። ከዚያ Two-Step Verification ያብሩ። በኤስኤምኤስ የሚላክ ኮድ ለማንም አያጋሩ!";
            } else if (q.includes("ቴሌብር") || q.includes("ባንክ") || q.includes("ገንዘብ") || q.includes("ተጭበረበር")) {
                reply = "💳 **የተጭበረበረ ገንዘብ ማስመለስ:** ወዲያውኑ ለቴሌብር በ 127 ወይም ለንግድ ባንክ በ 951 ደውለው አካውንቱን ያስግዱ። ማስረጃዎችን ስክሪንሾት በማንሳት ለፌደራል ፖሊስ ሳይበር ክፍል በ 991 ሪፖርት ያድርጉ።";
            } else if (q.includes("ኢንሳ") || q.includes("ስልክ") || q.includes("ፖሊስ") || q.includes("963") || q.includes("991")) {
                reply = "📞 **የአደጋ ጊዜ ስልኮች:** ኢንሳ (INSA): 963 | የፌደራል ፖሊስ: 991 ወይም 816 | ኢትዮ ቴሌኮም: 994 | ቴሌብር: 127 | ንግድ ባንክ: 951";
            } else if (q.includes("ይለፍ ቃል") || q.includes("password")) {
                reply = "🔐 **የይለፍ ቃል ደህንነት:** ቢያንስ 12-16 ፊደላትን፣ ቁጥሮችና ምልክቶችን ያቀላቅሉ። በድረ-ገጻችን 'Security Tools' ውስጥ ያለውን የይለፍ ቃል መፈተሻ መጠቀም ይችላሉ።";
            } else {
                reply = "ሰላም! እኔ ሳይበርጋይድ ረዳትዎ ነኝ። ስለተጠለፉ አካውንቶች፣ ማጭበርበር፣ አጠራጣሪ ሊንክ፣ ወይም የኢንሳ 963 ስልክ ማንኛውንም ጥያቄ መጠየቅ ይችላሉ።";
            }
        } else if (lang === "om") {
            if (q.includes("telegram") || q.includes("telegiraamii") || q.includes("herrega")) {
                reply = "🚨 **Deebisaa Herrega Telegram:** Dafee gara Telegram Settings -> Devices deemuun 'Terminate All Other Sessions' tuqi. Sana booda Two-Step Verification bani. Koodii herregaa eenyuufiyyuu hin kennin!";
            } else if (q.includes("telebirr") || q.includes("cbe") || q.includes("saamicha") || q.includes("maallaqa") || q.includes("baankii")) {
                reply = "💳 **Saamicha Maallaqaa Telebirr / Baankii:** Dafee Telebirr (127) ykn CBE (951) bilbilii dabarsi akka dhaabbatu gaafadhu. Ragaa screenshot godhii Poolisii Federaalaa (991) gabaasi.";
            } else if (q.includes("insa") || q.includes("poolisii") || q.includes("bilbila") || q.includes("balaa") || q.includes("963") || q.includes("991")) {
                reply = "📞 **Lakkoofsota Balaa Tasaa:** INSA: 963 | Poolisii Federaalaa: 991 ykn 816 | Itoophiyaa Teelekoom: 994 | Telebirr: 127 | Baankii Daldalaa (CBE): 951";
            } else if (q.includes("jecha icciitii") || q.includes("password") || q.includes("icciitii")) {
                reply = "🔐 **Nageenya Jecha Icciitii:** Qubeelee 12-16, lakkoofsota fi mallattoolee (#$%!) maki. Meeshaa keenya 'Security Tools' keessatti jabina isaa sakatta'i!";
            } else {
                reply = "Akkam! Ani CyberGuide AI dha. Herregawwan hataman deebisuu, saamicha Telebirr ittisuu, hidhata shakkisiisaa sakatta'uu, fi lakkoofsa balaa tasaa INSA (963) irratti si gargaaruu danda'a.";
            }
        } else {
            if (q.includes("telegram")) {
                reply = "🚨 **Telegram Compromise Response:** Open Telegram Settings -> Devices -> tap 'Terminate All Other Sessions' immediately. Then enable Two-Step Verification under Privacy & Security. Never share your login SMS code!";
            } else if (q.includes("telebirr") || q.includes("cbe") || q.includes("scam") || q.includes("money") || q.includes("stolen")) {
                reply = "💳 **Financial Scam Response:** Call Telebirr helpline (127) or CBE hotline (951) immediately to freeze/reverse the transaction. Save screenshots of SMS receipts and report to Federal Police Cyber Crime (991).";
            } else if (q.includes("insa") || q.includes("police") || q.includes("contact") || q.includes("hotline")) {
                reply = "📞 **Ethiopian Cyber Hotlines:** INSA CERT: 963 | Federal Police Cyber Crime: 991 or 816 | Ethio Telecom: 994 | Telebirr: 127 | CBE: 951";
            } else if (q.includes("password")) {
                reply = "🔐 **Password Security:** Use 12-16 characters with letters, numbers, and symbols. Never reuse passwords across sites. Test passwords in our Security Tools section!";
            } else {
                reply = "Hello! I am CyberGuide AI. I can assist you with account recoveries, scam prevention, link analysis, password tools, and official Ethiopian cyber contacts (INSA 963). How can I assist you?";
            }
        }

        res.json({ reply });
    } catch (error) {
        console.error("Chat endpoint error:", error);
        res.status(500).json({ error: "An unexpected chat error occurred." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
