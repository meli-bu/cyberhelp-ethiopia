// ========================================
// CYBERHELP ETHIOPIA
// Emergency Help System
// ========================================


// Get all "Get Help" buttons
const helpButtons = document.querySelectorAll(".incident-card button");


// Get the incident cards
const incidentCards = document.querySelectorAll(".incident-card");


// Information for each cybersecurity incident
const incidentGuides = {

    "I clicked a suspicious link": {
        title: "🎣 You Clicked a Suspicious Link",

        steps: [
            "Do not enter any more information into the website.",
            "Close the suspicious webpage.",
            "If you entered a password, change it immediately.",
            "Enable two-factor authentication on the affected account.",
            "Check your account for unusual activity.",
            "Be careful of follow-up messages asking for passwords or OTPs."
        ],

        warning:
            "Never share your password, OTP, or verification code with someone who contacts you unexpectedly."
    },


    "My account was hacked": {
        title: "🔐 Your Account May Be Compromised",

        steps: [
            "Try to recover access using the platform's official recovery process.",
            "Change your password immediately if you still have access.",
            "Use a unique password that you do not use elsewhere.",
            "Enable two-factor authentication.",
            "Review active sessions and remove devices you do not recognize.",
            "Check your account settings for unauthorized changes."
        ],

        warning:
            "Do not trust people who claim they can recover your account if they ask for your password or payment."
    },


    "I think I've been scammed": {
        title: "💳 Possible Online Scam",

        steps: [
            "Stop communicating with the suspected scammer.",
            "Do not send additional money or information.",
            "Save screenshots, messages, receipts, and other evidence.",
            "If you shared a password, change it immediately.",
            "If a financial account was involved, contact the relevant provider through an official channel.",
            "Monitor your accounts for unusual activity."
        ],

        warning:
            "Scammers may create urgency and pressure you to act quickly. Take a moment to verify what happened."
    },


    "My email was compromised": {
        title: "📧 Your Email May Be Compromised",

        steps: [
            "Change your email password immediately.",
            "Enable two-factor authentication.",
            "Review your recovery email and phone number.",
            "Check active sessions and sign out of unfamiliar devices.",
            "Review important security settings for unauthorized changes.",
            "Check whether your email is being used to reset other accounts."
        ],

        warning:
            "Your email account can be especially important because it may be used to recover your other accounts."
    },


    "Someone knows my password": {
        title: "🔑 Your Password May Be Exposed",

        steps: [
            "Change the password immediately.",
            "Do not reuse the same password on other accounts.",
            "Enable two-factor authentication.",
            "Check the account for unusual activity.",
            "Review active sessions and remove unfamiliar devices.",
            "Consider using a password manager for unique passwords."
        ],

        warning:
            "Never send your password to anyone, even if they claim to be a security professional."
    },


    "I received a suspicious message": {
        title: "📱 Suspicious Message",

        steps: [
            "Do not click links in the message.",
            "Do not download unexpected attachments.",
            "Do not provide passwords, OTPs, or financial information.",
            "Check who actually sent the message.",
            "Verify important requests through an official channel.",
            "Report or delete the message when appropriate."
        ],

        warning:
            "Urgency, threats, unexpected rewards, and requests for sensitive information are common warning signs."
    }

};


// Platform-specific recovery guides for known accounts
const hackedAccountGuides = {
    telegram: {
        name: "Telegram",
        icon: "✈️",
        tagline: "Active sessions, two-step verification & recovery",
        title: "✈️ Recover Hacked Telegram Account",
        steps: [
            "Open the Telegram app on your phone, tap Settings → Devices (or Privacy & Security → Devices / Active Sessions).",
            "Immediately tap \"Terminate All Other Sessions\" to disconnect all unauthorized devices and kick out the intruder.",
            "Go to Settings → Privacy and Security → Two-Step Verification. Set a strong password and add your personal email address for password recovery.",
            "Check your account phone number under Settings to make sure the intruder didn't change it to their own number.",
            "Alert your friends and channels: Hackers commonly message friends or post in groups asking for emergency Telebirr / CBE money transfers or verification codes.",
            "If completely logged out and unable to receive SMS, contact official Telegram support via telegram.org/support."
        ],
        warning: "NEVER share the 5-digit login code sent by Telegram via SMS or chat with ANYONE. Real Telegram never asks for your login code inside chat.",
        actionUrl: "https://telegram.org/support",
        actionText: "Visit Official Telegram Support"
    },
    instagram: {
        name: "Instagram",
        icon: "📸",
        tagline: "Security alert email, login link & video selfie",
        title: "📸 Recover Hacked Instagram Account",
        steps: [
            "Check your personal email inbox for a security alert from security@mail.instagram.com stating your email was changed. Tap \"Revert this change\" or \"Secure your account here\".",
            "On the Instagram login screen, tap \"Forgot password?\" or \"Need more help?\". Enter your username or phone number to request a login link.",
            "If the hacker changed your email and phone number, tap \"Can't reset your password?\" → \"Try another way\" → \"My account was hacked\".",
            "If you have photos of yourself on the account, submit a Video Selfie Verification to prove your identity directly to Instagram security.",
            "Once access is restored, go to Settings → Accounts Center → Password and Security → Where You're Logged In, and log out of all unknown devices.",
            "Turn on Two-Factor Authentication (2FA) using an Authenticator app (e.g. Google Authenticator) rather than SMS."
        ],
        warning: "Instagram NEVER sends Direct Messages (DMs) regarding copyright infringement or blue badge verification. All such DMs are phishing scams.",
        actionUrl: "https://help.instagram.com/contact/740949042640030",
        actionText: "Instagram Account Recovery Help"
    },
    email: {
        name: "Email Account (Gmail / Outlook / Yahoo)",
        icon: "📧",
        tagline: "Password reset, device logout & hidden forwarding rules",
        title: "📧 Recover Hacked Email Account",
        steps: [
            "Go directly to official account recovery: accounts.google.com/signin/recovery (for Gmail) or account.live.com/acsr (for Outlook/Hotmail).",
            "Enter your email and verify your identity using your backup phone number, alternative recovery email, or trusted security keys.",
            "Immediately change your password to a strong, unique 14+ character password not used on any other website.",
            "Go to Security Settings → Your Devices / Active Sessions and revoke access for all unrecognized computers, phones, or tablets.",
            "CRITICAL: Check Email Settings → \"Forwarding and POP/IMAP\" and \"Filters\". Hackers frequently set up hidden forwarding rules to secretly steal your bank OTPs and reset codes.",
            "Turn on 2-Step Verification (Google Authenticator, security key, or Google Prompt)."
        ],
        warning: "Your email account is your master digital key. If compromised, attackers can reset passwords on your Telegram, Facebook, TikTok, and financial accounts. Secure it first!",
        actionUrl: "https://accounts.google.com/signin/recovery",
        actionText: "Go to Google Account Recovery"
    },
    facebook: {
        name: "Facebook",
        icon: "👥",
        tagline: "facebook.com/hacked, trusted contacts & active sessions",
        title: "👥 Recover Hacked Facebook Account",
        steps: [
            "Visit the official Facebook compromise recovery portal: facebook.com/hacked.",
            "Search for your profile using your phone number, email address, or Facebook profile username.",
            "Follow the guided verification steps to reset your password and secure your account credentials.",
            "Go to Settings & Privacy → Settings → Accounts Center → Password & Security → Where you're logged in, and choose \"Log out of all sessions\".",
            "Review your contact details (email and mobile number) to ensure the intruder did not add their own recovery email.",
            "Turn on Two-Factor Authentication under Password and Security."
        ],
        warning: "Do NOT pay third-party \"account recovery agents\" or scammers in comments claiming they can recover your account. They are advance-fee frauds.",
        actionUrl: "https://www.facebook.com/hacked",
        actionText: "Open Facebook Hacked Portal"
    },
    tiktok: {
        name: "TikTok",
        icon: "🎵",
        tagline: "Reset code, device management & 2-step verification",
        title: "🎵 Recover Hacked TikTok Account",
        steps: [
            "On the TikTok login screen, tap \"Forgot password?\" and choose Phone Number or Email to receive an official reset code.",
            "If credentials were changed, tap \"Need help?\" or go to Profile → Menu → Settings and Privacy → Report a problem → Account and profile → Log in → Hacked account.",
            "Open Settings and Privacy → Security → Manage devices, and immediately delete any unrecognized smartphones or web sessions.",
            "Change your password to a strong passphrase containing uppercase, lowercase, numbers, and symbols.",
            "Turn on 2-Step Verification (Security → 2-Step verification) with trusted verification methods."
        ],
        warning: "Never click external links in TikTok comments or bios claiming free followers, coins, or verified badges.",
        actionUrl: "https://support.tiktok.com",
        actionText: "Visit TikTok Support Center"
    },
    whatsapp: {
        name: "WhatsApp",
        icon: "💬",
        tagline: "SMS re-registration, linked devices & PIN reset",
        title: "💬 Recover Hacked WhatsApp Account",
        steps: [
            "Re-register your WhatsApp on your phone by entering your phone number and entering the 6-digit SMS verification code.",
            "Entering the 6-digit SMS code automatically logs out anyone currently using your account on another device.",
            "If prompted for a Two-Step Verification PIN that you did not set, the hacker enabled it. You must wait 7 days to reset without the PIN, but the hacker is already kicked out.",
            "Open WhatsApp Settings → Linked Devices, and immediately log out of all unrecognized browser or desktop connections.",
            "Go to Settings → Account → Two-Step Verification, and set a 6-digit PIN with a recovery email to permanently secure your account."
        ],
        warning: "Never share your WhatsApp 6-digit SMS code with anyone—even if a family member or friend asks you in a message.",
        actionUrl: "https://www.whatsapp.com/contact",
        actionText: "WhatsApp Help Center"
    }
};

// Modal for "My account was hacked" account selector
function showHackedAccountModal() {
    const overlay = document.createElement("div");
    overlay.className = "help-overlay";

    const modal = document.createElement("div");
    modal.className = "help-modal";

    function renderSelector() {
        modal.innerHTML = `
            <button class="close-help" aria-label="Close modal">✕</button>
            <h2>🔐 My Account Was Hacked</h2>
            <p style="color: #64748b; font-size: 1.05rem; margin-bottom: 20px; line-height: 1.6;">
                Different platforms require different recovery procedures. Select the account that was compromised to get immediate, step-by-step guidance:
            </p>
            <div class="account-select-grid">
                <button type="button" class="account-option-btn" data-account="telegram">
                    <span class="account-option-icon">✈️</span>
                    <div class="account-option-info">
                        <strong>Telegram</strong>
                        <small>Active sessions & 2-step verification</small>
                    </div>
                </button>
                <button type="button" class="account-option-btn" data-account="instagram">
                    <span class="account-option-icon">📸</span>
                    <div class="account-option-info">
                        <strong>Instagram</strong>
                        <small>Security alert email & video selfie</small>
                    </div>
                </button>
                <button type="button" class="account-option-btn" data-account="email">
                    <span class="account-option-icon">📧</span>
                    <div class="account-option-info">
                        <strong>Email Account (Gmail / Outlook)</strong>
                        <small>Recovery portal & hidden forwarding rules</small>
                    </div>
                </button>
                <button type="button" class="account-option-btn" data-account="facebook">
                    <span class="account-option-icon">👥</span>
                    <div class="account-option-info">
                        <strong>Facebook</strong>
                        <small>facebook.com/hacked & account center</small>
                    </div>
                </button>
                <button type="button" class="account-option-btn" data-account="tiktok">
                    <span class="account-option-icon">🎵</span>
                    <div class="account-option-info">
                        <strong>TikTok</strong>
                        <small>Reset code & manage devices</small>
                    </div>
                </button>
                <button type="button" class="account-option-btn" data-account="whatsapp">
                    <span class="account-option-icon">💬</span>
                    <div class="account-option-info">
                        <strong>WhatsApp</strong>
                        <small>SMS re-registration & linked devices</small>
                    </div>
                </button>
            </div>
            <div class="warning-box" style="margin-top: 15px;">
                <strong>⚠️ Emergency Tip:</strong>
                <p>If financial services (Telebirr, CBE) are linked to this phone or email, contact your bank immediately (CBE: 951, Telebirr: 127) to safeguard your money.</p>
            </div>
            <button class="close-guide" style="margin-top: 20px;">Close</button>
        `;

        modal.querySelector(".close-help").addEventListener("click", () => overlay.remove());
        modal.querySelector(".close-guide").addEventListener("click", () => overlay.remove());

        modal.querySelectorAll(".account-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const accKey = btn.dataset.account;
                renderGuide(accKey);
            });
        });
    }

    function renderGuide(accKey) {
        const acc = hackedAccountGuides[accKey];
        if (!acc) return;

        const stepsHTML = acc.steps.map((step, i) => `
            <div class="help-step">
                <span>${i + 1}</span>
                <p>${step}</p>
            </div>
        `).join("");

        modal.innerHTML = `
            <button class="close-help" aria-label="Close modal">✕</button>
            <button type="button" class="back-to-accounts-btn">← Back to Account List</button>
            <h2>${acc.title}</h2>
            <h3 style="color: #2563eb; margin-bottom: 20px;">🚨 Step-by-Step Recovery:</h3>
            <div class="help-steps">
                ${stepsHTML}
            </div>
            <div class="warning-box">
                <strong>⚠️ Important:</strong>
                <p>${acc.warning}</p>
            </div>
            ${acc.actionUrl ? `
                <div style="margin-top: 20px;">
                    <a href="${acc.actionUrl}" target="_blank" rel="noopener noreferrer" class="modal-action-btn">
                        🔗 ${acc.actionText} ↗
                    </a>
                </div>
            ` : ""}
            <button class="close-guide">I Understand</button>
        `;

        modal.querySelector(".close-help").addEventListener("click", () => overlay.remove());
        modal.querySelector(".close-guide").addEventListener("click", () => overlay.remove());
        modal.querySelector(".back-to-accounts-btn").addEventListener("click", () => renderSelector());
    }

    renderSelector();
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Function that displays the emergency guide
function showHelpGuide(guide) {

    // Create the background overlay
    const overlay = document.createElement("div");

    overlay.className = "help-overlay";


    // Create the help window
    const modal = document.createElement("div");

    modal.className = "help-modal";


    // Create the list of steps
    const stepsHTML = guide.steps
        .map((step, index) => {
            return `
                <div class="help-step">
                    <span>${index + 1}</span>
                    <p>${step}</p>
                </div>
            `;
        })
        .join("");


    // Put the content inside the modal
    modal.innerHTML = `

        <button class="close-help">
            ✕
        </button>

        <h2>${guide.title}</h2>

        <h3>🚨 What should you do?</h3>

        <div class="help-steps">
            ${stepsHTML}
        </div>

        <div class="warning-box">
            <strong>⚠️ Important:</strong>

            <p>${guide.warning}</p>
        </div>

        <button class="close-guide">
            I Understand
        </button>
    `;


    // Add everything to the page
    overlay.appendChild(modal);

    document.body.appendChild(overlay);


    // Close button
    modal.querySelector(".close-help")
        .addEventListener("click", () => {
            overlay.remove();
        });


    // "I Understand" button
    modal.querySelector(".close-guide")
        .addEventListener("click", () => {
            overlay.remove();
        });


    // Close if user clicks outside the modal
    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            overlay.remove();
        }

    });

}

// Add click and touch behavior to incident cards and buttons
incidentCards.forEach((card) => {
    const titleEl = card.querySelector("h3");
    const button = card.querySelector("button");
    const title = titleEl ? titleEl.textContent.trim() : "";

    const triggerHelp = () => {
        if (title.toLowerCase().includes("hacked") || title.toLowerCase().includes("account was hacked")) {
            showHackedAccountModal();
        } else if (incidentGuides[title]) {
            showHelpGuide(incidentGuides[title]);
        }
    };

    if (button) {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            triggerHelp();
        });
    }

    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
        triggerHelp();
    });
});

// ========================================
// CYBERSECURITY BASICS INTERACTIVE GUIDES
// ========================================

