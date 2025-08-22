# YouTube Info Fetcher (GAS Proxy + Frontend)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)  
[![Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://zsdghlk.github.io/jadmg/)  
[![Made with GAS](https://img.shields.io/badge/made%20with-Google%20Apps%20Script-orange)](https://developers.google.com/apps-script)  

Fetch YouTube data in one click.  
YouTubeの情報を、ワンクリックで一括取得。  

---

# 🇺🇸 English Version

## 👥 For Users

### 🎮 How to Use
1. Open the [Demo Page](https://zsdghlk.github.io/jadmg/)  
2. Paste a YouTube URL into the input box:  
   - ✅ Channel URL  
   - ✅ Video URL  
   - ✅ Playlist URL  
3. Click the **Fetch** button  
4. A video list will appear:  
   - 🎬 Title (linked to YouTube)  
   - 👀 Views / 👍 Likes / 💬 Comments / 📅 Publish date (chip-style display)  
   - 🔀 Sorting options (views, likes, comments, publish date, fetch order)  

👉 **Users don’t need any setup** — just use it directly.  

---

## 🛠 For Developers

### ⚡ Setup
1. Deploy `gas/code.js` and `gas/appsscript.json` to Google Apps Script  
2. Set **`YT_API_KEY`** in Script Properties  
3. Deploy as Web App (accessible by anyone, including anonymous users)  
4. Host `index.html` (e.g., GitHub Pages) and point it to the GAS `/exec` endpoint  

### 🔑 API Key Notes
- This repository does **NOT** include an API key  
- Enable **YouTube Data API v3** in Google Cloud Console, generate a key, and save it in Script Properties  
- The key is never exposed to the frontend  
- For public demos, it is recommended to:  
  - Limit fetch size (e.g., max 300 items)  
  - Rotate API keys periodically  
  - Monitor usage regularly  

---

# 🇯🇵 日本語版

## 👥 ユーザー向け

### 🎮 使い方
1. [デモページ](https://zsdghlk.github.io/jadmg/) を開く  
2. 入力欄に YouTube の URL を貼り付け  
   - ✅ チャンネル URL  
   - ✅ 動画 URL  
   - ✅ プレイリスト URL  
3. 「取得」ボタンをクリック  
4. 動画リストが表示されます  
   - 🎬 タイトル（YouTube へのリンク付き）  
   - 👀 再生数 / 👍 高評価 / 💬 コメント数 / 📅 公開日（チップ形式で表示）  
   - 🔀 並び替え機能あり（再生数・高評価・コメント数・公開日など）  

👉 **ユーザーは特別な設定不要**。そのまま利用可能です。  

---

## 🛠 開発者向け

### ⚡ セットアップ
1. Google Apps Script に `gas/code.js` と `gas/appsscript.json` を配置  
2. Script Properties に **`YT_API_KEY`** を設定  
3. Webアプリとしてデプロイ（公開権限: 全員 / 匿名ユーザーを含む）  
4. `index.html` を GitHub Pages 等でホスティングし、GAS `/exec` エンドポイントを指定  

### 🔑 APIキーについて
- このリポジトリには **APIキーは含まれていません**  
- 各自の Google Cloud Console で **YouTube Data API v3** を有効化し、APIキーを取得  
- GAS の Script Properties に保存することで、フロントには露出しません  
- 公開デモ運用では以下を推奨:  
  - 取得件数の制限（例: 300件まで）  
  - キーの定期的なローテーション  
  - 利用状況のモニタリング  

---

# 📜 License
MIT License © 2025 zsdghlk  

- ✅ Free to use, modify, and distribute  
- ⚠️ Copyright notice and license text must be retained  
- 🚫 Provided “as is” without warranty (use at your own risk)  

MITライセンスに基づき提供されています。  
誰でも自由に利用・改造・配布できますが、著作権表記とライセンス文は残す必要があります。  
バグや損害について作者は責任を負いません（自己責任でご利用ください）。  
