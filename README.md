🎵 TikTok Video Downloader API

<p align="center">
  <img src="https://files.catbox.moe/8oracy.jpg" alt="TikTok Downloader Banner" width="100%" style="border-radius: 20px;">
</p>

<h1 align="center">
  🎵 TikTok Video Downloader API 🚀
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge">
  <img src="https://img.shields.io/badge/TikWM-API-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/No%20Watermark-✅-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/HD%20Quality-1080p-gold?style=for-the-badge">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge">
</p>

<p align="center">
  <b>Download TikTok videos without watermark in HD quality! 🎵✨</b>
</p>

---

🎀 DEVELOPER

<p align="center">
  <b>✨ Mahin Ahmed ✨</b><br>
  <a href="https://www.facebook.com/RentaroAijo.4x">Facebook</a> • 
  <a href="https://github.com/Dbz-Mahin7x">GitHub</a> • 
  <a href="https://instagram.com/dbz_mahin">Instagram</a>
</p>

---

🎯 LIVE DEMO

<p align="center">
  <a href="https://mahiru-tiktok-down.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_Try_It_Now-Click_Here-ff69b4?style=for-the-badge&logo=vercel">
  </a>
  <br><br>
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mahiru-tiktok-down.vercel.app/" alt="QR Code">
  <br>
  <b>👉 <a href="https://mahiru-tiktok-down.vercel.app/">https://mahiru-tiktok-down.vercel.app/</a></b>
</p>

---

✨ FEATURES

Feature Description
🎥 No Watermark Download videos without the TikTok watermark
📹 HD Quality Up to 1080p resolution
🎵 Audio Extraction Separate music/audio download
👤 Author Info Get creator details, followers, stats
📊 Video Stats Views, likes, comments, shares
🖼️ Thumbnails Multiple cover images included
⚡ Fast & Reliable Using TikWM API (99.9% uptime)
🌐 CORS Enabled Use from any frontend application
📱 Mobile Friendly Works on any device

---

🛠️ TECH STACK

<p align="center">
  <img src="https://img.icons8.com/color/48/000000/nodejs.png" width="50" title="Node.js">
  <img src="https://img.icons8.com/color/48/000000/express-js.png" width="50" title="Express.js">
  <img src="https://img.icons8.com/color/48/000000/javascript.png" width="50" title="JavaScript">
  <img src="https://img.icons8.com/color/48/000000/vercel.png" width="50" title="Vercel">
  <img src="https://img.icons8.com/color/48/000000/api.png" width="50" title="REST API">
</p>

Layer Technology
Backend Node.js + Express.js
API Source TikWM API (No key needed)
HTTP Client Axios
Hosting Vercel (Serverless Functions)

---

📁 PROJECT STRUCTURE

```bash
📦 Tiktok-down/
├── 📂 api/
│   └── 📄 tiktok.js          # Main API handler
├── 📄 package.json            # Dependencies
├── 📄 vercel.json              # Vercel configuration
└── 📄 README.md               # Documentation
```

---

🚀 API ENDPOINTS

Download TikTok Video

```
GET /api/tiktok?url={TIKTOK_URL}
```

Parameter Type Required Description
url string ✅ Yes TikTok video URL

Example Request

```bash
curl "https://mahiru-tiktok-down.vercel.app/api/tiktok?url=https://www.tiktok.com/@username/video/123456789"
```

Response Format

```json
{
  "success": true,
  "platform": "tiktok",
  "video": {
    "no_watermark": "https://tikwm.com/video/media/123456789/play_720p.mp4",
    "with_watermark": "https://tikwm.com/video/media/123456789/play_wm.mp4",
    "hd": "https://tikwm.com/video/media/123456789/play_hd.mp4",
    "music": "https://tikwm.com/music/123456789.mp3",
    "cover": "https://tikwm.com/cover/123456789.jpg",
    "dynamic_cover": "https://tikwm.com/cover/dynamic/123456789.jpg",
    "origin_cover": "https://tikwm.com/cover/origin/123456789.jpg"
  },
  "metadata": {
    "id": "123456789",
    "title": "Amazing TikTok video! 🎵",
    "duration": 15,
    "region": "US",
    "create_time": "2024-01-01T00:00:00.000Z",
    "size": 5242880,
    "video_length": 15
  },
  "author": {
    "id": "123456",
    "unique_id": "username",
    "nickname": "User Name",
    "avatar": "https://tikwm.com/avatar/123.jpg",
    "signature": "Life is beautiful ✨",
    "verified": true,
    "following": 123,
    "followers": 1000000,
    "hearts": 5000000,
    "videos": 50
  },
  "stats": {
    "plays": 1234567,
    "likes": 234567,
    "comments": 12345,
    "shares": 6789,
    "downloads": 12345,
    "collects": 5432
  },
  "music_info": {
    "id": "music_123",
    "title": "Original Sound",
    "author": "Creator Name",
    "duration": 15,
    "cover": "https://tikwm.com/music_cover.jpg",
    "play_url": "https://tikwm.com/music/123.mp3"
  }
}
```