const basicsKnowledge = {
    phishing: {
        title: "🎣 Phishing: Recognizing Deceptive Attacks",
        explanation: "Phishing is a social engineering cyber attack where fraudsters pose as trusted institutions—such as Ethio Telecom, CBE, Telebirr, or popular social apps—to trick you into entering passwords, OTP codes, or card details.",
        knowledge: [
            "Fake Urgency: Messages saying 'Your account will be suspended today!' or 'Urgent: Verify within 2 hours' are designed to panic you into making mistakes.",
            "Deceptive Domains: Attackers use fake look-alike addresses like 'cbe-bonus-ethiopia.com' or 'ethio-telecom-airtime.org' instead of real official URLs.",
            "Impersonal Greetings: Phishing messages usually say 'Dear customer' or 'Valued user' instead of your actual registered name.",
            "Common Ethiopian Scams: Fake Telegram links advertising free 100GB Ethio Telecom airtime or CBE lottery bonuses are 100% phishing attacks!"
        ],
        tips: [
            "Never tap on links sent in unexpected text messages or direct messages.",
            "Verify suspicious messages through official hotlines (Ethio Telecom 994, CBE 951, INSA 963).",
            "Use our built-in URL Risk Analyzer to check suspicious web addresses before opening them."
        ]
    },
    password: {
        title: "🔐 Password Security: Building Impenetrable Shields",
        explanation: "Passwords are your frontline locks protecting your personal chats, photos, emails, and finances. Weak, short, or reused passwords make you an easy target for automated brute-force attacks.",
        knowledge: [
            "Passphrases Beat Short Passwords: A 16+ character phrase (e.g. 'BlueNile#RiverSunset2026!') is dramatically stronger and easier to remember than short complex strings.",
            "The Re-use Trap: If you use the same password on multiple websites and just one gets breached, hackers automatically access your other accounts.",
            "Predictable Secrets: Names of family members, birth years, phone numbers, and football teams are easily found on social media.",
            "Password Managers: Trusted password managers securely generate and remember unique credentials for every account."
        ],
        tips: [
            "Create passphrases that are at least 12 to 16+ characters long.",
            "Always enable Two-Factor Authentication (2FA) wherever supported.",
            "Test your password strength using our interactive Password Checker tool."
        ]
    },
    otp: {
        title: "🔢 OTP Safety: Guarding Your One-Time Passwords",
        explanation: "An OTP (One-Time Password) is a temporary numerical code sent via SMS to verify that you—and only you—are approving a login, transaction, or password reset.",
        knowledge: [
            "OTP = Your Digital Signature: Anyone who has your OTP has full permission to transfer money or take over your accounts.",
            "The Caller Trick: Scammers call claiming to be Ethio Telecom or Telebirr support: 'We are upgrading your SIM card, please read back the 6-digit code we just sent you.'",
            "Universal Security Rule: Official staff from Ethio Telecom, CBE, Telebirr, or any bank will NEVER call or message you asking for your OTP or PIN.",
            "Expired Codes: Legitimate OTPs expire within 2 to 5 minutes; never enter an OTP after a session has ended."
        ],
        tips: [
            "Never read out, share, or forward an OTP to anyone under any circumstances.",
            "If someone calls demanding an OTP, hang up immediately and block the caller.",
            "If you suspect you leaked an OTP, call Telebirr (127) or CBE (951) immediately to freeze your account."
        ]
    },
    scams: {
        title: "💳 Online Scams: Spotting Fraud Before It Strikes",
        explanation: "Online scams are fraudulent tricks carried out over Telegram, TikTok, Facebook, or SMS designed to steal your money or identity using fake promises or emotional manipulation.",
        knowledge: [
            "Too Good To Be True: Promises of doubling your money in 24 hours, guaranteed forex returns, or winning lotteries you never entered are 100% scams.",
            "Fake Job & Visa Offers: Unofficial agents post fake overseas job offers (Canada, Dubai, Europe) demanding 'processing fees' through Telebirr or CBE.",
            "Friend Impersonation: Scammers take over a friend's Telegram and message you: 'Emergency! Please send me 1,000 Birr on Telebirr, I'll pay you back tomorrow.' Always call your friend directly on the phone to verify!",
            "Advance Fee Traps: Demands for shipping, delivery, or administrative fees before receiving an alleged prize or grant."
        ],
        tips: [
            "Always verify requests for emergency money through a direct phone call.",
            "Preserve transaction receipts, phone numbers, and chat screenshots as evidence.",
            "Report fraud immediately to Telebirr (127), CBE (951), and Federal Police Cyber Crime (991)."
        ]
    }
};

function showBasicsGuide(categoryKey) {
    const cat = basicsKnowledge[categoryKey];
    if (!cat) return;

    const overlay = document.createElement("div");
    overlay.className = "help-overlay";

    const modal = document.createElement("div");
    modal.className = "help-modal";

    const knowledgeListHTML = cat.knowledge.map(item => `<li>${item}</li>`).join("");
    const tipsListHTML = cat.tips.map(item => `<li>${item}</li>`).join("");

    modal.innerHTML = `
        <button class="close-help" aria-label="Close modal">✕</button>
        <h2>${cat.title}</h2>
        <p style="font-size: 1.05rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">
            ${cat.explanation}
        </p>

        <div class="category-knowledge-box">
            <h4>💡 General Knowledge & Key Warning Signs:</h4>
            <ul>
                ${knowledgeListHTML}
            </ul>
        </div>

        <div class="warning-box" style="margin-top: 15px;">
            <strong>🛡️ Golden Rules to Protect Yourself:</strong>
            <ul style="margin: 8px 0 0 20px; color: #7c2d12; line-height: 1.6;">
                ${tipsListHTML}
            </ul>
        </div>

        <button class="close-guide">I Understand</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    modal.querySelector(".close-help").addEventListener("click", () => overlay.remove());
    modal.querySelector(".close-guide").addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Attach listeners to Cybersecurity Basics cards
document.querySelectorAll(".learning-card").forEach(card => {
    const cat = card.dataset.category;
    if (cat) {
        card.addEventListener("click", () => showBasicsGuide(cat));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showBasicsGuide(cat);
            }
        });
    }
});
// ========================================
// URL RISK ANALYZER
// ========================================


// Get the URL tool elements

const openUrlTool =
    document.getElementById("open-url-tool");

const closeUrlTool =
    document.getElementById("close-url-tool");

const urlTool =
    document.getElementById("url-tool");

const analyzeUrlButton =
    document.getElementById("analyze-url");

const urlInput =
    document.getElementById("url-input");

const urlResult =
    document.getElementById("url-result");


// Open the URL analyzer

openUrlTool.addEventListener("click", () => {

    urlTool.style.display = "block";

    urlInput.focus();

});


// Close the URL analyzer

closeUrlTool.addEventListener("click", () => {

    urlTool.style.display = "none";

    urlResult.innerHTML = "";

    urlInput.value = "";

});


// Analyze the URL using VirusTotal

analyzeUrlButton.addEventListener("click", async () => {
    const url = urlInput.value.trim();

    if (url === "") {
        urlResult.textContent = "Please enter a URL first.";
        return;
    }

    analyzeUrlButton.disabled = true;
    urlResult.textContent = "Scanning URL with VirusTotal...";

    try {
        // Send the URL to our backend
        const response = await fetch("/api/scan-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: url })
        });

        const submitData = await response.json();

        if (!response.ok) {
            throw new Error(submitData.error || "Could not submit URL.");
        }

        let scanData;

        // Wait for VirusTotal to finish scanning
        for (let attempt = 0; attempt < 10; attempt++) {
            await new Promise(resolve => setTimeout(resolve, 2000));

            const resultResponse = await fetch(
                `/api/scan-result/${encodeURIComponent(submitData.analysisId)}`
            );

            scanData = await resultResponse.json();

            if (!resultResponse.ok) {
                throw new Error(
                    scanData.error || "Could not retrieve scan results."
                );
            }

            if (scanData.status === "completed") {
                break;
            }
        }

        if (!scanData || scanData.status !== "completed") {
            urlResult.textContent =
                "The scan is taking longer than expected. Please try again.";
            return;
        }

        const stats = scanData.stats || {};

        const malicious = stats.malicious || 0;
        const suspicious = stats.suspicious || 0;
        const harmless = stats.harmless || 0;
        const undetected = stats.undetected || 0;

        let verdict;

        if (malicious > 0) {
            verdict = "⚠️ Potentially malicious URL!";
        } else if (suspicious > 0) {
            verdict = "⚠️ Suspicious URL. Be careful.";
        } else {
            verdict = "No malicious detections reported.";
        }

        urlResult.textContent =
            `${verdict}\n\n` +
            `Malicious: ${malicious}\n` +
            `Suspicious: ${suspicious}\n` +
            `Harmless: ${harmless}\n` +
            `Undetected: ${undetected}\n\n` +
            "Note: No detections does not guarantee that a URL is safe.";

    } catch (error) {
        urlResult.textContent = "Error: " + error.message;
    } finally {
        analyzeUrlButton.disabled = false;
    }
});


// ========================================
// PASSWORD STRENGTH CHECKER
// ========================================


// Get password tool elements

const openPasswordTool =
    document.getElementById("open-password-tool");

const closePasswordTool =
    document.getElementById("close-password-tool");

const passwordTool =
    document.getElementById("password-tool");

const passwordInput =
    document.getElementById("password-input");

const checkPasswordButton =
    document.getElementById("check-password");

const passwordStrength =
    document.getElementById("password-strength");

const passwordMeterBar =
    document.getElementById("password-meter-bar");

const passwordChecks =
    document.getElementById("password-checks");


// Open password checker

openPasswordTool.addEventListener("click", () => {

    passwordTool.style.display = "block";

    passwordInput.focus();

});


// Close password checker

closePasswordTool.addEventListener("click", () => {

    passwordTool.style.display = "none";

    passwordInput.value = "";

    passwordStrength.textContent =
        "Strength: Not checked";

    passwordMeterBar.style.width = "0%";

    passwordChecks.innerHTML = "";

});


// Check password

checkPasswordButton.addEventListener("click", () => {

    const password =
        passwordInput.value;


    // Make sure something was entered

    if (password.length === 0) {

        passwordStrength.textContent =
            "⚠️ Please enter a test password.";

        passwordChecks.innerHTML = "";

        passwordMeterBar.style.width = "0%";

        return;
    }


    // Security checks

    const hasLowercase =
        /[a-z]/.test(password);

    const hasUppercase =
        /[A-Z]/.test(password);

    const hasNumber =
        /[0-9]/.test(password);

    const hasSymbol =
        /[^A-Za-z0-9]/.test(password);

    const isLongEnough =
        password.length >= 12;


    // Calculate score

    let score = 0;


    if (isLongEnough) {
        score++;
    }

    if (hasLowercase) {
        score++;
    }

    if (hasUppercase) {
        score++;
    }

    if (hasNumber) {
        score++;
    }

    if (hasSymbol) {
        score++;
    }


    // Determine strength

    let strengthText;

    let meterWidth;


    if (score <= 2) {

        strengthText =
            "🔴 Strength: Weak";

        meterWidth = "30%";

    } else if (score <= 4) {

        strengthText =
            "🟠 Strength: Medium";

        meterWidth = "65%";

    } else {

        strengthText =
            "🟢 Strength: Strong";

        meterWidth = "100%";

    }


    // Display strength

    passwordStrength.textContent =
        strengthText;


    passwordMeterBar.style.width =
        meterWidth;


    // Display security checks

    passwordChecks.innerHTML = `

        <div class="password-check ${
            isLongEnough ? "good" : "bad"
        }">

            ${isLongEnough ? "✓" : "✗"}

            At least 12 characters

        </div>


        <div class="password-check ${
            hasUppercase ? "good" : "bad"
        }">

            ${hasUppercase ? "✓" : "✗"}

            Contains uppercase letters

        </div>


        <div class="password-check ${
            hasLowercase ? "good" : "bad"
        }">

            ${hasLowercase ? "✓" : "✗"}

            Contains lowercase letters

        </div>


        <div class="password-check ${
            hasNumber ? "good" : "bad"
        }">

            ${hasNumber ? "✓" : "✗"}

            Contains numbers

        </div>


        <div class="password-check ${
            hasSymbol ? "good" : "bad"
        }">

            ${hasSymbol ? "✓" : "✗"}

            Contains symbols

        </div>

    `;

});
// ========================================
// PHISHING AWARENESS QUIZ
// ========================================


// Quiz questions

const phishingQuestions = [

    {
        question:
            "URGENT: Your bank account will be permanently suspended today. Click this link immediately to verify your account and avoid losing access.",

        answer: "phishing",

        explanation:
            "This is a common phishing tactic. The message creates urgency and tries to make you click a link immediately."
    },


    {
        question:
            "Your university sends you an announcement through its official website. You open the website by typing the known official address into your browser yourself.",

        answer: "safe",

        explanation:
            "This is safer because you navigated to the known website yourself instead of clicking an unexpected link."
    },


    {
        question:
            "Congratulations! You have won 50,000 birr. Send your password and OTP to claim your prize immediately.",

        answer: "phishing",

        explanation:
            "Legitimate organizations should never ask you to send your password or OTP to claim a prize."
    },


    {
        question:
            "A friend sends you a message saying they need your email password because they want to help you recover your account.",

        answer: "phishing",

        explanation:
            "Never share your password with another person, even if they claim to be helping you."
    },


    {
        question:
            "You receive an unexpected email containing an attachment. You verify the sender using another trusted communication method before opening it.",

        answer: "safe",

        explanation:
            "Verifying an unexpected attachment through a trusted channel is a good security practice."
    }

];


/* ========================================
   CYBERQUEST: AGE-BASED QUESTIONS
======================================== */

// For children under 8
const cyberQuestQuestionsUnder8 = [
    {
        question: "A stranger online asks for your home address. What should you do?",
        options: [
            "Tell them my address",
            "Stop and tell a trusted adult",
            "Ask them for their address first"
        ],
        correctAnswer: 1,
        explanation: "Never share your home address with strangers online. Tell a trusted adult."
    },
    {
        question: "A game says you won a prize if you give it your password. What should you do?",
        options: [
            "Give it my password",
            "Use my friend's password",
            "Never share my password and ask an adult"
        ],
        correctAnswer: 2,
        explanation: "Your password is private. A prize should not require you to share it."
    },
    {
        question: "Someone sends you a scary message online. What should you do?",
        options: [
            "Tell a trusted adult",
            "Send a scary message back",
            "Share it with everyone"
        ],
        correctAnswer: 0,
        explanation: "A trusted adult can help you handle upsetting or unsafe messages."
    },
    {
        question: "Your friend asks to use your password. What is the safest choice?",
        options: [
            "Write it on paper for them",
            "Keep it private",
            "Post it in the class group"
        ],
        correctAnswer: 1,
        explanation: "Passwords should stay private, even when you are helping a friend."
    },
    {
        question: "A pop-up says, 'Click here now or your computer will break!' What should you do?",
        options: [
            "Click quickly",
            "Download whatever it offers",
            "Don't click; ask a trusted adult"
        ],
        correctAnswer: 2,
        explanation: "Scary pop-ups can be tricks. Stop and ask a trusted adult."
    }
];


// For children ages 8–11
const cyberQuestQuestions8to11 = [
    {
        question: "You receive a message saying you won a phone, but you must click an unfamiliar link. What should you do?",
        options: [
            "Click because free prizes are exciting",
            "Verify the offer with a trusted adult or official source",
            "Enter your account password"
        ],
        correctAnswer: 1,
        explanation: "Unexpected prizes and unfamiliar links can be phishing tricks."
    },
    {
        question: "A classmate sends you a link asking you to sign in to your school account. The website looks unusual. What is safest?",
        options: [
            "Check the address and confirm with your teacher",
            "Enter your password to test it",
            "Use the same password everywhere"
        ],
        correctAnswer: 0,
        explanation: "Check unfamiliar websites before entering account details."
    },
    {
        question: "Which password is the safest choice?",
        options: [
            "12345678",
            "Your first name",
            "A long, unique password or passphrase"
        ],
        correctAnswer: 2,
        explanation: "Long, unique passwords are harder to guess. A password manager can help."
    },
    {
        question: "A stranger online asks for your school name and location. What should you do?",
        options: [
            "Share everything to make a new friend",
            "Keep personal information private and tell a trusted adult",
            "Post the information publicly"
        ],
        correctAnswer: 1,
        explanation: "Personal details can reveal where to find you. Keep them private."
    },
    {
        question: "A website asks you to download a file to claim a prize. You weren't expecting it. What should you do?",
        options: [
            "Download it immediately",
            "Disable your security software",
            "Don't download it; verify the offer first"
        ],
        correctAnswer: 2,
        explanation: "Unexpected downloads may contain malware."
    }
];


// For learners ages 12+
const cyberQuestQuestions12plus = [
    {
        question: "You receive an email claiming your account will be suspended unless you sign in immediately through its link. What is the safest response?",
        options: [
            "Use the link because the message sounds urgent",
            "Visit the official website directly and check your account",
            "Reply with your password"
        ],
        correctAnswer: 1,
        explanation: "Urgency is a common phishing tactic. Verify through an official channel."
    },
    {
        question: "Which is the strongest sign that a message might be phishing?",
        options: [
            "It contains your usual newsletter",
            "It comes from a contact you independently verified",
            "It asks for sensitive information through an unexpected link"
        ],
        correctAnswer: 2,
        explanation: "Unexpected requests for sensitive information deserve careful verification."
    },
    {
        question: "You reuse the same password on several websites. Why is this risky?",
        options: [
            "A breach on one website could expose accounts using that password",
            "It makes your internet slower",
            "It automatically deletes your files"
        ],
        correctAnswer: 0,
        explanation: "Unique passwords limit the damage if one account is compromised."
    },
    {
        question: "A social media account sends you an unusual request for money. What should you do first?",
        options: [
            "Send money immediately",
            "Verify the request using another trusted communication method",
            "Share the request publicly with personal details"
        ],
        correctAnswer: 1,
        explanation: "Accounts can be impersonated or compromised. Verify unusual requests independently."
    },
    {
        question: "A website address differs from the official domain by one extra character. What should you do?",
        options: [
            "Assume it is safe because the logo looks correct",
            "Enter your login details to investigate",
            "Avoid entering sensitive information and verify the official domain"
        ],
        correctAnswer: 2,
        explanation: "Lookalike domains can imitate legitimate websites. Check the address carefully."
    }
];

/* END OF CYBERQUEST AGE-BASED QUESTIONS */

// Quiz variables

let currentQuestion = 0;

let quizScore = 0;

let questionAnswered = false;


// Get HTML elements

const questionNumber =
    document.getElementById("question-number");

const quizScoreDisplay =
    document.getElementById("quiz-score");

const quizQuestion =
    document.getElementById("quiz-question");

const phishingAnswer =
    document.getElementById("phishing-answer");

const safeAnswer =
    document.getElementById("safe-answer");
const thirdAnswer =
     document.getElementById("third-answer");
const quizFeedback =
    document.getElementById("quiz-feedback");

const nextQuestion =
    document.getElementById("next-question");

const quizResult =
    document.getElementById("quiz-result");

let selectedCyberQuestAge = null;

// Load first question

loadQuestion();


// Function to load a question

function loadQuestion() {

  let activeQuestions = phishingQuestions;

if (selectedCyberQuestAge === "under8") {
    activeQuestions = cyberQuestQuestionsUnder8;
} else if (selectedCyberQuestAge === "8to11") {
    activeQuestions = cyberQuestQuestions8to11;
} else if (selectedCyberQuestAge === "12plus") {
    activeQuestions = cyberQuestQuestions12plus;
}

const question = activeQuestions[currentQuestion];

    questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${activeQuestions.length}`;

    quizScoreDisplay.textContent =
        `Score: ${quizScore}`;


    quizQuestion.textContent = question.question;

quizFeedback.innerHTML = "";

nextQuestion.style.display = "none";

// Enable the answer buttons
phishingAnswer.disabled = false;
safeAnswer.disabled = false;
thirdAnswer.disabled = false;

