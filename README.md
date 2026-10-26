# 🛡️ CyberHelp Ethiopia

**A multilingual cyber-incident response and security awareness platform for Ethiopian youth.**

CyberHelp Ethiopia helps students and young people respond to cyber incidents (hacked accounts, phishing links, Telebirr/bank scams) with clear, step-by-step guidance, and teaches them to avoid becoming victims through tools, games and quizzes. It was built as my graduation project for the *Real-World Cybersecurity Problem Solving* program.



---

## The problem

Much of young Ethiopians' daily life runs through a few accounts: Telegram, Facebook, TikTok, e-mail and Telebirr. When one is compromised, the victim has minutes to act, but the help they find is usually generic, English-only, or offered by scammers posing as "recovery agents". CyberHelp Ethiopia puts correct, local, ordered recovery steps one click away.

## Features

| Module | What it does |
|---|---|
| 🚨 **Emergency Help** | 6 incident guides (suspicious link, hacked account, scam, e-mail compromise, exposed password, suspicious message) plus platform-specific recovery for Telegram, Instagram, e-mail, Facebook, TikTok and WhatsApp |
| 🔎 **URL Risk Analyzer** | Submits a link to the [VirusTotal API v3](https://docs.virustotal.com/reference/overview) through the Node.js back end (API key never reaches the browser) and shows malicious / suspicious / harmless / undetected counts |
| 🔐 **Password Strength Checker** | Runs entirely in the browser; the password is never sent anywhere |
| 🎮 **CyberQuest** | 15 canvas mini-games in three age bands (under 8, 8–11, 12+) with XP, badges and saved progress |
| 🎣 **Phishing Quiz & Cyber Safety Check** | Quiz with explanations and a 5-question habit score out of 100 |
| 🤖 **CyberGuide chatbot** | Rule-based assistant in English, Amharic and Afaan Oromoo that lists Ethiopian emergency contacts (INSA, Federal Police, Ethio Telecom, Telebirr, CBE) |
| 🌗 **UI** | Responsive layout, light/dark theme |

## Architecture

```
Browser (index.html + style.css + script.js)
   │   fetch (JSON)
   ▼
Node.js + Express 5 (server.js)
   ├── POST /api/scan-url          → validates URL, submits to VirusTotal
   ├── GET  /api/scan-result/:id   → returns analysis status and stats
   ├── POST /api/chat              → keyword-based chatbot (en / am / om)
   └── GET  /api/health
         │ HTTPS + x-apikey
         ▼
   VirusTotal API v3
```

No database. CyberQuest progress is stored in the browser's `localStorage`.

## Tech stack

- **Front end:** HTML5, CSS3, vanilla JavaScript (ES6), HTML5 Canvas
- **Back end:** Node.js, Express 5, dotenv
- **External API:** VirusTotal v3

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer
- A free [VirusTotal](https://www.virustotal.com/) account and API key

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

Create a `.env` file in the project root:

```env
VIRUSTOTAL_API_KEY=your_api_key_here
```

Start the server:

```bash
node server.js
```

Open **http://localhost:3000**.

> The site works without a key, except the URL Risk Analyzer, which will report that the key is missing.

## API reference

| Route | Method | Body / params | Responses |
|---|---|---|---|
| `/api/health` | GET | – | `200` health message |
| `/api/scan-url` | POST | `{ "url": "https://example.com" }` | `200 { analysisId }`, `400` invalid or non-HTTP(S) URL, `500` key missing, `502` VirusTotal error |
| `/api/scan-result/:id` | GET | analysis ID | `200 { status, stats, results }`, `502` upstream error |
| `/api/chat` | POST | `{ "message": "...", "lang": "en" \| "am" \| "om" }` | `200 { reply }`, `400` missing message |

Example:

```bash
curl -X POST http://localhost:3000/api/scan-url \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

## Project structure

```
.
├── index.html      # page structure
├── style.css       # styling (responsive, dark mode)
├── script.js       # incident guides, tools, quiz, games, chatbot client
├── server.js       # Express server and API routes
├── package.json
├── images/         # backgrounds and hero image
├── docs/           # technical report
└── .env            # secret, NOT committed (see .gitignore)
```

## Testing summary

The project was tested with 22 API/UI cases and 10 password-scoring cases (details in the report): 17 passed, 1 partially passed and 4 failed. Input validation, error handling and multilingual routing work as designed.

## Known issues and roadmap

These were found during testing and are documented in the report with fixes:

- [ ] `express.static(".")` serves project files such as `server.js`; move the front end into a `public/` folder
- [ ] Add rate limiting (`express-rate-limit`) and security headers (`helmet`)
- [ ] Password checker counts character types, so predictable passwords such as `Password123!` rate "Strong"; switch to entropy scoring or `zxcvbn`
- [ ] Chatbot `formatText()` regex bug shows raw `**` markers in replies
- [ ] Server-side chatbot handles 4 topics, the client-side one handles 8; unify them
- [ ] Add automated tests and CI
- [ ] Native-speaker review of Amharic and Afaan Oromoo text; add more languages

## Security

- Never commit your `.env` file. It is listed in `.gitignore`.
- If a key was ever shared or committed, **regenerate it** in your VirusTotal account.
- "No detections" from VirusTotal does not guarantee a URL is safe.

## Limitations

- Detection depends on VirusTotal; the free API tier is rate limited and not for commercial use.
- The chatbot is rule-based, not generative, by design: answers are reviewed in advance.
- Platform recovery steps and hotline numbers change over time and should be re-verified periodically.

## Emergency contacts used in the app

INSA: 963 · Federal Police Cyber Crime: 991 / 816 · Ethio Telecom: 994 · Telebirr: 127 · CBE: 951
*(Please verify these with the official sources before relying on them.)*

## Author

**[Meleat Biruk]**: [melatbiruk2127@gmail.com]

## License

ISC (as declared in `package.json`). 