---

🚀 DEPLOYMENT

One-Click Deploy

<a href="https://vercel.com/new/clone?repository-url=https://github.com/Dbz-Mahin7x/Tiktok-down">
  <img src="https://vercel.com/button" alt="Deploy with Vercel">
</a>

Manual Deployment

Step 1: Clone Repository

```bash
git clone https://github.com/Dbz-Mahin7x/Tiktok-down.git
cd Tiktok-down
```

Step 2: Install Dependencies

```bash
npm install
```

Step 3: Test Locally

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

Step 4: Deploy to Vercel

```bash
vercel --prod
```

Step 5: Environment Variables

No environment variables needed! The API works out of the box.

---

📦 DEPENDENCIES

```json
{
  "dependencies": {
    "axios": "^1.6.2"
  }
}
```

---

🎮 USAGE EXAMPLES

JavaScript (Fetch API)

```javascript
const response = await fetch(
  `https://mahiru-tiktok-down.vercel.app/api/tiktok?url=${encodeURIComponent(tiktokUrl)}`
);
const data = await response.json();

if (data.success) {
  console.log('Video URL:', data.video.no_watermark);
  console.log('Author:', data.author.nickname);
  console.log('Stats:', data.stats);
}
```

Python (Requests)

```python
import requests

url = "https://mahiru-tiktok-down.vercel.app/api/tiktok"
params = {"url": "https://www.tiktok.com/@user/video/123456789"}

response = requests.get(url, params=params)
data = response.json()

if data["success"]:
    print("Video URL:", data["video"]["no_watermark"])
    print("Author:", data["author"]["nickname"])
```

cURL

```bash
curl "https://mahiru-tiktok-down.vercel.app/api/tiktok?url=https://www.tiktok.com/@user/video/123456789"
```

---

📱 GOATBOT COMMAND

Create scripts/cmds/tiktok.js

```javascript
"use strict";

const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

// Helper to fetch API URL from your central Api.json
async function getApiUrl() {
  if (global.tiktokApiUrl) return global.tiktokApiUrl;
  try {
    const { data } = await axios.get('https://raw.githubusercontent.com/Dbz-Mahin7x/MAHIRU/main/Api.json');
    let base = data["tiktok-dl"];
    global.tiktokApiUrl = base.endsWith('/') ? base.slice(0, -1) : base;
    return global.tiktokApiUrl;
  } catch (error) {
    console.error("Failed to fetch TikTok API config:", error.message);
    throw error;
  }
}

const toBold = (t) => {
  const map = {
    a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",
    A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",
    0:"𝟎",1:"𝟏",2:"𝟐",3:"𝟑",4:"𝟒",5:"𝟓",6:"𝟔",7:"𝟕",8:"𝟖",9:"𝟗"
  };
  return t.split("").map(c => map[c] || c).join("");
};