// Reset the button text
phishingAnswer.textContent = "🚨 This is Phishing";
safeAnswer.textContent = "✅ This looks Safe";

// Show three choices for CyberQuest missions
if (question.options) {
    phishingAnswer.textContent = question.options[0];
    safeAnswer.textContent = question.options[1];
    thirdAnswer.textContent = question.options[2];

    thirdAnswer.hidden = false;
} else {
    // Keep the original two-button phishing quiz
    thirdAnswer.hidden = true;
}

questionAnswered = false;

}


// Phishing button


 // Phishing answer button
phishingAnswer.addEventListener("click", () => {
    if (selectedCyberQuestAge !== null) {
        checkAnswer(0);
    } else {
        checkAnswer("phishing");
    }
});

// Safe answer button
safeAnswer.addEventListener("click", () => {
    if (selectedCyberQuestAge !== null) {
        checkAnswer(1);
    } else {
        checkAnswer("safe");
    }
});

// Third answer button
thirdAnswer.addEventListener("click", () => {
    checkAnswer(2);
});


// Check the answer


function checkAnswer(selectedAnswer) {
    // Stop the player from answering more than once
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    // Choose the correct question set
    let activeQuestions = phishingQuestions;

    if (selectedCyberQuestAge === "under8") {
        activeQuestions = cyberQuestQuestionsUnder8;
    } else if (selectedCyberQuestAge === "8to11") {
        activeQuestions = cyberQuestQuestions8to11;
    } else if (selectedCyberQuestAge === "12plus") {
        activeQuestions = cyberQuestQuestions12plus;
    }

    const question = activeQuestions[currentQuestion];

    // Disable all answer buttons
    phishingAnswer.disabled = true;
    safeAnswer.disabled = true;
    thirdAnswer.disabled = true;

    // Support both the original quiz and CyberQuest
    const correctAnswer =
        question.correctAnswer !== undefined
            ? question.correctAnswer
            : question.answer;

    if (selectedAnswer === correctAnswer) {
        quizScore++;

        quizFeedback.innerHTML = `
            <div class="feedback-correct">
                <strong>✅ Correct!</strong>
                <p>${question.explanation}</p>
            </div>
        `;
    } else {
        quizFeedback.innerHTML = `
            <div class="feedback-wrong">
                <strong>❌ Not quite!</strong>
                <p>${question.explanation}</p>
            </div>
        `;
    }

    // Update the score and show the Next button
    quizScoreDisplay.textContent = `Score: ${quizScore}`;
    nextQuestion.style.display = "block";
}



// Next question button


nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    // Select the questions for the chosen age group
    let activeQuestions = phishingQuestions;

    if (selectedCyberQuestAge === "under8") {
        activeQuestions = cyberQuestQuestionsUnder8;
    } else if (selectedCyberQuestAge === "8to11") {
        activeQuestions = cyberQuestQuestions8to11;
    } else if (selectedCyberQuestAge === "12plus") {
        activeQuestions = cyberQuestQuestions12plus;
    }

    // Check whether all questions are finished
    if (currentQuestion >= activeQuestions.length) {

        showQuizResult();

        return;
    }

    // Load the next question
    loadQuestion();

});


// Show final result

function showQuizResult() {


    quizQuestion.style.display =
        "none";


    phishingAnswer.style.display =
        "none";


    safeAnswer.style.display =
        "none";


    nextQuestion.style.display =
        "none";


    quizFeedback.style.display =
        "none";


    quizResult.style.display =
        "block";


    let resultMessage;


    if (quizScore === 5) {

        resultMessage =
            "🏆 Excellent! You identified every scenario correctly.";

    } else if (quizScore >= 3) {

        resultMessage =
            "🟢 Good job! You recognized most of the warning signs.";

    } else {

        resultMessage =
            "🟠 Keep learning! Phishing can be difficult to recognize, but you can improve with practice.";

    }


    quizResult.innerHTML = `

        <h2>
            🎣 Quiz Complete!
        </h2>

        <p>
            Your score:
            <strong>
                ${quizScore} / ${phishingQuestions.length}
            </strong>
        </p>

        <p>
            ${resultMessage}
        </p>


        <button
            class="restart-quiz"
            id="restart-quiz">

            🔄 Try Again

        </button>

    `;

    document
        .getElementById("restart-quiz")
        .addEventListener("click", restartQuiz);

    // Award XP and unlock the next mission
    completeCyberQuestMission(currentCyberQuestLevel);


    // Add a button to return to the mission map
    const returnToMapButton = document.createElement("button");

    returnToMapButton.type = "button";
    returnToMapButton.textContent = "🗺️ Return to Mission Map";
    returnToMapButton.className = "cyberquest-back";
    returnToMapButton.style.marginTop = "15px";

    returnToMapButton.addEventListener("click", function () {
        existingPhishingQuiz.hidden = true;
        cyberQuestMap.hidden = false;

        updateCyberQuestDashboard();

        cyberQuestMap.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    quizResult.appendChild(returnToMapButton);

  

}


// Restart quiz
function restartQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    quizQuestion.style.display = "block";

    phishingAnswer.style.display = "block";
    safeAnswer.style.display = "block";

    quizFeedback.style.display = "block";
    quizResult.style.display = "none";

    loadQuestion();

}

// ========================================
// MOBILE NAVIGATION
// ========================================


const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
// ========================================
// CYBER SAFETY SCORE
// ========================================


const safetyAnswers =
    document.querySelectorAll(".safety-answer");


const calculateSafety =
    document.getElementById("calculate-safety");


const safetyResult =
    document.getElementById("safety-result");


let selectedSafetyAnswers = [];


// When an answer is clicked

safetyAnswers.forEach((button) => {

    button.addEventListener("click", () => {

        const question =
            button.closest(".safety-question");


        // Remove selection from
        // buttons in this question

        const questionButtons =
            question.querySelectorAll(".safety-answer");


        questionButtons.forEach((btn) => {

            btn.classList.remove("selected");

        });


        // Select clicked button

        button.classList.add("selected");

    });

});


// Calculate score

calculateSafety.addEventListener("click", () => {

    const questions =
        document.querySelectorAll(".safety-question");


    let score = 0;

    let answered = 0;


    questions.forEach((question) => {

        const selected =
            question.querySelector(
                ".safety-answer.selected"
            );


        if (selected) {

            answered++;

            score += Number(
                selected.dataset.points
            );

        }

    });


    // Make sure every question
    // was answered

    if (answered < questions.length) {

        safetyResult.style.display =
            "block";


        safetyResult.innerHTML = `

            <h3>⚠️ Almost there!</h3>

            <p>
                Please answer all five questions
                before calculating your score.
            </p>

        `;

        return;

    }


    let level;

    let message;


    if (score >= 80) {

        level =
            "🟢 Excellent Cyber Safety";

        message =
            "You are following several strong cybersecurity practices. Keep them up!";

    } else if (score >= 60) {

        level =
            "🟡 Good, But Can Improve";

        message =
            "You have a good foundation, but there are some areas you should strengthen.";

    } else if (score >= 40) {

        level =
            "🟠 Needs Improvement";

        message =
            "Some important security practices are missing. Consider improving them.";

    } else {

        level =
            "🔴 High Risk";

        message =
            "Your answers show several areas that need attention. Start with strong passwords and two-factor authentication.";

    }


    safetyResult.style.display =
        "block";


    safetyResult.innerHTML = `

        <h2>
            ${score}/100
        </h2>

        <h3>
            ${level}
        </h3>

        <p>
            ${message}
        </p>

    `;


    safetyResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


/* ========================================
   CYBERQUEST: WELCOME, AGE SELECTION AND MAP
======================================== */

const cyberQuestEntry = document.getElementById("cyberquest-entry");
const cyberQuestWelcome = document.getElementById("cyberquest-welcome");
const cyberQuestAgeSelection = document.getElementById("cyberquest-age-selection");
const cyberQuestMap = document.getElementById("cyberquest-map");

const cyberQuestStartButton = document.getElementById("cyberquest-start");
const cyberQuestBackButton = document.getElementById("cyberquest-back");
const cyberQuestMapBackButton = document.getElementById("cyberquest-map-back");

const cyberQuestAgeCards = document.querySelectorAll(".cyberquest-age-card");
const cyberQuestMissions = document.querySelectorAll(".cyberquest-mission");

const existingPhishingQuiz = document.getElementById("phishing-quiz");
// Hide the old quiz until a CyberQuest mission starts
if (existingPhishingQuiz) {
    existingPhishingQuiz.hidden = true;
}
let currentCyberQuestLevel = 1;


// Start with the welcome screen
if (cyberQuestEntry && existingPhishingQuiz) {
    existingPhishingQuiz.hidden = true;
}


// Open age selection

if (cyberQuestStartButton && cyberQuestWelcome && cyberQuestAgeSelection) {
    cyberQuestStartButton.addEventListener("click", function () {
        cyberQuestWelcome.hidden = true;
        cyberQuestAgeSelection.hidden = false;

        cyberQuestAgeSelection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// Return to welcome screen
if (cyberQuestBackButton) {
    cyberQuestBackButton.addEventListener("click", function () {
        cyberQuestAgeSelection.hidden = true;
        cyberQuestWelcome.hidden = false;
    });
}


// Age-specific Mission metadata for CyberQuest
const AGE_MISSION_INFO = {
    under8: [
        { icon: "🗝️", title: "Secret Vault Keeper", desc: "Keep passwords private & safe" },
        { icon: "🏃", title: "Run to Trusted Adult", desc: "Find safe adult helpers" },
        { icon: "🫧", title: "Private Info Bubble Pop", desc: "Protect personal family details" },
        { icon: "🟢", title: "Green Lock Safari", desc: "Explore safe website trails" },
        { icon: "🛡️", title: "Cyber Hero Assembly", desc: "Earn the Little Hero badge" }
    ],
    "8to11": [
        { icon: "🔍", title: "URL Fake Link Zapper", desc: "Scan links & zap imposters" },
        { icon: "🏰", title: "Password Fortress", desc: "Build multi-layered defense" },
        { icon: "📱", title: "Scam Radar Sorter", desc: "Quarantine fake lottery scams" },
        { icon: "🛡️", title: "Public Wi-Fi Guard", desc: "Shield unencrypted traffic" },
        { icon: "🕵️", title: "Scam Escape Detective", desc: "Catch the social engineer" }
    ],
    "12plus": [
        { icon: "🔬", title: "Phishing Forensics", desc: "Inspect email headers & lures" },
        { icon: "🔐", title: "MFA Defense Matrix", desc: "Synchronize TOTP credentials" },
        { icon: "🛑", title: "Permission Firewall", desc: "Audit spyware & revoke access" },
        { icon: "🚨", title: "Incident Containment", desc: "Contain active account takeover" },
        { icon: "🇪🇹", title: "National Cyber Command", desc: "Defend Ethiopia's digital space" }
    ]
};

function updateMissionMapForAgeGroup(ageGroup) {
    const info = AGE_MISSION_INFO[ageGroup] || AGE_MISSION_INFO["8to11"];
    const missionButtons = document.querySelectorAll(".cyberquest-mission");
    missionButtons.forEach((btn, idx) => {
        if (info[idx]) {
            const iconSpan = btn.querySelector(".mission-icon");
            const strongSpan = btn.querySelector("strong");
            const nameSpan = btn.querySelector("span:not(.mission-icon)");
            if (iconSpan) iconSpan.textContent = info[idx].icon;
            if (nameSpan) nameSpan.textContent = info[idx].title;
            if (strongSpan) strongSpan.textContent = "Mission " + (idx + 1);
        }
    });
}

// Select an age group and open the mission map
cyberQuestAgeCards.forEach(function (card) {
    card.addEventListener("click", function () {
        selectedCyberQuestAge = card.dataset.ageGroup;
        updateMissionMapForAgeGroup(selectedCyberQuestAge);
        updateCyberQuestDashboard();

        cyberQuestEntry.hidden = true;
        cyberQuestMap.hidden = false;
        existingPhishingQuiz.hidden = true;

        cyberQuestMap.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Return from the map to age selection
if (cyberQuestMapBackButton) {
    cyberQuestMapBackButton.addEventListener("click", function () {
        cyberQuestMap.hidden = true;
        cyberQuestEntry.hidden = false;
        cyberQuestWelcome.hidden = true;
        cyberQuestAgeSelection.hidden = false;

        cyberQuestEntry.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// Open a mission when its button is clicked
cyberQuestMissions.forEach(function (mission) {
    mission.addEventListener("click", function () {
        if (mission.disabled) {
            return;
        }

        currentCyberQuestLevel = Number(mission.dataset.cyberquestLevel);

        cyberQuestMap.hidden = true;
        existingPhishingQuiz.hidden = true;

        if (window.CyberQuestEngine && typeof window.CyberQuestEngine.launchMission === "function") {
            window.CyberQuestEngine.launchMission(selectedCyberQuestAge || "8to11", currentCyberQuestLevel);
        }
    });
});


/* END OF CYBERQUEST WELCOME AND AGE SELECTION */


/* ========================================
   CYBERQUEST: SAVED PLAYER PROGRESS
======================================== */

const cyberQuestStorageKey = "cyberQuestProgressV1";

function getCyberQuestProgress() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(cyberQuestStorageKey)
        );

        if (
            saved &&
            Array.isArray(saved.completedLevels) &&
            Array.isArray(saved.badges)
        ) {
            return {
                xp: Number.isFinite(saved.xp) ? saved.xp : 0,
                completedLevels: saved.completedLevels,
                badges: saved.badges
            };
        }
    } catch (error) {
        console.warn("Could not load CyberQuest progress.", error);
    }

    return {
        xp: 0,
        completedLevels: [],
        badges: []
    };
}


function saveCyberQuestProgress(progress) {
    try {
        localStorage.setItem(
            cyberQuestStorageKey,
            JSON.stringify(progress)
        );
    } catch (error) {
        console.warn("Could not save CyberQuest progress.", error);
    }
}


function updateCyberQuestDashboard() {
    const progress = getCyberQuestProgress();

    const xpElement = document.getElementById("cyberquest-xp");
    const badgeCountElement = document.getElementById("cyberquest-badge-count");
    const completedCountElement = document.getElementById("cyberquest-completed-count");
    const badgesElement = document.getElementById("cyberquest-badges");
    const progressLabel = document.getElementById("cyberquest-level-progress");
    const progressFill = document.getElementById("cyberquest-progress-fill");

    if (xpElement) {
        xpElement.textContent = progress.xp + " XP";
    }

    if (badgeCountElement) {
        badgeCountElement.textContent = progress.badges.length;
    }

    if (completedCountElement) {
        completedCountElement.textContent =
            progress.completedLevels.length + "/5";
    }

    if (badgesElement) {
        badgesElement.replaceChildren();

        if (progress.badges.length === 0) {
            const message = document.createElement("p");
            message.textContent =
                "Your badges will appear here as you progress!";
            badgesElement.appendChild(message);
        } else {
            progress.badges.forEach(function (badge) {
                const badgeElement = document.createElement("span");
                badgeElement.className = "cyberquest-earned-badge";
                badgeElement.textContent = badge;
                badgesElement.appendChild(badgeElement);
            });
        }
    }

    const nextLevel = Math.min(
        progress.completedLevels.length + 1,
        5
    );

    if (progressLabel) {
        progressLabel.textContent =
            progress.completedLevels.length === 5
                ? "All 5 missions complete!"
                : "Level " + nextLevel + " of 5";
    }

    if (progressFill) {
        progressFill.style.width =
            (progress.completedLevels.length / 5 * 100) + "%";
    }

    document.querySelectorAll(".cyberquest-mission").forEach(
        function (mission) {
            const level = Number(mission.dataset.cyberquestLevel);
            const isCompleted = progress.completedLevels.includes(level);
            const isUnlocked =
                level === 1 ||
                progress.completedLevels.includes(level - 1);

            mission.disabled = !isUnlocked;

            mission.classList.toggle(
                "locked",
                !isUnlocked
            );

            mission.classList.toggle(
                "unlocked",
                isUnlocked && !isCompleted
            );

            if (isCompleted) {
                mission.classList.add("completed");
                mission.querySelector("small").textContent = "✅ Completed";
            } else if (isUnlocked) {
                mission.classList.remove("completed");
                mission.querySelector("small").textContent = "Available now";
            } else {
                mission.classList.remove("completed");
                mission.querySelector("small").textContent = "🔒 Locked";
            }
        }
    );
}


function completeCyberQuestMission(level) {
    if (!Number.isInteger(level) || level < 1 || level > 5) {
        return;
    }

    const progress = getCyberQuestProgress();

    // Don't award XP again for a completed mission.
    if (progress.completedLevels.includes(level)) {
        return;
    }

    // A mission can only be completed after the previous one.
    if (
        level > 1 &&
        !progress.completedLevels.includes(level - 1)
    ) {
        return;
    }

    progress.completedLevels.push(level);
    progress.xp += 100;

    if (!progress.badges.includes("🛡️ First Mission Hero")) {
        progress.badges.push("🛡️ First Mission Hero");
    }

    if (
        progress.completedLevels.length === 5 &&
        !progress.badges.includes("🏆 CyberQuest Champion")
    ) {
        progress.badges.push("🏆 CyberQuest Champion");
    }

    saveCyberQuestProgress(progress);
    updateCyberQuestDashboard();

    alert(
        "Mission complete! You earned 100 XP. Keep going, Cyber Hero!"
    );
}


// Display saved progress whenever the page loads.
updateCyberQuestDashboard();

/* END OF CYBERQUEST SAVED PLAYER PROGRESS */



/* ==========================================
   CYBERHELP ETHIOPIA: WEB AUDIO CONTROLLER
   Pure Browser Audio Synthesis (Zero Assets)
========================================== */

const AudioController = (() => {
    let audioCtx = null;

    function getContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
        try {
            const ctx = getContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(gainVal, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            // Audio context not allowed or failed
        }
    }

    return {
        playSuccess() {
            try {
                const ctx = getContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                [523.25, 659.25, 783.99].forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                    gain.gain.setValueAtTime(0.12, now + idx * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + idx * 0.08);
                    osc.stop(now + idx * 0.08 + 0.2);
                });
            } catch (e) {}
        },
        playCollect() {
            playTone(880, 'sine', 0.12, 0.15);
        },
        playFail() {
            playTone(180, 'sawtooth', 0.25, 0.18);
        },
        playZap() {
            playTone(440, 'square', 0.1, 0.12);
        },
        playVictory() {
            try {
                const ctx = getContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + idx * 0.12);
                    gain.gain.setValueAtTime(0.15, now + idx * 0.12);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + idx * 0.12);
                    osc.stop(now + idx * 0.12 + 0.35);
                });
            } catch (e) {}
        }
    };
})();

/* =======================================================
   CYBERQUEST: 15 DISTINCT EDUCATIONAL LEVEL CHALLENGES
   3 Age Groups x 5 Unique Levels with Scaling Mechanics
======================================================= */

window.CyberQuestEngine = (() => {
    const gameSection = document.getElementById("cyberquest-game");
    const canvas = document.getElementById("cyberquest-canvas");
    const titleDisplay = document.getElementById("cyberquest-game-title");
    const instructionsDisplay = document.getElementById("cyberquest-game-instructions");
    const messageDisplay = document.getElementById("cyberquest-game-message");
    const targetDisplay = document.getElementById("game-target");
    const shieldsDisplay = document.getElementById("game-shields");
    const xpDisplay = document.getElementById("game-xp");
    const livesDisplay = document.getElementById("game-lives");
    const timerDisplay = document.getElementById("game-timer");
    const startButton = document.getElementById("cyberquest-play");
    const backButton = document.getElementById("cyberquest-game-back");
    const nextButton = document.getElementById("cyberquest-next-mission");
    const replayButton = document.getElementById("cyberquest-replay-mission");
    const victoryPanel = document.getElementById("cyberquest-victory");
    const victoryHeading = document.getElementById("cyberquest-victory-heading");
    const victoryMessage = document.getElementById("cyberquest-victory-message");
    const victoryXP = document.getElementById("cyberquest-victory-xp");
    const victoryBadge = document.getElementById("cyberquest-victory-badge");

    if (!canvas || !gameSection) {
        console.warn("CyberQuest elements not fully ready.");
        return { launchMission: () => {} };
    }

    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.width || 900;
    const HEIGHT = canvas.height || 480;

    let currentAgeGroup = "8to11";
    let currentLevel = 1;
    let running = false;
    let animId = null;
    let lastTime = 0;

    let gameState = {
        target: 0,
        maxTarget: 5,
        xp: 0,
        lives: 3,
        timer: 60,
        particles: [],
        keys: { up: false, down: false, left: false, right: false, space: false },
        levelData: null,
        isOver: false,
        won: false
    };

    // Particles helper
    function spawnParticles(x, y, color = "#f5d547", count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 120 + 40;
            gameState.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0.6,
                maxLife: 0.6,
                color,
                size: Math.random() * 4 + 2
            });
        }
    }

    function updateParticles(dt) {
        for (let i = gameState.particles.length - 1; i >= 0; i--) {
            const p = gameState.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt;
            if (p.life <= 0) {
                gameState.particles.splice(i, 1);
            }
        }
    }

    function drawParticles(ctx) {
        gameState.particles.forEach(p => {
            const alpha = Math.max(0, p.life / p.maxLife);
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }

    // Helper: Rounded Rect
    function fillRoundedRect(ctx, x, y, w, h, r, fill, stroke, strokeWidth = 2) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = fill;
            ctx.fill();
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
        }
    }

    // Missions definitions & handlers
    const MISSIONS = {
        under8: {
            1: {
                title: "Secret Vault Keeper",
                badge: "🗝️ Little Vault Master",
                instruction: "Move your vault chest to catch secret password keys! Dodge snooper hands.",
                takeaway: "Passwords are like secret keys! Keep them locked in your vault and never show strangers.",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.vault = { x: 400, y: 390, width: 110, height: 45, speed: 380 };
                    s.items = [];
                    s.spawnTimer = 0;
                },
                update(s, dt) {
                    if (s.keys.left) s.vault.x -= s.vault.speed * dt;
                    if (s.keys.right) s.vault.x += s.vault.speed * dt;
                    s.vault.x = Math.max(20, Math.min(WIDTH - s.vault.width - 20, s.vault.x));

                    s.spawnTimer += dt;
                    if (s.spawnTimer > 1.1) {
                        s.spawnTimer = 0;
                        const isSnoop = Math.random() < 0.35;
                        s.items.push({
                            x: Math.random() * (WIDTH - 120) + 60,
                            y: -20,
                            speed: Math.random() * 60 + 130,
                            type: isSnoop ? 'snoop' : 'key'
                        });
                    }

                    for (let i = s.items.length - 1; i >= 0; i--) {
                        const item = s.items[i];
                        item.y += item.speed * dt;
                        // collision with vault
                        if (
                            item.y + 20 >= s.vault.y &&
                            item.y <= s.vault.y + s.vault.height &&
                            item.x >= s.vault.x - 10 &&
                            item.x <= s.vault.x + s.vault.width + 10
                        ) {
                            if (item.type === 'key') {
                                s.target++;
                                s.xp += 20;
                                spawnParticles(item.x, item.y, "#facc15");
                                AudioController.playCollect();
                                showGameMessage("🔑 Secret Password Saved in Vault!");
                                if (s.target >= s.maxTarget) triggerVictory();
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(item.x, item.y, "#ef4444");
                                showGameMessage("⚠️ Stranger snooped! Keep passwords secret!");
                                if (s.lives <= 0) triggerGameOver();
                            }
                            s.items.splice(i, 1);
                            continue;
                        }
                        if (item.y > HEIGHT + 40) {
                            s.items.splice(i, 1);
                        }
                    }
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "sunny");
                    // draw vault chest
                    fillRoundedRect(ctx, s.vault.x, s.vault.y, s.vault.width, s.vault.height, 10, "#b45309", "#f59e0b", 3);
                    fillRoundedRect(ctx, s.vault.x + 10, s.vault.y + 12, s.vault.width - 20, 18, 5, "#78350f", "#fef08a", 2);
                    ctx.fillStyle = "#fef08a";
                    ctx.font = "bold 18px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("🔐 VAULT", s.vault.x + s.vault.width / 2, s.vault.y + 27);

                    // draw items
                    s.items.forEach(item => {
                        if (item.type === 'key') {
                            ctx.font = "32px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("⭐🗝️", item.x, item.y);
                        } else {
                            ctx.font = "32px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("👀🚫", item.x, item.y);
                        }
                    });
                },
                onTap(s, x, y) {
                    s.vault.x = Math.max(20, Math.min(WIDTH - s.vault.width - 20, x - s.vault.width / 2));
                }
            },
            2: {
                title: "Run to Trusted Adult",
                badge: "🏃 Family Safety Navigator",
                instruction: "Guide your hero safely to the glowing Mom, Dad, or Teacher stations!",
                takeaway: "If something online makes you scared, uncomfortable, or confused, run to a trusted adult right away!",
                init(s) {
                    s.maxTarget = 3;
                    s.lives = 3;
                    s.timer = null;
                    s.player = { x: 450, y: 240, size: 26, speed: 220 };
                    s.stations = [
                        { name: "Mom's Beacon 👩", x: 150, y: 130, active: true },
                        { name: "Dad's Beacon 👨", x: 750, y: 130, active: false },
                        { name: "Teacher's Station 🧑‍🏫", x: 450, y: 400, active: false }
                    ];
                    s.currentStation = 0;
                    s.obstacles = [
                        { x: 300, y: 150, vx: 50, vy: 40, text: "Fake Game! 🎁" },
                        { x: 600, y: 280, vx: -40, vy: 60, text: "Stranger Chat! 💬" }
                    ];
                },
                update(s, dt) {
                    if (s.keys.left) s.player.x -= s.player.speed * dt;
                    if (s.keys.right) s.player.x += s.player.speed * dt;
                    if (s.keys.up) s.player.y -= s.player.speed * dt;
                    if (s.keys.down) s.player.y += s.player.speed * dt;

                    s.player.x = Math.max(30, Math.min(WIDTH - 30, s.player.x));
                    s.player.y = Math.max(30, Math.min(HEIGHT - 30, s.player.y));

                    // Move obstacles
                    s.obstacles.forEach(ob => {
                        ob.x += ob.vx * dt;
                        ob.y += ob.vy * dt;
                        if (ob.x < 50 || ob.x > WIDTH - 120) ob.vx *= -1;
                        if (ob.y < 50 || ob.y > HEIGHT - 50) ob.vy *= -1;

                        const dist = Math.hypot(s.player.x - ob.x, s.player.y - ob.y);
                        if (dist < 40) {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(s.player.x, s.player.y, "#ef4444");
                            showGameMessage("⚠️ Suspicious popup! Run to your trusted adult!");
                            s.player.x = 450;
                            s.player.y = 240;
                            if (s.lives <= 0) triggerGameOver();
                        }
                    });

                    // Check station target
                    const targetSt = s.stations[s.currentStation];
                    const distToTarget = Math.hypot(s.player.x - targetSt.x, s.player.y - targetSt.y);
                    if (distToTarget < 50) {
                        s.target++;
                        s.xp += 30;
                        spawnParticles(targetSt.x, targetSt.y, "#22c55e", 20);
                        AudioController.playSuccess();
                        showGameMessage("💚 " + targetSt.name + " helped you stay safe!");
                        s.currentStation++;
                        if (s.currentStation >= s.stations.length) {
                            triggerVictory();
                        } else {
                            s.stations.forEach((st, idx) => st.active = (idx === s.currentStation));
                        }
                    }
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "park");

                    // Draw stations
                    s.stations.forEach(st => {
                        const isTarget = st.active;
                        fillRoundedRect(ctx, st.x - 70, st.y - 40, 140, 70, 14, isTarget ? "rgba(34, 197, 94, 0.35)" : "rgba(255,255,255,0.15)", isTarget ? "#22c55e" : "#94a3b8", isTarget ? 3 : 1);
                        ctx.fillStyle = isTarget ? "#22c55e" : "#cbd5e1";
                        ctx.font = isTarget ? "bold 15px Arial" : "14px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(st.name, st.x, st.y);
                        if (isTarget) {
                            ctx.font = "bold 12px Arial";
                            ctx.fillText("RUN HERE! 🌟", st.x, st.y + 20);
                        }
                    });

                    // Draw obstacles
                    s.obstacles.forEach(ob => {
                        fillRoundedRect(ctx, ob.x - 55, ob.y - 20, 110, 38, 8, "#fee2e2", "#ef4444", 2);
                        ctx.fillStyle = "#991b1b";
                        ctx.font = "bold 13px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(ob.text, ob.x, ob.y + 5);
                    });

                    // Draw player hero
                    drawHeroMascot(ctx, s.player.x, s.player.y);
                },
                onTap(s, x, y) {
                    s.player.x = x;
                    s.player.y = y;
                }
            },
            3: {
                title: "Private Info Bubble Pop",
                badge: "🫧 Privacy Star Champion",
                instruction: "Tap & pop only safe sharing bubbles! Do not pop private family info.",
                takeaway: "Keep home address, phone numbers, and school names private! Hobbies and favorite foods are safe to share.",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.bubbles = [];
                    s.safeItems = ["Favorite Color 🎨", "I Love Injera 🍽️", "Pet Dog 🐕", "Soccer ⚽", "Cartoon 📺", "Drawing 🖍️"];
                    s.privateItems = ["Home Address 🏠", "Mom's Phone 📱", "School Name 🏫", "My Password 🔑", "Bank PIN 💳"];
                    s.spawnTimer = 0;
                },
                update(s, dt) {
                    s.spawnTimer += dt;
                    if (s.spawnTimer > 1.2 && s.bubbles.length < 6) {
                        s.spawnTimer = 0;
                        const isSafe = Math.random() < 0.6;
                        const text = isSafe
                            ? s.safeItems[Math.floor(Math.random() * s.safeItems.length)]
                            : s.privateItems[Math.floor(Math.random() * s.privateItems.length)];
                        s.bubbles.push({
                            x: Math.random() * (WIDTH - 200) + 100,
                            y: HEIGHT + 30,
                            speed: Math.random() * 40 + 60,
                            isSafe,
                            text,
                            radius: 46
                        });
                    }

                    for (let i = s.bubbles.length - 1; i >= 0; i--) {
                        const b = s.bubbles[i];
                        b.y -= b.speed * dt;
                        if (b.y < -50) {
                            s.bubbles.splice(i, 1);
                        }
                    }
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "bubbles");
                    s.bubbles.forEach(b => {
                        ctx.beginPath();
                        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                        ctx.fillStyle = b.isSafe ? "rgba(96, 165, 250, 0.45)" : "rgba(248, 113, 113, 0.45)";
                        ctx.fill();
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = b.isSafe ? "#3b82f6" : "#ef4444";
                        ctx.stroke();

                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 13px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(b.text, b.x, b.y + 4);
                    });
                },
                onTap(s, x, y) {
                    for (let i = s.bubbles.length - 1; i >= 0; i--) {
                        const b = s.bubbles[i];
                        if (Math.hypot(x - b.x, y - b.y) <= b.radius) {
                            if (b.isSafe) {
                                s.target++;
                                s.xp += 20;
                                spawnParticles(b.x, b.y, "#60a5fa", 16);
                                AudioController.playCollect();
                                showGameMessage("✅ Good to share with friends: " + b.text);
                                if (s.target >= s.maxTarget) triggerVictory();
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(b.x, b.y, "#ef4444", 20);
                                showGameMessage("🛑 NEVER share private info online: " + b.text);
                                if (s.lives <= 0) triggerGameOver();
                            }
                            s.bubbles.splice(i, 1);
                            break;
                        }
                    }
                }
            },
            4: {
                title: "Green Lock Safari",
                badge: "🟢 HTTPS Web Defender",
                instruction: "Jump over danger cones and collect 5 Green Padlocks along the safe web trail!",
                takeaway: "The green lock means a website is encrypted with HTTPS! Avoid links with red hazard warnings.",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.playerY = 350;
                    s.vy = 0;
                    s.isJumping = false;
                    s.obstacles = [];
                    s.locks = [];
                    s.spawnTimer = 0;
                },
                update(s, dt) {
                    // Physics
                    if (s.keys.up || s.keys.space) {
                        if (!s.isJumping) {
                            s.vy = -540;
                            s.isJumping = true;
                            AudioController.playZap();
                        }
                    }
                    s.playerY += s.vy * dt;
                    s.vy += 1200 * dt;
                    if (s.playerY >= 350) {
                        s.playerY = 350;
                        s.vy = 0;
                        s.isJumping = false;
                    }

                    s.spawnTimer += dt;
                    if (s.spawnTimer > 1.4) {
                        s.spawnTimer = 0;
                        if (Math.random() < 0.6) {
                            s.locks.push({ x: WIDTH + 30, y: 260, size: 28 });
                        } else {
                            s.obstacles.push({ x: WIDTH + 30, y: 350, width: 34, height: 34 });
                        }
                    }

                    // Move locks
                    for (let i = s.locks.length - 1; i >= 0; i--) {
                        const lk = s.locks[i];
                        lk.x -= 240 * dt;
                        if (Math.hypot(120 - lk.x, s.playerY - lk.y) < 45) {
                            s.target++;
                            s.xp += 20;
                            spawnParticles(lk.x, lk.y, "#22c55e", 15);
                            AudioController.playCollect();
                            showGameMessage("🔒 Green Lock Collected! Safe Website!");
                            s.locks.splice(i, 1);
                            if (s.target >= s.maxTarget) triggerVictory();
                            continue;
                        }
                        if (lk.x < -40) s.locks.splice(i, 1);
                    }

                    // Move obstacles
                    for (let i = s.obstacles.length - 1; i >= 0; i--) {
                        const ob = s.obstacles[i];
                        ob.x -= 240 * dt;
                        if (Math.abs(120 - ob.x) < 30 && s.playerY > 320) {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(120, s.playerY, "#ef4444");
                            showGameMessage("⚠️ Hit dangerous pop-up! Jump over red alerts!");
                            s.obstacles.splice(i, 1);
                            if (s.lives <= 0) triggerGameOver();
                            continue;
                        }
                        if (ob.x < -40) s.obstacles.splice(i, 1);
                    }
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "safari");

                    // Ground trail
                    ctx.fillStyle = "#1e3a8a";
                    ctx.fillRect(0, 390, WIDTH, 90);
                    ctx.fillStyle = "#3b82f6";
                    ctx.fillRect(0, 390, WIDTH, 6);

                    // Draw Locks
                    s.locks.forEach(lk => {
                        fillRoundedRect(ctx, lk.x - 18, lk.y - 12, 36, 30, 6, "#22c55e", "#ffffff", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 20px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("🔒", lk.x, lk.y + 12);
                    });

                    // Draw Obstacles
                    s.obstacles.forEach(ob => {
                        ctx.font = "34px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("⚠️", ob.x + 15, ob.y + 25);
                    });

                    // Draw Runner Mascot
                    drawHeroMascot(ctx, 120, s.playerY);
                },
                onTap(s, x, y) {
                    if (!s.isJumping) {
                        s.vy = -540;
                        s.isJumping = true;
                        AudioController.playZap();
                    }
                }
            },
            5: {
                title: "Cyber Hero Assembly",
                badge: "🏆 Ethiopian Little Cyber Hero Grandmaster",
                instruction: "Match each safety shield to protect all 4 friends in the village!",
                takeaway: "Amazing job! You know how to protect passwords, reach trusted adults, guard private info, and use safe sites!",
                init(s) {
                    s.maxTarget = 4;
                    s.lives = 3;
                    s.timer = null;
                    s.scenarios = [
                        { friend: "Friend Almaz", threat: "Stranger asks for password! 🔑", correctTool: 0, protected: false },
                        { friend: "Friend Bekele", threat: "Saw a scary pop-up! 😱", correctTool: 1, protected: false },
                        { friend: "Friend Chala", threat: "Asked for home address! 🏠", correctTool: 2, protected: false },
                        { friend: "Friend Desta", threat: "Unfamiliar link appeared! 🌐", correctTool: 3, protected: false }
                    ];
                    s.tools = [
                        { label: "🔐 Password Vault", id: 0 },
                        { label: "👨‍👩‍👧 Trusted Adult", id: 1 },
                        { label: "🛡️ Privacy Shield", id: 2 },
                        { label: "🛑 Safe Stop", id: 3 }
                    ];
                    s.currentIdx = 0;
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "village");

                    const sc = s.scenarios[s.currentIdx];
                    if (sc) {
                        fillRoundedRect(ctx, 180, 70, 540, 160, 16, "rgba(15, 23, 42, 0.85)", "#f5d547", 3);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 24px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("Protect " + sc.friend + "!", 450, 115);

                        ctx.fillStyle = "#fed7aa";
                        ctx.font = "19px Arial";
                        ctx.fillText(sc.threat, 450, 160);

                        ctx.fillStyle = "#93c5fd";
                        ctx.font = "bold 15px Arial";
                        ctx.fillText("Which Cyber Tool should " + sc.friend + " use?", 450, 200);
                    }

                    // Render 4 clickable tools at bottom
                    s.tools.forEach((t, i) => {
                        const bx = 80 + i * 195;
                        const by = 280;
                        fillRoundedRect(ctx, bx, by, 175, 75, 12, "rgba(30, 58, 138, 0.85)", "#3b82f6", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 15px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(t.label, bx + 87, by + 42);
                    });
                },
                onTap(s, x, y) {
                    s.tools.forEach((t, i) => {
                        const bx = 80 + i * 195;
                        const by = 280;
                        if (x >= bx && x <= bx + 175 && y >= by && y <= by + 75) {
                            const sc = s.scenarios[s.currentIdx];
                            if (t.id === sc.correctTool) {
                                s.target++;
                                s.xp += 25;
                                spawnParticles(bx + 87, by + 37, "#22c55e", 20);
                                AudioController.playSuccess();
                                showGameMessage("🛡️ Perfect! " + sc.friend + " is protected!");
                                s.currentIdx++;
                                if (s.currentIdx >= s.scenarios.length) {
                                    triggerVictory();
                                }
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(bx + 87, by + 37, "#ef4444");
                                showGameMessage("Think again! What tool best solves this threat?");
                                if (s.lives <= 0) triggerGameOver();
                            }
                        }
                    });
                }
            }
        },
        "8to11": {
            1: {
                title: "URL Detective: Fake Link Zapper",
                badge: "🔍 Typosquatting Hunter",
                instruction: "Inspect the link on the scanner radar! Tap VERIFY for authentic sites, ZAP for imposter links.",
                takeaway: "Scammers misspell links like 'telebiir' or 'cbe-bonus' to fool you. Always check the exact domain before clicking!",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.links = [
                        { url: "https://www.telebirr.et", isSafe: true, reason: "Authentic Ethio Telecom Telebirr portal" },
                        { url: "http://telebiir-win-100k.xyz", isSafe: false, reason: "Fake misspelling: 'telebiir' with .xyz extension" },
                        { url: "https://www.combanketh.et", isSafe: true, reason: "Official Commercial Bank of Ethiopia domain" },
                        { url: "http://cbe-login-birr.net", isSafe: false, reason: "Fake imposter domain attempting credential theft" },
                        { url: "http://free-ethio-telegram-data.cc", isSafe: false, reason: "Scam phishing URL promising free data" }
                    ];
                    s.currentIdx = 0;
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "detective");
                    const item = s.links[s.currentIdx];
                    if (item) {
                        fillRoundedRect(ctx, 150, 70, 600, 170, 14, "rgba(15, 23, 42, 0.9)", "#38bdf8", 3);
                        ctx.fillStyle = "#38bdf8";
                        ctx.font = "bold 14px monospace";
                        ctx.textAlign = "center";
                        ctx.fillText("🔎 RADAR LINK INSPECTION LENS", 450, 105);

                        fillRoundedRect(ctx, 180, 125, 540, 50, 8, "#020617", "#1e293b", 2);
                        ctx.fillStyle = "#f8fafc";
                        ctx.font = "bold 18px monospace";
                        ctx.fillText(item.url, 450, 157);

                        ctx.fillStyle = "#94a3b8";
                        ctx.font = "14px Arial";
                        ctx.fillText("Inspect domain name carefully. Is this authentic or an imposter?", 450, 210);
                    }

                    // Two Buttons
                    // VERIFY SAFE
                    fillRoundedRect(ctx, 210, 280, 210, 65, 12, "#15803d", "#22c55e", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 17px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("✅ VERIFY SAFE", 315, 318);

                    // ZAP IMPOSTER
                    fillRoundedRect(ctx, 480, 280, 210, 65, 12, "#b91c1c", "#ef4444", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 17px Arial";
                    ctx.fillText("⚡ ZAP IMPOSTER", 585, 318);
                },
                onTap(s, x, y) {
                    const item = s.links[s.currentIdx];
                    if (!item) return;

                    // Clicked VERIFY
                    if (x >= 210 && x <= 420 && y >= 280 && y <= 345) {
                        if (item.isSafe) {
                            s.target++;
                            s.xp += 20;
                            AudioController.playSuccess();
                            spawnParticles(315, 310, "#22c55e", 20);
                            showGameMessage("✅ Authentic: " + item.reason);
                            s.currentIdx++;
                            if (s.currentIdx >= s.links.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(315, 310, "#ef4444");
                            showGameMessage("❌ Dangerous! " + item.reason);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }

                    // Clicked ZAP
                    if (x >= 480 && x <= 690 && y >= 280 && y <= 345) {
                        if (!item.isSafe) {
                            s.target++;
                            s.xp += 20;
                            AudioController.playZap();
                            spawnParticles(585, 310, "#f59e0b", 25);
                            showGameMessage("⚡ Zapped Scam! " + item.reason);
                            s.currentIdx++;
                            if (s.currentIdx >= s.links.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(585, 310, "#ef4444");
                            showGameMessage("❌ That link was legitimate: " + item.reason);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }
                }
            },
            2: {
                title: "Password Fortress Defender",
                badge: "🏰 Fortress Architect",
                instruction: "Install all 4 password security modules to destroy the brute-force hacker bots!",
                takeaway: "Strong passwords combine Uppercase, Lowercase, Numbers, and Symbols. They take thousands of years to crack!",
                init(s) {
                    s.maxTarget = 4;
                    s.lives = 3;
                    s.timer = null;
                    s.modules = [
                        { name: "A-Z Uppercase Armor", installed: false },
                        { name: "a-z Lowercase Foundation", installed: false },
                        { name: "0-9 Numeric Artillery", installed: false },
                        { name: "!@#$ Symbol Laser", installed: false }
                    ];
                    s.bots = [
                        { x: 750, y: 140, speed: 45 },
                        { x: 820, y: 220, speed: 55 },
                        { x: 780, y: 300, speed: 40 }
                    ];
                },
                update(s, dt) {
                    s.bots.forEach(b => {
                        b.x -= b.speed * dt;
                        if (b.x < 240) {
                            s.lives--;
                            b.x = WIDTH + 40;
                            AudioController.playFail();
                            showGameMessage("⚠️ Hacker bot reached your account! Add more password layers!");
                            if (s.lives <= 0) triggerGameOver();
                        }
                    });
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "cyberwall");

                    // Fortress Wall
                    const wallColor = s.target === 4 ? "#22c55e" : s.target >= 2 ? "#3b82f6" : "#64748b";
                    fillRoundedRect(ctx, 40, 60, 180, 340, 16, "rgba(15, 23, 42, 0.9)", wallColor, 4);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 18px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("🏰 PASSWORD", 130, 95);
                    ctx.fillText("FORTRESS", 130, 120);

                    const entropy = ["0% (Trivial)", "25% (Weak)", "50% (Medium)", "75% (Strong)", "100% (UNBREAKABLE!)"][s.target];
                    ctx.fillStyle = s.target === 4 ? "#4ade80" : "#93c5fd";
                    ctx.font = "bold 14px Arial";
                    ctx.fillText("Strength: " + entropy, 130, 155);

                    // Bots
                    s.bots.forEach(b => {
                        ctx.font = "34px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("👾", b.x, b.y);
                    });

                    // 4 Module buttons
                    s.modules.forEach((mod, idx) => {
                        const bx = 260 + (idx % 2) * 290;
                        const by = 250 + Math.floor(idx / 2) * 75;
                        fillRoundedRect(ctx, bx, by, 260, 58, 10, mod.installed ? "#15803d" : "rgba(30, 58, 138, 0.8)", mod.installed ? "#22c55e" : "#3b82f6", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 14px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText((mod.installed ? "⚡ " : "➕ ") + mod.name, bx + 130, by + 34);
                    });
                },
                onTap(s, x, y) {
                    s.modules.forEach((mod, idx) => {
                        const bx = 260 + (idx % 2) * 290;
                        const by = 250 + Math.floor(idx / 2) * 75;
                        if (!mod.installed && x >= bx && x <= bx + 260 && y >= by && y <= by + 58) {
                            mod.installed = true;
                            s.target++;
                            s.xp += 25;
                            AudioController.playZap();
                            spawnParticles(bx + 130, by + 29, "#facc15", 25);
                            showGameMessage("🛡️ Added layer: " + mod.name + "! Botnet pushed back!");
                            // push back bots
                            s.bots.forEach(b => b.x = Math.min(WIDTH + 50, b.x + 120));
                            if (s.target >= s.maxTarget) {
                                s.bots = [];
                                triggerVictory();
                            }
                        }
                    });
                }
            },
            3: {
                title: "Scam Radar: Inbox Sorter",
                badge: "📱 Social Engineering Shield",
                instruction: "Sort incoming messages: Quarantine fake prize & urgency scams, deliver real school notes!",
                takeaway: "Never share OTP codes or trust panic messages! Banks and Telebirr never ask for passwords.",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.messages = [
                        { text: "🎉 You won 100,000 ETB! Send OTP immediately to claim.", isScam: true, reason: "Prize scam + OTP theft lure!" },
                        { text: "📚 Selam: Can you send the science homework notes?", isScam: false, reason: "Legitimate friend study message." },
                        { text: "⚠️ Telegram will delete your account in 10 minutes unless you click here!", isScam: true, reason: "Urgency tactic designed to steal your session!" },
                        { text: "🏫 School Alert: Football practice moved to 4:00 PM.", isScam: false, reason: "Legitimate school announcement." },
                        { text: "💵 Send 200 Birr to this CBE account and get 2,000 Birr back in 1 hour!", isScam: true, reason: "Fake money multiplier pyramid scam." }
                    ];
                    s.currentIdx = 0;
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "phone");
                    const msg = s.messages[s.currentIdx];

                    // Phone frame
                    fillRoundedRect(ctx, 220, 45, 460, 215, 20, "rgba(15, 23, 42, 0.95)", "#38bdf8", 3);
                    ctx.fillStyle = "#38bdf8";
                    ctx.font = "bold 13px monospace";
                    ctx.textAlign = "center";
                    ctx.fillText("📱 INCOMING MESSAGE NOTIFICATION", 450, 80);

                    if (msg) {
                        fillRoundedRect(ctx, 240, 100, 420, 120, 12, "#1e293b", "#334155", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 16px Arial";
                        wrapText(ctx, msg.text, 450, 138, 380, 24);
                    }

                    // Sorter Buttons
                    // QUARANTINE / SCAM
                    fillRoundedRect(ctx, 210, 290, 220, 65, 14, "#991b1b", "#ef4444", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 16px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("🚨 QUARANTINE (SCAM)", 320, 328);

                    // DELIVER TO INBOX
                    fillRoundedRect(ctx, 470, 290, 220, 65, 14, "#166534", "#22c55e", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 16px Arial";
                    ctx.fillText("📥 DELIVER (SAFE)", 580, 328);
                },
                onTap(s, x, y) {
                    const msg = s.messages[s.currentIdx];
                    if (!msg) return;

                    // Clicked Quarantine
                    if (x >= 210 && x <= 430 && y >= 290 && y <= 355) {
                        if (msg.isScam) {
                            s.target++;
                            s.xp += 20;
                            AudioController.playZap();
                            spawnParticles(320, 320, "#ef4444", 20);
                            showGameMessage("🛡️ Quarantined! " + msg.reason);
                            s.currentIdx++;
                            if (s.currentIdx >= s.messages.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(320, 320, "#eab308");
                            showGameMessage("❌ That was a normal message: " + msg.reason);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }

                    // Clicked Deliver
                    if (x >= 470 && x <= 690 && y >= 290 && y <= 355) {
                        if (!msg.isScam) {
                            s.target++;
                            s.xp += 20;
                            AudioController.playSuccess();
                            spawnParticles(580, 320, "#22c55e", 20);
                            showGameMessage("✅ Delivered: " + msg.reason);
                            s.currentIdx++;
                            if (s.currentIdx >= s.messages.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(580, 320, "#ef4444");
                            showGameMessage("❌ Scam allowed through! " + msg.reason);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }
                }
            },
            4: {
                title: "Public Wi-Fi Packet Guard",
                badge: "🛡️ Encrypted Tunnel Master",
                instruction: "Steer your data packet through public cafe Wi-Fi! Collect VPN shields to block packet sniffers.",
                takeaway: "On open public Wi-Fi, unencrypted data can be snooped! Always use VPNs and HTTPS.",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.packet = { x: 120, y: 240, vy: 0, speed: 220, vpnTime: 0 };
                    s.sniffers = [
                        { x: 380, y: 150, vy: 140 },
                        { x: 550, y: 320, vy: -150 },
                        { x: 720, y: 200, vy: 160 }
                    ];
                    s.vpnOrbs = [
                        { x: 280, y: 240, taken: false },
                        { x: 460, y: 180, taken: false },
                        { x: 640, y: 310, taken: false }
                    ];
                    s.deliveries = 0;
                },
                update(s, dt) {
                    if (s.keys.up) s.packet.y -= s.packet.speed * dt;
                    if (s.keys.down) s.packet.y += s.packet.speed * dt;
                    s.packet.y = Math.max(60, Math.min(HEIGHT - 60, s.packet.y));

                    if (s.packet.vpnTime > 0) s.packet.vpnTime -= dt;

                    // Move sniffers
                    s.sniffers.forEach(sn => {
                        sn.y += sn.vy * dt;
                        if (sn.y < 80 || sn.y > HEIGHT - 80) sn.vy *= -1;

                        const dist = Math.hypot(s.packet.x - sn.x, s.packet.y - sn.y);
                        if (dist < 38) {
                            if (s.packet.vpnTime > 0) {
                                // Deflected
                                AudioController.playCollect();
                                spawnParticles(sn.x, sn.y, "#38bdf8", 10);
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(s.packet.x, s.packet.y, "#ef4444");
                                showGameMessage("⚠️ Unencrypted packet snooped! Grab VPN shields!");
                                s.packet.y = 240;
                                if (s.lives <= 0) triggerGameOver();
                            }
                        }
                    });

                    // Check VPN orbs
                    s.vpnOrbs.forEach(orb => {
                        if (!orb.taken && Math.hypot(s.packet.x - orb.x, s.packet.y - orb.y) < 35) {
                            orb.taken = true;
                            s.packet.vpnTime = 6.0;
                            s.target++;
                            s.xp += 20;
                            AudioController.playZap();
                            spawnParticles(orb.x, orb.y, "#38bdf8", 20);
                            showGameMessage("🛡️ VPN Shield Active! Snooper bots deflected!");
                            if (s.target >= s.maxTarget) triggerVictory();
                        }
                    });
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "network");

                    // Destination gateway
                    fillRoundedRect(ctx, WIDTH - 110, 80, 80, HEIGHT - 160, 12, "rgba(22, 101, 52, 0.4)", "#22c55e", 2);
                    ctx.fillStyle = "#4ade80";
                    ctx.font = "bold 13px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("SECURE", WIDTH - 70, HEIGHT / 2 - 10);
                    ctx.fillText("SERVER", WIDTH - 70, HEIGHT / 2 + 10);

                    // VPN Orbs
                    s.vpnOrbs.forEach(orb => {
                        if (!orb.taken) {
                            ctx.beginPath();
                            ctx.arc(orb.x, orb.y, 16, 0, Math.PI * 2);
                            ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
                            ctx.fill();
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = "#38bdf8";
                            ctx.stroke();
                            ctx.fillStyle = "#ffffff";
                            ctx.font = "bold 12px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("VPN", orb.x, orb.y + 4);
                        }
                    });

                    // Sniffers
                    s.sniffers.forEach(sn => {
                        ctx.font = "32px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("🤖📡", sn.x, sn.y + 10);
                    });

                    // Packet
                    const isEncrypted = s.packet.vpnTime > 0;
                    ctx.beginPath();
                    ctx.arc(s.packet.x, s.packet.y, 22, 0, Math.PI * 2);
                    ctx.fillStyle = isEncrypted ? "#22c55e" : "#f59e0b";
                    ctx.fill();
                    ctx.strokeStyle = isEncrypted ? "#86efac" : "#ffffff";
                    ctx.lineWidth = isEncrypted ? 5 : 2;
                    ctx.stroke();

                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 12px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText(isEncrypted ? "ENCR" : "DATA", s.packet.x, s.packet.y + 4);
                },
                onTap(s, x, y) {
                    s.packet.y = y;
                }
            },
            5: {
                title: "Scam Escape: Detective Boss Case",
                badge: "🕵️ Master Cyber Detective",
                instruction: "Defeat the master social engineer by choosing the right investigative responses!",
                takeaway: "Mastery achieved! Verify friends offline, protect OTPs, and report fraud to INSA (963) and Police (991)!",
                init(s) {
                    s.maxTarget = 3;
                    s.lives = 3;
                    s.timer = null;
                    s.bossHP = 3;
                    s.stage = 0;
                    s.stages = [
                        {
                            situation: "Attacker impersonates your friend on Telegram: 'I lost my phone! An SMS code was sent to you, tell me the 6 digits!'",
                            options: [
                                { text: "Send the 6-digit code to help them", correct: false, tip: "Never share OTPs! It gives away your account." },
                                { text: "Refuse and call your friend on a regular phone to verify", correct: true, tip: "Correct! Always verify independently." }
                            ]
                        },
                        {
                            situation: "Attacker panics and pressures you: 'HURRY UP! If you don't send it in 30 seconds my account will be lost forever!'",
                            options: [
                                { text: "Panic and send the code immediately", correct: false, tip: "Urgency is the #1 psychological trick scammers use." },
                                { text: "Stay calm. Urgency is a classic red flag of a scam", correct: true, tip: "Spot on! Attackers manufacture urgency to stop you from thinking." }
                            ]
                        },
                        {
                            situation: "Attacker asks for a 1,000 Birr Telebirr transfer to an unfamiliar account number instead.",
                            options: [
                                { text: "Block the account and report immediately to Telegram & Police (991)", correct: true, tip: "Great response! Reporting protects the whole community." },
                                { text: "Transfer the money since it's just 1,000 Birr", correct: false, tip: "Never transfer money to unverified accounts." }
                            ]
                        }
                    ];
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "boss");

                    // Boss HP bar
                    fillRoundedRect(ctx, 250, 40, 400, 24, 6, "#1e293b", "#475569", 2);
                    const hpWidth = (s.bossHP / 3) * 396;
                    fillRoundedRect(ctx, 252, 42, hpWidth, 20, 4, "#ef4444", null);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 12px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("SCAMMER COMPROMISE RESISTANCE: " + s.bossHP + " / 3", 450, 56);

                    const st = s.stages[s.stage];
                    if (st) {
                        fillRoundedRect(ctx, 100, 85, 700, 150, 16, "rgba(15, 23, 42, 0.95)", "#ef4444", 3);
                        ctx.fillStyle = "#f87171";
                        ctx.font = "bold 14px monospace";
                        ctx.textAlign = "center";
                        ctx.fillText("CRISIS ENCOUNTER • STAGE " + (s.stage + 1) + " OF 3", 450, 115);

                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 16px Arial";
                        wrapText(ctx, st.situation, 450, 150, 640, 24);

                        // Options
                        st.options.forEach((opt, idx) => {
                            const by = 260 + idx * 80;
                            fillRoundedRect(ctx, 120, by, 660, 62, 12, "rgba(30, 58, 138, 0.9)", "#3b82f6", 2);
                            ctx.fillStyle = "#ffffff";
                            ctx.font = "bold 15px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText(opt.text, 450, by + 36);
                        });
                    }
                },
                onTap(s, x, y) {
                    const st = s.stages[s.stage];
                    if (!st) return;

                    st.options.forEach((opt, idx) => {
                        const by = 260 + idx * 80;
                        if (x >= 120 && x <= 780 && y >= by && y <= by + 62) {
                            if (opt.correct) {
                                s.target++;
                                s.xp += 35;
                                s.bossHP--;
                                AudioController.playZap();
                                spawnParticles(450, by + 30, "#22c55e", 25);
                                showGameMessage("🎯 " + opt.tip);
                                s.stage++;
                                if (s.stage >= s.stages.length) triggerVictory();
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(450, by + 30, "#ef4444");
                                showGameMessage("⚠️ " + opt.tip);
                                if (s.lives <= 0) triggerGameOver();
                            }
                        }
                    });
                }
            }
        },
        "12plus": {
            1: {
                title: "Phishing Forensics Terminal",
                badge: "🔬 SOC Forensics Specialist",
                instruction: "Terminal Forensics: Click and flag all 3 indicators of compromise in this security ticket!",
                takeaway: "Examine sender domains (@pay-cbe-secure.org is fake!), raw IP redirects, and executable attachments.",
                init(s) {
                    s.maxTarget = 3;
                    s.lives = 3;
                    s.timer = null;
                    s.flags = [
                        { label: "Spoofed Domain (@cbe-portal-auth.com)", x: 180, y: 110, w: 320, h: 36, found: false, desc: "Bank uses @combanketh.et, NOT cbe-portal-auth.com!" },
                        { label: "Disguised IP Link (197.156.65.12)", x: 180, y: 165, w: 340, h: 36, found: false, desc: "Raw IP address redirect hiding behind bank text!" },
                        { label: "Executable Malware (.pdf.exe)", x: 180, y: 220, w: 300, h: 36, found: false, desc: "Double extension disguised Windows executable!" }
                    ];
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "terminal");

                    fillRoundedRect(ctx, 80, 45, 740, 360, 14, "#020617", "#22c55e", 2);
                    ctx.fillStyle = "#22c55e";
                    ctx.font = "bold 13px monospace";
                    ctx.textAlign = "left";
                    ctx.fillText("root@insa-soc-forensics:~/ticket_#8492# inspect email.eml", 100, 75);

                    s.flags.forEach(f => {
                        fillRoundedRect(ctx, f.x, f.y, f.w, f.h, 6, f.found ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.2)", f.found ? "#22c55e" : "#ef4444", 2);
                        ctx.fillStyle = f.found ? "#4ade80" : "#fca5a5";
                        ctx.font = "bold 13px monospace";
                        ctx.textAlign = "left";
                        ctx.fillText((f.found ? "[NEUTRALIZED] " : "[CLICK TO FLAG] ") + f.label, f.x + 12, f.y + 23);
                    });

                    ctx.fillStyle = "#94a3b8";
                    ctx.font = "14px monospace";
                    ctx.textAlign = "center";
                    ctx.fillText("Click each red alert block above to analyze forensic proof (" + s.target + " / 3 flagged)", 450, 340);
                },
                onTap(s, x, y) {
                    s.flags.forEach(f => {
                        if (!f.found && x >= f.x && x <= f.x + f.w && y >= f.y && y <= f.y + f.h) {
                            f.found = true;
                            s.target++;
                            s.xp += 30;
                            AudioController.playZap();
                            spawnParticles(x, y, "#22c55e", 20);
                            showGameMessage("🔬 Flagged: " + f.desc);
                            if (s.target >= s.maxTarget) triggerVictory();
                        }
                    });
                }
            },
            2: {
                title: "MFA Grid & Brute-Force Matrix",
                badge: "🔐 Cryptographic Defense Matrix",
                instruction: "Synchronize rotating TOTP codes on attacked server nodes before brute-force bots break through!",
                takeaway: "MFA blocks 99.9% of credential stuffing and automated password guessing attacks.",
                init(s) {
                    s.maxTarget = 4;
                    s.lives = 3;
                    s.timer = null;
                    s.nodes = [
                        { name: "CBE Auth Gateway", x: 230, y: 130, health: 100, secured: false },
                        { name: "Telebirr API Cluster", x: 670, y: 130, health: 100, secured: false },
                        { name: "University Portal", x: 230, y: 310, health: 100, secured: false },
                        { name: "Cloud Identity DB", x: 670, y: 310, health: 100, secured: false }
                    ];
                    s.activeTotp = "849 203";
                    s.totpTimer = 15;
                },
                update(s, dt) {
                    s.totpTimer -= dt;
                    if (s.totpTimer <= 0) {
                        s.totpTimer = 15;
                        s.activeTotp = Math.floor(100000 + Math.random() * 900000).toString().replace(/(\d{3})(\d{3})/, "$1 $2");
                    }

                    s.nodes.forEach(nd => {
                        if (!nd.secured) {
                            nd.health -= 12 * dt;
                            if (nd.health <= 0) {
                                s.lives--;
                                nd.health = 100;
                                AudioController.playFail();
                                showGameMessage("⚠️ Node compromised! Tap to deploy TOTP authorization!");
                                if (s.lives <= 0) triggerGameOver();
                            }
                        }
                    });
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "matrix");

                    // Center TOTP Token Box
                    fillRoundedRect(ctx, 360, 180, 180, 100, 14, "#0f172a", "#38bdf8", 3);
                    ctx.fillStyle = "#38bdf8";
                    ctx.font = "bold 11px monospace";
                    ctx.textAlign = "center";
                    ctx.fillText("TOTP 2FA TOKEN", 450, 205);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 22px monospace";
                    ctx.fillText(s.activeTotp, 450, 240);
                    ctx.fillStyle = "#94a3b8";
                    ctx.font = "11px monospace";
                    ctx.fillText("Refreshes: " + Math.ceil(s.totpTimer) + "s", 450, 265);

                    // 4 Nodes
                    s.nodes.forEach(nd => {
                        fillRoundedRect(ctx, nd.x - 120, nd.y - 45, 240, 90, 12, nd.secured ? "rgba(22, 101, 52, 0.8)" : "rgba(15, 23, 42, 0.9)", nd.secured ? "#22c55e" : "#ef4444", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 14px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(nd.name, nd.x, nd.y - 15);

                        // Health bar
                        fillRoundedRect(ctx, nd.x - 90, nd.y + 10, 180, 12, 4, "#334155", null);
                        fillRoundedRect(ctx, nd.x - 90, nd.y + 10, (nd.health / 100) * 180, 12, 4, nd.secured ? "#22c55e" : "#ef4444", null);

                        ctx.fillStyle = nd.secured ? "#86efac" : "#fca5a5";
                        ctx.font = "bold 11px monospace";
                        ctx.fillText(nd.secured ? "SECURED (MFA ENFORCED)" : "UNDER ATTACK • TAP TO PATCH", nd.x, nd.y + 35);
                    });
                },
                onTap(s, x, y) {
                    s.nodes.forEach(nd => {
                        if (!nd.secured && Math.hypot(x - nd.x, y - nd.y) < 100) {
                            nd.secured = true;
                            nd.health = 100;
                            s.target++;
                            s.xp += 25;
                            AudioController.playSuccess();
                            spawnParticles(nd.x, nd.y, "#22c55e", 20);
                            showGameMessage("🔐 " + nd.name + " protected with TOTP Multi-Factor Authentication!");
                            if (s.target >= s.maxTarget) triggerVictory();
                        }
                    });
                }
            },
            3: {
                title: "Permission Police: App Privacy Firewall",
                badge: "🛑 Privacy & Spyware Auditor",
                instruction: "Audit rogue mobile apps requesting dangerous SMS & Contact permissions to steal OTPs!",
                takeaway: "Never grant SMS, microphone, or accessibility permissions to simple utility apps like flashlights or calculators.",
                init(s) {
                    s.maxTarget = 3;
                    s.lives = 3;
                    s.timer = null;
                    s.apps = [
                        { name: "Flashlight Ultra 2026", perms: "READ_SMS, READ_CONTACTS, RECORD_AUDIO", isMalicious: true, desc: "A flashlight does NOT need SMS or microphone! Spyware designed to steal OTPs." },
                        { name: "Document Scanner Pro", perms: "CAMERA, STORAGE", isMalicious: false, desc: "Normal legitimate permissions for a scanning tool." },
                        { name: "Free Telebirr Multiplier Bot", perms: "BIND_ACCESSIBILITY_SERVICE, READ_SMS", isMalicious: true, desc: "Banking trojan abusing accessibility overlay to drain wallets!" }
                    ];
                    s.currentIdx = 0;
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "firewall");
                    const app = s.apps[s.currentIdx];

                    fillRoundedRect(ctx, 160, 50, 580, 200, 16, "rgba(15, 23, 42, 0.95)", "#f59e0b", 3);
                    ctx.fillStyle = "#f59e0b";
                    ctx.font = "bold 13px monospace";
                    ctx.textAlign = "center";
                    ctx.fillText("🛡️ APPLICATION PERMISSION AUDIT ENGINE", 450, 85);

                    if (app) {
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 20px Arial";
                        ctx.fillText(app.name, 450, 125);

                        fillRoundedRect(ctx, 190, 150, 520, 50, 8, "#020617", "#334155", 1);
                        ctx.fillStyle = "#f87171";
                        ctx.font = "bold 13px monospace";
                        ctx.fillText("Requested: " + app.perms, 450, 180);
                    }

                    // Buttons
                    // QUARANTINE / REVOKE
                    fillRoundedRect(ctx, 210, 280, 220, 65, 14, "#991b1b", "#ef4444", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 15px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("🚫 REVOKE & QUARANTINE", 320, 318);

                    // APPROVE
                    fillRoundedRect(ctx, 470, 280, 220, 65, 14, "#15803d", "#22c55e", 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 15px Arial";
                    ctx.fillText("✅ APPROVE ACCESS", 580, 318);
                },
                onTap(s, x, y) {
                    const app = s.apps[s.currentIdx];
                    if (!app) return;

                    // Clicked Revoke/Quarantine
                    if (x >= 210 && x <= 430 && y >= 280 && y <= 345) {
                        if (app.isMalicious) {
                            s.target++;
                            s.xp += 30;
                            AudioController.playZap();
                            spawnParticles(320, 312, "#ef4444", 25);
                            showGameMessage("🛡️ Quarantined! " + app.desc);
                            s.currentIdx++;
                            if (s.currentIdx >= s.apps.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(320, 312, "#eab308");
                            showGameMessage("❌ That app had genuine permissions: " + app.desc);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }

                    // Clicked Approve
                    if (x >= 470 && x <= 690 && y >= 280 && y <= 345) {
                        if (!app.isMalicious) {
                            s.target++;
                            s.xp += 30;
                            AudioController.playSuccess();
                            spawnParticles(580, 312, "#22c55e", 25);
                            showGameMessage("✅ Approved: " + app.desc);
                            s.currentIdx++;
                            if (s.currentIdx >= s.apps.length) triggerVictory();
                        } else {
                            s.lives--;
                            AudioController.playFail();
                            spawnParticles(580, 312, "#ef4444");
                            showGameMessage("❌ Danger! " + app.desc);
                            if (s.lives <= 0) triggerGameOver();
                        }
                    }
                }
            },
            4: {
                title: "Incident Response: Breach Containment",
                badge: "🚨 Incident Response Lead",
                instruction: "Active breach countdown! Execute the 5 standard incident response steps in the correct sequence.",
                takeaway: "Incident Response Protocol: Terminate sessions -> Reset password -> Revoke app tokens -> Freeze financial wallets -> Report to INSA CERT (963).",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = 45;
                    s.currentStep = 0;
                    s.steps = [
                        { label: "1. Terminate all active sessions on unauthorized devices", stepIdx: 0, done: false },
                        { label: "2. Reset password to 16+ char passphrase & enforce 2FA", stepIdx: 1, done: false },
                        { label: "3. Invalidate third-party OAuth app authorizations", stepIdx: 2, done: false },
                        { label: "4. Freeze linked payment methods (Telebirr 127 / CBE 951)", stepIdx: 3, done: false },
                        { label: "5. Report incident to INSA Cyber Emergency (Hotline 963)", stepIdx: 4, done: false }
                    ];
                    // Shuffle display order
                    s.displayCards = [...s.steps].sort(() => Math.random() - 0.5);
                },
                update(s, dt) {
                    s.timer -= dt;
                    if (s.timer <= 0) {
                        s.timer = 0;
                        AudioController.playFail();
                        showGameMessage("⏱️ Time expired! Attacker compromised financial accounts.");
                        triggerGameOver();
                    }
                },
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "breach");

                    // Incident Alert Header
                    fillRoundedRect(ctx, 100, 30, 700, 50, 10, "rgba(220, 38, 38, 0.3)", "#ef4444", 2);
                    ctx.fillStyle = "#ef4444";
                    ctx.font = "bold 16px monospace";
                    ctx.textAlign = "center";
                    ctx.fillText("🚨 ACTIVE INCIDENT RESPONSE WORKFLOW (" + Math.ceil(s.timer) + "s REMAINING)", 450, 60);

                    // 5 Step Cards
                    s.displayCards.forEach((c, idx) => {
                        const by = 95 + idx * 60;
                        fillRoundedRect(ctx, 120, by, 660, 48, 10, c.done ? "rgba(22, 101, 52, 0.9)" : "rgba(15, 23, 42, 0.9)", c.done ? "#22c55e" : "#3b82f6", 2);
                        ctx.fillStyle = c.done ? "#86efac" : "#f8fafc";
                        ctx.font = "bold 14px Arial";
                        ctx.textAlign = "left";
                        ctx.fillText((c.done ? "✅ COMPLETED: " : "⚡ PROTOCOL: ") + c.label, 150, by + 29);
                    });
                },
                onTap(s, x, y) {
                    s.displayCards.forEach((c, idx) => {
                        const by = 95 + idx * 60;
                        if (!c.done && x >= 120 && x <= 780 && y >= by && y <= by + 48) {
                            if (c.stepIdx === s.currentStep) {
                                c.done = true;
                                s.currentStep++;
                                s.target++;
                                s.xp += 20;
                                AudioController.playSuccess();
                                spawnParticles(x, y, "#22c55e", 20);
                                showGameMessage("🛡️ Step " + s.currentStep + " executed successfully!");
                                if (s.currentStep >= 5) triggerVictory();
                            } else {
                                s.lives--;
                                AudioController.playFail();
                                spawnParticles(x, y, "#ef4444");
                                showGameMessage("❌ Incorrect protocol order! Disconnect sessions first before resetting credentials.");
                                if (s.lives <= 0) triggerGameOver();
                            }
                        }
                    });
                }
            },
            5: {
                title: "National Cyber Command: Ethiopian Defense",
                badge: "🇪🇹 Grandmaster Cyber Commander",
                instruction: "Mitigate cyber threats across Addis, Hawassa, Bahir Dar, Dire Dawa & Mekelle to achieve 95% resilience!",
                takeaway: "Grandmaster certification achieved! You have mastered phishing forensics, MFA, permissions, incident response, and national defense!",
                init(s) {
                    s.maxTarget = 5;
                    s.lives = 3;
                    s.timer = null;
                    s.resilience = 70;
                    s.cities = [
                        { name: "Addis Ababa", x: 450, y: 220, threat: "SMS Phishing Surge", tool: "SMS Fraud Filter", mitigated: false },
                        { name: "Hawassa", x: 470, y: 340, threat: "DDoS on School Portal", tool: "Traffic Scrubbing", mitigated: false },
                        { name: "Bahir Dar", x: 340, y: 130, threat: "Telegram Bot Scam", tool: "DNS Sinkhole", mitigated: false },
                        { name: "Dire Dawa", x: 670, y: 210, threat: "Fake CBE Birr App", tool: "App Store Takedown", mitigated: false },
                        { name: "Mekelle", x: 420, y: 90, threat: "Credential Stuffing", tool: "Enforce 2FA Patch", mitigated: false }
                    ];
                },
                update(s, dt) {},
                render(s, ctx) {
                    drawEthiopianBackdrop(ctx, "ethiopia");

                    // Resilience Gauge Top Bar
                    fillRoundedRect(ctx, 200, 20, 500, 30, 8, "#020617", "#3b82f6", 2);
                    const barW = (s.resilience / 100) * 496;
                    fillRoundedRect(ctx, 202, 22, barW, 26, 6, s.resilience >= 90 ? "#22c55e" : "#f59e0b", null);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "bold 13px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("🇪🇹 NATIONAL CYBER RESILIENCE: " + s.resilience + "% (TARGET: 95%)", 450, 40);

                    // Render Cities
                    s.cities.forEach(c => {
                        fillRoundedRect(ctx, c.x - 90, c.y - 25, 180, 50, 10, c.mitigated ? "rgba(22, 101, 52, 0.9)" : "rgba(220, 38, 38, 0.85)", c.mitigated ? "#22c55e" : "#ef4444", 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 13px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(c.name, c.x, c.y - 5);
                        ctx.fillStyle = c.mitigated ? "#86efac" : "#fef08a";
                        ctx.font = "11px Arial";
                        ctx.fillText(c.mitigated ? "🛡️ PROTECTED" : "⚠️ " + c.threat, c.x, c.y + 14);
                    });
                },
                onTap(s, x, y) {
                    s.cities.forEach(c => {
                        if (!c.mitigated && Math.hypot(x - c.x, y - c.y) < 55) {
                            c.mitigated = true;
                            s.target++;
                            s.xp += 30;
                            s.resilience = Math.min(100, s.resilience + 6);
                            AudioController.playSuccess();
                            spawnParticles(c.x, c.y, "#22c55e", 25);
                            showGameMessage("🛡️ " + c.tool + " deployed to " + c.name + "! Resilience boosted!");
                            if (s.target >= s.maxTarget) {
                                s.resilience = 100;
                                triggerVictory();
                            }
                        }
                    });
                }
            }
        }
    };

    function drawEthiopianBackdrop(ctx, theme) {
        // Gradient base
        const grad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
        grad.addColorStop(0, "#071b33");
        grad.addColorStop(1, "#0f172a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        // Tech grid lines
        ctx.strokeStyle = "rgba(59, 130, 246, 0.08)";
        ctx.lineWidth = 1;
        for (let x = 0; x < WIDTH; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, HEIGHT);
            ctx.stroke();
        }
        for (let y = 0; y < HEIGHT; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(WIDTH, y);
            ctx.stroke();
        }

        // Ethiopian flag subtle decorative banner top-right
        ctx.fillStyle = "rgba(22, 163, 74, 0.4)";
        ctx.fillRect(WIDTH - 70, 10, 18, 8);
        ctx.fillStyle = "rgba(234, 179, 8, 0.4)";
        ctx.fillRect(WIDTH - 50, 10, 18, 8);
        ctx.fillStyle = "rgba(220, 38, 38, 0.4)";
        ctx.fillRect(WIDTH - 30, 10, 18, 8);
    }

    function drawHeroMascot(ctx, x, y) {
        ctx.save();
        ctx.translate(x, y);
        // Cape
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(-12, -5);
        ctx.lineTo(-24, 25);
        ctx.lineTo(-6, 20);
        ctx.closePath();
        ctx.fill();

        // Body suit
        ctx.fillStyle = "#2563eb";
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Shield emblem
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.moveTo(0, -6);
        ctx.lineTo(6, -2);
        ctx.lineTo(0, 6);
        ctx.lineTo(-6, -2);
        ctx.closePath();
        ctx.fill();

        // Mask & Eyes
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(-5, -3, 3, 0, Math.PI * 2);
        ctx.arc(5, -3, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(" ");
        let line = "";
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + " ";
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }

    function showGameMessage(msg) {
        if (messageDisplay) {
            messageDisplay.textContent = msg;
        }
    }

    function updateHud() {
        if (targetDisplay) targetDisplay.textContent = gameState.target + " / " + gameState.maxTarget;
        if (shieldsDisplay) shieldsDisplay.textContent = gameState.target;
        if (xpDisplay) xpDisplay.textContent = gameState.xp;
        if (livesDisplay) livesDisplay.textContent = "❤️".repeat(Math.max(0, gameState.lives));
        if (timerDisplay) {
            timerDisplay.textContent = gameState.timer !== null ? Math.ceil(gameState.timer) + "s" : "--";
        }
    }

    function triggerVictory() {
        running = false;
        gameState.won = true;
        AudioController.playVictory();

        const missionDef = MISSIONS[currentAgeGroup]?.[currentLevel];
        if (victoryHeading) victoryHeading.textContent = "ድንቅ ሥራ! Level Complete!";
        if (victoryMessage) victoryMessage.textContent = missionDef?.takeaway || "You protected your digital world!";
        if (victoryXP) victoryXP.textContent = "⭐ +" + (100 + gameState.xp) + " XP Earned!";
        if (victoryBadge) victoryBadge.textContent = missionDef?.badge || "🛡️ Cyber Defender";

        // Save progress
        if (typeof getCyberQuestProgress === "function" && typeof saveCyberQuestProgress === "function") {
            const prog = getCyberQuestProgress();
            prog.xp = (prog.xp || 0) + 100 + gameState.xp;
            if (!prog.completedLevels.includes(currentLevel)) {
                prog.completedLevels.push(currentLevel);
            }
            if (missionDef && !prog.badges.includes(missionDef.badge)) {
                prog.badges.push(missionDef.badge);
            }
            saveCyberQuestProgress(prog);
            if (typeof updateCyberQuestDashboard === "function") {
                updateCyberQuestDashboard();
            }
        }

        if (victoryPanel) victoryPanel.hidden = false;
        if (startButton) startButton.hidden = true;
    }

    function triggerGameOver() {
        running = false;
        gameState.isOver = true;
        showGameMessage("Mission paused! Review the safe rule and try again.");
        if (startButton) {
            startButton.hidden = false;
            startButton.textContent = "🔄 Try Again";
        }
    }

    function gameLoop(timestamp) {
        if (!running) return;
        const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.05) : 0;
        lastTime = timestamp;

        const missionDef = MISSIONS[currentAgeGroup]?.[currentLevel];
        if (missionDef && missionDef.update) {
            missionDef.update(gameState, dt);
        }
        updateParticles(dt);
        updateHud();

        // Render
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        if (missionDef && missionDef.render) {
            missionDef.render(gameState, ctx);
        }
        drawParticles(ctx);

        if (running) {
            animId = requestAnimationFrame(gameLoop);
        }
    }

    function startMission() {
        if (running) return;
        running = true;
        lastTime = 0;
        gameState.isOver = false;
        gameState.won = false;
        if (startButton) startButton.hidden = true;
        if (victoryPanel) victoryPanel.hidden = true;

        const missionDef = MISSIONS[currentAgeGroup]?.[currentLevel];
        if (missionDef && missionDef.init) {
            missionDef.init(gameState);
        }
        showGameMessage("Mission active! " + (missionDef?.instruction || ""));
        animId = requestAnimationFrame(gameLoop);
    }

    function stopMission() {
        running = false;
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
    }

    function setupCurrentMission() {
        stopMission();
        gameState.target = 0;
        gameState.xp = 0;
        gameState.lives = 3;
        gameState.particles = [];
        const missionDef = MISSIONS[currentAgeGroup]?.[currentLevel] || MISSIONS["8to11"][1];

        if (titleDisplay) {
            titleDisplay.textContent = "Mission " + currentLevel + ": " + missionDef.title;
        }
        if (instructionsDisplay) {
            instructionsDisplay.textContent = missionDef.instruction;
        }
        if (victoryPanel) victoryPanel.hidden = true;
        if (startButton) {
            startButton.hidden = false;
            startButton.textContent = "🎮 Start Mission";
        }
        showGameMessage("Ready, Cyber Hero? Tap 'Start Mission'!");
        updateHud();

        // Initial preview draw
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        drawEthiopianBackdrop(ctx, "preview");
        if (missionDef.init) missionDef.init(gameState);
        if (missionDef.render) missionDef.render(gameState, ctx);
    }

    // Canvas click / tap handler
    function getCanvasCoordinates(evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = WIDTH / rect.width;
        const scaleY = HEIGHT / rect.height;
        const clientX = evt.clientX !== undefined ? evt.clientX : (evt.touches && evt.touches[0] ? evt.touches[0].clientX : 0);
        const clientY = evt.clientY !== undefined ? evt.clientY : (evt.touches && evt.touches[0] ? evt.touches[0].clientY : 0);
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    canvas.addEventListener("pointerdown", evt => {
        const coords = getCanvasCoordinates(evt);
        if (!running && !gameState.won) {
            startMission();
        }
        const missionDef = MISSIONS[currentAgeGroup]?.[currentLevel];
        if (missionDef && missionDef.onTap && running) {
            missionDef.onTap(gameState, coords.x, coords.y);
        }
    });

    // Keyboard handlers
    window.addEventListener("keydown", evt => {
        const k = evt.key.toLowerCase();
        if (k === "arrowup" || k === "w") gameState.keys.up = true;
        if (k === "arrowdown" || k === "s") gameState.keys.down = true;
        if (k === "arrowleft" || k === "a") gameState.keys.left = true;
        if (k === "arrowright" || k === "d") gameState.keys.right = true;
        if (k === " " || k === "spacebar") gameState.keys.space = true;
    });

    window.addEventListener("keyup", evt => {
        const k = evt.key.toLowerCase();
        if (k === "arrowup" || k === "w") gameState.keys.up = false;
        if (k === "arrowdown" || k === "s") gameState.keys.down = false;
        if (k === "arrowleft" || k === "a") gameState.keys.left = false;
        if (k === "arrowright" || k === "d") gameState.keys.right = false;
        if (k === " " || k === "spacebar") gameState.keys.space = false;
    });

    // Touch controls
    document.querySelectorAll(".game-control[data-direction]").forEach(btn => {
        const dir = btn.dataset.direction;
        btn.addEventListener("pointerdown", e => {
            e.preventDefault();
            if (dir === "up") gameState.keys.up = true;
            if (dir === "down") gameState.keys.down = true;
            if (dir === "left") gameState.keys.left = true;
            if (dir === "right") gameState.keys.right = true;
        });
        const release = () => {
            if (dir === "up") gameState.keys.up = false;
            if (dir === "down") gameState.keys.down = false;
            if (dir === "left") gameState.keys.left = false;
            if (dir === "right") gameState.keys.right = false;
        };
        btn.addEventListener("pointerup", release);
        btn.addEventListener("pointercancel", release);
        btn.addEventListener("lostpointercapture", release);
    });

    // UI Buttons
    if (startButton) startButton.addEventListener("click", startMission);

    if (backButton) {
        backButton.addEventListener("click", () => {
            stopMission();
            gameSection.hidden = true;
            const map = document.getElementById("cyberquest-map");
            if (map) {
                map.hidden = false;
                map.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            stopMission();
            if (currentLevel < 5) {
                currentLevel++;
                setupCurrentMission();
            } else {
                gameSection.hidden = true;
                const map = document.getElementById("cyberquest-map");
                if (map) {
                    map.hidden = false;
                    map.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }

    if (replayButton) {
        replayButton.addEventListener("click", () => {
            setupCurrentMission();
            startMission();
        });
    }

    return {
        launchMission(ageGroup, level) {
            currentAgeGroup = ageGroup || "8to11";
            currentLevel = Math.max(1, Math.min(5, level || 1));
            gameSection.hidden = false;
            setupCurrentMission();
            gameSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
})();

/* =======================================================
   CYBERGUIDE AI CHATBOT (BILINGUAL ENGLISH / AMHARIC)
   Full Cyber Safety & Site Navigation Intelligence
======================================================= */

const CyberGuideChatbot = (() => {
    const container = document.getElementById("cyber-chatbot-container");
    const toggleBtn = document.getElementById("chatbot-toggle-btn");
    const windowEl = document.getElementById("chatbot-window");
    const closeBtn = document.getElementById("chatbot-close-btn");
    const clearBtn = document.getElementById("chatbot-clear-btn");
    const langBtn = document.getElementById("chatbot-lang-toggle");
    const langLabel = document.getElementById("chatbot-lang-label");
    const messagesEl = document.getElementById("chatbot-messages");
    const chipsEl = document.getElementById("chatbot-quick-chips");
    const formEl = document.getElementById("chatbot-form");
    const inputEl = document.getElementById("chatbot-input");

    if (!container || !toggleBtn || !windowEl) return;

    let currentLang = "en"; // "en" | "am"

    const KNOWLEDGE_BASE = {
        en: {
            welcome: "👋 Hello! I am **CyberGuide AI**, your Ethiopian Cyber Safety Assistant. I can help you with hacked accounts, Telebirr/bank scams, suspicious links, passwords, official emergency contacts (INSA 963), and using this website. How can I help you today?",
            chips: [
                "🚨 Telegram Hacked",
                "💳 Telebirr / CBE Scam",
                "🎣 Suspicious Link",
                "🎮 How to play CyberQuest?",
                "🔐 Test Password Strength",
                "📞 INSA Emergency Contacts"
            ],
            emergency: '🚨 **Official Ethiopian Cyber Emergency Contacts:**\n• **INSA (Information Network Security Administration):** Toll-free **963** | Email: cert@insa.gov.et\n• **Federal Police Cybercrime Unit:** **991** or **816**\n• **Ethio Telecom Customer Service & Fraud:** **994**\n• **Telebirr Fraud Support:** **127**\n• **Commercial Bank of Ethiopia (CBE):** **951**\n\n<button class="chat-action-link" data-action="emergency">🚨 Open Immediate Incident Guides</button>',
            telegram: '🚨 **Telegram Account Hacked / Taken Over:**\n1. Open Telegram -> **Settings** -> **Devices**.\n2. Immediately tap **"Terminate All Other Sessions"** to kick out the attacker.\n3. Go to **Settings** -> **Privacy and Security** -> **Two-Step Verification** and set a strong password.\n4. **NEVER** share your 5-digit or 6-digit Telegram login code sent by SMS or chat!\n5. If you lost complete access, contact official Telegram support and inform your friends that your account was compromised so they aren\'t scammed.',
            telebirr: '💳 **Telebirr / CBE Online Money Scam:**\n1. **Call Telebirr (127)** or **CBE (951)** immediately! Ask them to freeze or reverse the transaction.\n2. Provide the transaction ID, receiver phone number, and time.\n3. Save screenshots of all SMS receipts, chat logs, and phone numbers.\n4. Report to the **Federal Police Cyber Crime Unit (991)**.\n5. **Remember:** Ethio Telecom and banks will **NEVER** call to ask for your PIN, OTP, or verification code!',
            phishing: '🎣 **Suspicious Link / Phishing Warning:**\n• Do **NOT** enter passwords, OTP codes, or personal details on the page.\n• Close the suspicious tab immediately.\n• If you already entered credentials, change your passwords on your real accounts right away!\n• Test URLs with our built-in scanner:\n<button class="chat-action-link" data-action="url-tool">🔎 Open URL Risk Analyzer</button>',
            password: '🔐 **Strong Password Rules:**\n• Use at least **12-16 characters**.\n• Mix UPPERCASE, lowercase, numbers (0-9), and symbols (#$%!).\n• Avoid personal names, phone numbers, or birthdays.\n• Use a unique password for each account (never reuse passwords!).\n<button class="chat-action-link" data-action="password-tool">🔐 Test Password Strength Tool</button>',
            cyberquest: '🎮 **CyberQuest Educational Game:**\n• 3 Age Categories: **Under 8**, **Ages 8-11**, and **Ages 12+**.\n• 5 Unique Educational Levels for each age group (15 games total!).\n• Learn password protection, imposter URL zapping, inbox radar, Wi-Fi defense, and SOC incident response!\n<button class="chat-action-link" data-action="cyberquest">🎮 Go to CyberQuest Adventure</button>',
            cyberbullying: '🛑 **Cyberbullying & Online Blackmail (Sextortion):**\n• **Do NOT pay money or send more photos!** Blackmailers will demand more.\n• Save evidence: take clear screenshots of messages, profiles, and timestamps.\n• Block the attacker immediately.\n• Report to **INSA (963)** and the **Federal Police Cyber Unit (991)**. You are the victim; authorities will protect you.',
            general: 'I am here to guide you on any cybersecurity topic! You can ask about:\n• Recovering compromised accounts (Telegram, Facebook, TikTok, Gmail)\n• Preventing Telebirr, CBE, and lottery scams\n• Evaluating links and passwords\n• Finding official contacts (INSA, Police, Ethio Telecom)\n• Playing our CyberQuest educational games!\n\nWhat specific question do you have?'
        },
        am: {
            welcome: "👋 ሰላም! እኔ **ሳይበርጋይድ AI** ነኝ፤ የኢትዮጵያ የወጣቶች የሳይበር ደህንነት ረዳትዎ። ስለተጠለፉ አካውንቶች፣ የቴሌብር/የባንክ ማጭበርበር፣ አጠራጣሪ ሊንኮች፣ የይለፍ ቃል እና የኢንሳ (963) የአደጋ ጊዜ አድራሻዎች ልረዳዎት ዝግጁ ነኝ። ምን ልርዳዎት?",
            chips: [
                "🚨 ቴሌግራም ተጠልፏል",
                "💳 የቴሌብር / የባንክ ማጭበርበር",
                "🎣 አጠራጣሪ ሊንክ ነክቻለሁ",
                "🎮 የሳይበርኩዌስት ጨዋታ",
                "🔐 ጠንካራ የይለፍ ቃል",
                "📞 የኢንሳ እና ፖሊስ ስልክ"
            ],
            emergency: '🚨 **የኢትዮጵያ የሳይበር አደጋ ጊዜ መረጃ እና ስልኮች:**\n• **ኢንሳ (የመረጃ መረብ ደህንነት አስተዳደር):** ነጻ የስልክ መስመር **963** | cert@insa.gov.et\n• **የፌደራል ፖሊስ የሳይበር ወንጀል መከላከል:** **991** ወይም **816**\n• **ኢትዮ ቴሌኮም የደንበኞች አገልግሎት:** **994**\n• **ቴሌብር የማጭበርበር ሪፖርት:** **127**\n• **የኢትዮጵያ ንግድ ባንክ (CBE):** **951**\n\n<button class="chat-action-link" data-action="emergency">🚨 የአደጋ ጊዜ መመሪያዎችን ይመልከቱ</button>',
            telegram: '🚨 **የቴሌግራም አካውንትዎ ከተጠለፈ የሚከተሉትን ፈጣን እርምጃዎች ይውሰዱ:**\n1. ወደ ቴሌግራም **Settings** -> **Devices** ይግቡ።\n2. **"Terminate All Other Sessions"** የሚለውን በመንካት ጠላፊውን ወዲያውኑ ያስወጡ።\n3. **Settings** -> **Privacy and Security** -> **Two-Step Verification** በማብራት ጠንካራ የይለፍ ቃል ያስቀምጡ።\n4. በኤስኤምኤስ (SMS) የሚላክልዎትን ባለ 5 ወይም 6 ድጅት የይለፍ ኮድ ለማንም ሰው ፈጽሞ አያጋሩ!\n5. ሙሉ በሙሉ ከተዘጉበት ለጓደኞችዎ በሌላ ስልክ ደውለው አካውንትዎ መጠለፉን ያሳውቁ።',
            telebirr: '💳 **በቴሌብር ወይም በባንክ ከተጭበረበሩ:**\n1. ወዲያውኑ ወደ **ቴሌብር (127)** ወይም **ንግድ ባንክ (951)** ይደውሉ።\n2. ገንዘቡ የተላለፈበት ቁጥር እንዲታገድ እና ምርመራ እንዲደረግ ጥያቄ ያቅርቡ።\n3. የደረሰኝ አጭር መልእክት (SMS)፣ የስልክ ቁጥሮች እና የቻት ማስረጃዎችን ስክሪንሾት ያንሱ።\n4. ለፌደራል ፖሊስ ሳይበር ወንጀል መከላከል በ **991** ወይም **816** ሪፖርት ያድርጉ።\n5. **ማስታወሻ:** ኢትዮ ቴሌኮም ወይም ባንኮች ፈጽሞ የይለፍ ቃል (PIN) ወይም OTP አይጠይቁዎትም!',
            phishing: '🎣 **አጠራጣሪ ሊንክ ወይም የማስገር ጥቃት:**\n• በድረ-ገጹ ላይ ምንም አይነት የይለፍ ቃል ወይም የግል መረጃ አያስገቡ!\n• ገጹን ወዲያውኑ ይዝጉት።\n• የይለፍ ቃል አስገብተው ከነበረ ወዲያውኑ ትክክለኛውን አካውንት የይለፍ ቃል ይቀይሩ!\n• ድረ-ገጹን በድረ-ገጻችን መመርመሪያ ይፈትሹ፡\n<button class="chat-action-link" data-action="url-tool">🔎 የሊንክ መመርመሪያ መሣሪያን ይክፈቱ</button>',
            password: '🔐 **ጠንካራ የይለፍ ቃል ለማዘጋጀት:**\n• ቢያንስ **12-16 ፊደላትን** ይጠቀሙ።\n• ትልልቅና ትናንሽ ፊደላት፣ ቁጥሮች እና ምልክቶችን (#$%!) ያቀላቅሉ።\n• ስምዎን፣ ስልክ ቁጥርዎን ወይም የልደት ቀንዎን አይጠቀሙ።\n<button class="chat-action-link" data-action="password-tool">🔐 የይለፍ ቃል ጥንካሬ መፈተሻ</button>',
            cyberquest: '🎮 **የሳይበርኩዌስት የትምህርት ጨዋታ:**\n• 3 የእድሜ ደረጃዎች፡ **ከ8 ዓመት በታች**፣ **ከ8-11 ዓመት**፣ እና **ከ12 ዓመት በላይ**።\n• 15 ልዩ እና አስተማሪ የሳይበር ተልእኮዎች!\n• የይለፍ ቃል መጠበቅ፣ አጭበርባሪ ሊንክ መያዝ እና የኢትዮጵያን ዲጂታል ምህዳር መከላከል ይማሩ።\n<button class="chat-action-link" data-action="cyberquest">🎮 ወደ ሳይበርኩዌስት ጨዋታ ይሂዱ</button>',
            cyberbullying: '🛑 **የበይነመረብ ማስፈራራት እና ጥቃት (Blackmail):**\n• **ፈጽሞ ገንዘብ አይክፈሉ ወይም ተጨማሪ ፎቶዎችን አይላኩ!**\n• መልእክቶቹን ስክሪንሾት በማንሳት ማስረጃዎችን ያስቀምጡ።\n• ጥቃት አድራሹን ወዲያውኑ ብሎክ (Block) ያድርጉ።\n• ለኢንሳ በ **963** ወይም ለፌደራል ፖሊስ በ **991** ያሳውቁ። ጥበቃ ይደረግልዎታል።',
            general: 'በማንኛውም የሳይበር ደህንነት ርዕስ ላይ ልረዳዎት ዝግጁ ነኝ!\n• የተጠለፈ አካውንት ማዳን (ቴሌግራም፣ ፌስቡክ፣ ቲክቶክ)\n• የቴሌብር እና የባንክ ማጭበርበር መከላከል\n• የይለፍ ቃል ጥንካሬን ማረጋገጥ\n• የኢንሳ (963) እና የፖሊስ (991) አድራሻዎች\n• የሳይበርኩዌስት ትምህርታዊ ጨዋታዎችን መጫወት!\n\nምን ማወቅ ይፈልጋሉ?'
        },
        om: {
            welcome: "👋 Akkam! Ani **CyberGuide AI** dha, gargaaraa nageenya saayibarii dargaggoota Itoophiyaa. Herregawwan (accounts) hataman, saamicha Telebirr/Baankii, hidhata shakkisiisoo (phishing links), jecha icciitii (passwords), fi lakkoofsota balaa tasaa INSA (963) irratti si gargaaruuf qophiidha. Har'a maal si gargaaruu danda'a?",
            chips: [
                "🚨 Telegram Hatame",
                "💳 Saamicha Telebirr / CBE",
                "🎣 Hidhata Shakkisiisaa",
                "🎮 Taphni CyberQuest Maalii?",
                "🔐 Jabina Jecha Icciitii",
                "📞 Lakkoofsa Balaa Tasaa INSA"
            ],
            emergency: '🚨 **Lakkoofsota Balaa Tasaa Saayibarii Itoophiyaa:**\n• **INSA (Tajaajila Nageenya Neetwoorkii Odeeffannoo):** Bilbila bilisaa **963** | cert@insa.gov.et\n• **Qorannoo Yakka Saayibarii Poolisii Federaalaa:** **991** ykn **816**\n• **Tajaajila Maamiltoota Itoophiyaa Teelekoom:** **994**\n• **Deeggarsa Saamicha Telebirr:** **127**\n• **Baankii Daldala Itoophiyaa (CBE):** **951**\n\n<button class="chat-action-link" data-action="emergency">🚨 Qajeelfama Yeroo Balaa Tasaa Bani</button>',
            telegram: '🚨 **Herregni Telegram Yoo Hatame ykn Fudhame:**\n1. Telegram keessatti gara **Settings** -> **Devices** deemi.\n2. Yeruma sana **"Terminate All Other Sessions"** kan jedhu tuqi meeshalee biroo hunda ari\'i.\n3. Gara **Settings** -> **Privacy and Security** -> **Two-Step Verification** deemuun jecha icciitii cimaa kaa\'i.\n4. Koodii herreega Telegram lakkoofsa 5 ykn 6 SMS\'n dhufu eenyuufiyyuu **GONKUMAA** hin kennin!\n5. Guutummaatti yoo si jalaa cuqqaalame, maatii fi hiriyyoota keetti himi akka isaan hin gowwoomfamne.',
            telebirr: '💳 **Saamicha Maallaqa Telebirr / CBE:**\n1. Dafee **Telebirr (127)** ykn **CBE (951)** bilbili! Dabarsichi akka dhaabbatu ykn deebi\'u gaafadhu.\n2. Lakkoofsa dabarsaa (Transaction ID), lakkoofsa bilbilaa, fi yeroo itti dabarse kenni.\n3. Ragaa hunda (suuraa SMS, ergaa chat, lakkoofsa bilbilaa) screenshot godhii qabadhu.\n4. Poolisii Federaalaa kutaa Saayibarii (**991**) gabaasi.\n5. **Hubadhu:** Itoophiyaa Teelekoom ykn baankonni PIN ykn koodii OTP bilbilaan gonkumaa hin gaafatan!',
            phishing: '🎣 **Hidhata Shakkisiisaa (Link / Phishing):**\n• Fuula sana irratti jecha icciitii (password) ykn odeeffannoo dhuunfaa **HIN** galchin!\n• Fuula sana dafii cufi.\n• Yoo kanaan dura galchite ta\'e, yeruma sana jecha icciitii herrega dhugaa keetii jijjiiri!\n• Hidhata shakkisiisaa meeshaa keenyaan sakatta\'i:\n<button class="chat-action-link" data-action="url-tool">🔎 URL Risk Analyzer Bani</button>',
            password: '🔐 **Ulaagaalee Jecha Icciitii Cimaa:**\n• Qubeelee yoo xiqqaate **12-16** fayyadami.\n• Qubee gurguddaa, xixiqqaa, lakkoofsa (0-9), fi mallattoolee (#$%!) maki.\n• Maqaa dhuunfaa, lakkoofsa bilbilaa, ykn guyyaa dhalootaa hin fayyadamin.\n• Herrega hundaaf jecha icciitii adda addaa fayyadami.\n<button class="chat-action-link" data-action="password-tool">🔐 Sakatta\'aa Jecha Icciitii Bani</button>',
            cyberquest: '🎮 **Tapha Barnootaa CyberQuest:**\n• Sadarkaa umrii 3: **Waggaa 8 gadi**, **Waggaa 8–11**, fi **Waggaa 12 ol**.\n• Sadarkaalee barnootaa adda ta\'an 15!\n• Eegumsa jecha icciitii, hidhata sobaa adda baasuu, fi nageenya saayibarii baradhu!\n<button class="chat-action-link" data-action="cyberquest">🎮 Gara Tapha CyberQuest Deemi</button>',
            cyberbullying: '🛑 **Sodaachisuu fi Yakka Saayibarii (Blackmail / Sextortion):**\n• **Gonkumaa maallaqa hin kaffalin ykn suuraa dabalataa hin ergin!**\n• Ragaa qabadhu: ergawwan, proofaayilii, fi sa\'aatii screenshot godhadhu.\n• Namicha yeruma sana Block godhi.\n• **INSA (963)** fi **Poolisii Federaalaa (991)** beeksisi. Ati miidhamaadha, eegumsi siif taasifama.',
            general: 'Ani dhimmoota nageenya saayibarii hundarratti si gargaaruuf qophiidha!\n• Herregawwan hataman deebisuu (Telegram, Facebook, TikTok, Gmail)\n• Saamicha Telebirr fi Baankii ittisuu\n• Jecha icciitii fi hidhata (link) sakatta\'uu\n• Lakkoofsota balaa tasaa (INSA 963, Poolisii 991)\n• Taphawwan CyberQuest taphachuu!\n\nGaaffii maaliitu qabda?'
        }
    };

    function formatText(text) {
        return text
            .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
            .replace(/\\n/g, '<br>');
    }

    function appendMessage(sender, content) {
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const bubble = document.createElement("div");
        bubble.className = "chat-bubble " + sender;
        bubble.innerHTML = formatText(content) + '<span class="chat-time">' + timeStr + '</span>';
        messagesEl.appendChild(bubble);
        messagesEl.scrollTop = messagesEl.scrollHeight;

        // Attach action button handlers
        bubble.querySelectorAll(".chat-action-link").forEach(btn => {
            btn.addEventListener("click", () => {
                const action = btn.dataset.action;
                executeChatAction(action);
            });
        });
    }

    function executeChatAction(action) {
        windowEl.hidden = true;
        if (action === "password-tool") {
            const sec = document.getElementById("tools");
            const btn = document.getElementById("open-password-tool");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
            if (btn) btn.click();
        } else if (action === "url-tool") {
            const sec = document.getElementById("tools");
            const btn = document.getElementById("open-url-tool");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
            if (btn) btn.click();
        } else if (action === "cyberquest") {
            const sec = document.getElementById("cyberquest-entry");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
        } else if (action === "emergency") {
            const sec = document.getElementById("help");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
        }
    }

    function renderChips() {
        chipsEl.innerHTML = "";
        const chips = KNOWLEDGE_BASE[currentLang].chips;
        chips.forEach(chipText => {
            const chip = document.createElement("button");
            chip.type = "button";
            chip.className = "chatbot-chip";
            chip.textContent = chipText;
            chip.addEventListener("click", () => {
                handleUserQuery(chipText);
            });
            chipsEl.appendChild(chip);
        });
    }

    function answerQuery(query) {
        const q = query.toLowerCase();
        const kb = KNOWLEDGE_BASE[currentLang];

        // Telegram
        if (q.includes("telegram") || q.includes("ቴሌግራም") || q.includes("telegiraamii") || q.includes("code") || q.includes("session")) {
            return kb.telegram;
        }
        // Telebirr / CBE / Scam
        if (q.includes("telebirr") || q.includes("cbe") || q.includes("scam") || q.includes("money") || q.includes("birr") || q.includes("ቴሌብር") || q.includes("ባንክ") || q.includes("ገንዘብ") || q.includes("ተጭበረበር") || q.includes("saamicha") || q.includes("maallaqa") || q.includes("baankii")) {
            return kb.telebirr;
        }
        // Emergency / Contacts
        if (q.includes("insa") || q.includes("contact") || q.includes("hotline") || q.includes("police") || q.includes("number") || q.includes("ኢንሳ") || q.includes("ስልክ") || q.includes("ፖሊስ") || q.includes("963") || q.includes("991") || q.includes("poolisii") || q.includes("bilbila") || q.includes("balaa")) {
            return kb.emergency;
        }
        // Phishing / Links
        if (q.includes("link") || q.includes("phish") || q.includes("url") || q.includes("click") || q.includes("ሊንክ") || q.includes("ማስገር") || q.includes("ሳይት") || q.includes("hidhata") || q.includes("liinkii") || q.includes("shakkisiisaa")) {
            return kb.phishing;
        }
        // Password
        if (q.includes("password") || q.includes("የይለፍ ቃል") || q.includes("pass") || q.includes("checker") || q.includes("ጥንካሬ") || q.includes("jecha icciitii") || q.includes("icciitii") || q.includes("jabina")) {
            return kb.password;
        }
        // CyberQuest
        if (q.includes("cyberquest") || q.includes("game") || q.includes("level") || q.includes("play") || q.includes("ጨዋታ") || q.includes("ተልእኮ") || q.includes("tapha") || q.includes("taphachuu")) {
            return kb.cyberquest;
        }
        // Cyberbullying / Sextortion / Harassment
        if (q.includes("bully") || q.includes("blackmail") || q.includes("harass") || q.includes("photo") || q.includes("threat") || q.includes("ማስፈራራት") || q.includes("ጥቃት") || q.includes("sodaachisuu")) {
            return kb.cyberbullying;
        }

        return kb.general;
    }

    async function handleUserQuery(text) {
        if (!text || !text.trim()) return;
        appendMessage("user", text);

        // Try backend if running
        let replied = false;
        try {
            const resp = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text, lang: currentLang })
            });
            if (resp.ok) {
                const data = await resp.json();
                if (data && data.reply) {
                    appendMessage("bot", data.reply);
                    replied = true;
                }
            }
        } catch (e) {
            // Backend offline or running statically - fallback to client engine
        }

        if (!replied) {
            setTimeout(() => {
                const answer = answerQuery(text);
                appendMessage("bot", answer);
            }, 300);
        }
    }

    // Event listeners
    toggleBtn.addEventListener("click", () => {
        windowEl.hidden = !windowEl.hidden;
        if (!windowEl.hidden) {
            if (messagesEl.children.length === 0) {
                appendMessage("bot", KNOWLEDGE_BASE[currentLang].welcome);
                renderChips();
            }
            if (inputEl) inputEl.focus();
        }
    });

    closeBtn.addEventListener("click", () => {
        windowEl.hidden = true;
    });

    clearBtn.addEventListener("click", () => {
        messagesEl.innerHTML = "";
        appendMessage("bot", KNOWLEDGE_BASE[currentLang].welcome);
        renderChips();
    });

    langBtn.addEventListener("click", () => {
        if (currentLang === "en") {
            currentLang = "am";
            langLabel.textContent = "ORO";
            inputEl.placeholder = "ማንኛውንም ጥያቄ በአማርኛ፣ በኦሮምኛ ወይም በእንግሊዝኛ ይጠይቁ...";
        } else if (currentLang === "am") {
            currentLang = "om";
            langLabel.textContent = "EN";
            inputEl.placeholder = "Afaan Oromoo, Amharic, ykn English'n gaafadhu...";
        } else {
            currentLang = "en";
            langLabel.textContent = "አማ";
            inputEl.placeholder = "Ask anything in English, Amharic, or Oromoo...";
        }
        appendMessage("bot", KNOWLEDGE_BASE[currentLang].welcome);
        renderChips();
    });

    formEl.addEventListener("submit", e => {
        e.preventDefault();
        const text = inputEl.value;
        inputEl.value = "";
        handleUserQuery(text);
    });

    // Initial chips
    renderChips();
})();