module.exports = {
  config: {
    name: "tiktok",
    version: "1.0.1",
    author: "𝓡𝓮𝓷𝓽𝓪𝓻𝓸 𝐴𝓲𝓳𝓸 🌸🫧",
    countDown: 10,
    role: 0,
    category: "media",
    shortDescription: "📥 Download TikTok videos without watermark"
  },

  onStart: async function ({ api, event, args, message }) {
    const url = args[0];
    const { threadID, messageID } = event;
    
    if (!url || !url.includes('tiktok.com')) {
      return message.reply(
        `🎵 ${toBold("Please provide a TikTok URL!")}\n\n` +
        `${toBold("Example:")}\n` +
        `/tiktok https://vm.tiktok.com/ZS...`
      );
    }

    const loadingMsg = await message.reply(`⏳ ${toBold("Downloading TikTok video...")}`);

    try {
      const BASE_URL = await getApiUrl();
      const apiUrl = `${BASE_URL}/api/tiktok?url=${encodeURIComponent(url)}`;
      
      const response = await axios.get(apiUrl);
      const data = response.data;

      if (!data.success) {
        api.unsendMessage(loadingMsg.messageID);
        return message.reply(`❌ ${toBold(data.error || "Download failed")}`);
      }

      const videoUrl = data.video.no_watermark;
      const cacheDir = path.join(__dirname, 'cache');
      if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);
      
      const videoPath = path.join(cacheDir, `tiktok_${Date.now()}.mp4`);
      
      const videoResponse = await axios({
        method: 'GET',
        url: videoUrl,
        responseType: 'stream'
      });

      const writer = fs.createWriteStream(videoPath);
      videoResponse.data.pipe(writer);

      writer.on('finish', async () => {
        const info = 
          `🎵 ${toBold("TikTok Downloaded")}\n\n` +
          `👤 @${data.author.unique_id}\n` +
          `📝 ${data.metadata.title || 'No caption'}\n\n` +
          `❤️ ${toBold(data.stats.likes.toLocaleString())} likes\n` +
          `💬 ${toBold(data.stats.comments.toLocaleString())} comments\n` +
          `🔄 ${toBold(data.stats.shares.toLocaleString())} shares\n\n` +
          `✨ ${toBold("No watermark!")}`;

        await message.reply({
          body: info,
          attachment: fs.createReadStream(videoPath)
        });

        // Cleanup
        if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
        api.unsendMessage(loadingMsg.messageID);
      });

      writer.on('error', (err) => {
        throw err;
      });

    } catch (error) {
      console.error(error);
      api.unsendMessage(loadingMsg.messageID);
      message.reply(`❌ ${toBold("Error:")} ${error.message}`);
    }
  }
};

```

---

🐛 TROUBLESHOOTING

Issue Solution
Video not found URL might be private or deleted
API timeout Try again in a few seconds
Invalid URL Make sure URL contains tiktok.com
Rate limited Wait 10-15 seconds between requests

---

📊 API STATUS

Service Status
TikWM API ✅ Online
No Watermark ✅ Working
HD Quality ✅ Available
Author Info ✅ Complete

---

📝 LICENSE

```
MIT License

Copyright (c) 2026 Mahin Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

🙏 ACKNOWLEDGMENTS

· 🎵 TikWM for the amazing API
· 🚀 Vercel for free hosting
· 💜 All TikTok creators and users

---

📞 CONTACT

<p align="center">
  <a href="https://www.facebook.com/RentaroAijo.4x">
    <img src="https://img.icons8.com/color/48/000000/facebook.png" width="40">
  </a>
  <a href="https://github.com/Dbz-Mahin7x">
    <img src="https://img.icons8.com/color/48/000000/github.png" width="40">
  </a>
  <a href="https://instagram.com/dbz_mahin">
    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" width="40">
  </a>
</p>

<p align="center">
  <b>Live Demo:</b> <a href="https://mahiru-tiktok-down.vercel.app/">https://mahiru-tiktok-down.vercel.app/</a><br>
  <b>GitHub:</b> <a href="https://github.com/Dbz-Mahin7x/Tiktok-down">https://github.com/Dbz-Mahin7x/Tiktok-down</a>
</p>

---

⭐ SHOW YOUR SUPPORT

<p align="center">
  <b>Give a ⭐️ on GitHub if this project helped you!</b>
</p>

<p align="center">
  <a href="https://github.com/Dbz-Mahin7x/Tiktok-down/stargazers">
    <img src="https://img.shields.io/github/stars/Dbz-Mahin7x/Tiktok-down?style=for-the-badge&color=purple">
  </a>
  <a href="https://github.com/Dbz-Mahin7x/Tiktok-down/network/members">
    <img src="https://img.shields.io/github/forks/Dbz-Mahin7x/Tiktok-down?style=for-the-badge&color=blue">
  </a>
</p>

---

<p align="center">
  <img src="https://files.catbox.moe/8oracy.jpg" alt="Footer" width="200" style="border-radius: 50%;">
</p>

<p align="center">
  <b>Made with ❤️ and 🎵 for TikTok lovers everywhere</b><br>
  <b>🇧🇩 From Bangladesh with Love 🇧🇩</b>
</p>

<p align="center">
  <img src="https://profile-counter.glitch.me/tiktok-down/count.svg">
</p>

---

🚀 QUICK COMMANDS

```bash
# Clone
git clone https://github.com/Dbz-Mahin7x/Tiktok-down.git

# Install
npm install

# Deploy
vercel --prod

# Test
curl "https://mahiru-tiktok-down.vercel.app/api/tiktok?url=YOUR_TIKTOK_URL"
```

---

<p align="center">
  <b>✨ Download any TikTok video without watermark in seconds! ✨</b>
</p>