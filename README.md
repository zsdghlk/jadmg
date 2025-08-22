# YouTube Info Fetcher (GAS Proxy + Frontend)

## 📜 License
MIT License © 2025 zsdghlk  
This software is released under the MIT License.  
You are free to use, modify, and distribute it, but you must keep the copyright notice and license text.  
The software is provided “as is” without warranty — use it at your own risk.  

このソフトウェアは MITライセンス で提供されています。  
誰でも自由に利用・改造・配布できますが、著作権表記とライセンス文は残す必要があります。  
また、バグや損害について作者は責任を負いません（自己責任でご利用ください）。  

---

# 🇯🇵 日本語版

## 📖 概要
YouTubeチャンネル / プレイリスト / 動画の情報を一括取得するツールです。  
Google Apps Script をバックエンドに利用し、APIキーを安全に管理しつつ、フロントから簡単に使えます。  

## ✨ 機能一覧
- 🔑 APIキーを安全に管理（Script Propertiesに保存、フロントへ露出なし）  
- 📊 メタ情報の取得と表示（再生数 / 高評価 / コメント / 公開日）  
- 🎨 UI最適化（ライト/ダーク対応、高コントラスト、チップUI）  
- 🔍 並び替え機能（再生数 / 高評価 / コメント / 公開日 / 取得順）  
- 📱 スマホ対応（最小タッチ48px、フォント16px以上）  
- 🛡 セキュリティ対策（CSP・PWA対応・取得上限300件）  

## 🎮 このサイトの使い方（ユーザー向け）
1. [デモページ](https://zsdghlk.github.io/yt-fetcher/) を開く  
2. 入力欄に YouTube のURLを貼る  
   - チャンネルURL  
   - 動画URL  
   - プレイリストURL  
3. 「取得」ボタンをクリック  
4. 動画リストが表示されます  
   - タイトルとリンク  
   - 再生数 / 高評価 / コメント / 公開日（チップ形式で表示）  
   - 並び替え機能も利用可能  

## ⚡ セットアップ方法（開発者向け）
1. Google Apps Script に `gas/code.js` と `gas/appsscript.json` を配置  
2. プロジェクトの Script Properties に `YT_API_KEY` を設定  
3. Webアプリとしてデプロイ（公開権限: 全員 / 匿名ユーザー）  
4. `index.html` を GitHub Pages 等で公開し、GAS `/exec` エンドポイントを指定  

## 🔑 APIキーについて（重要）
- 本リポジトリには APIキーは含まれていません  
- 利用する場合は、各自の Google Cloud Console で **YouTube Data API v3** を有効化し、取得した APIキーを Google Apps Script の Script Properties に保存してください  
- 公開デモ版を運用する場合は、取得件数制限（例: 300件）やキーのローテーションを行うことを推奨します  

---

# 🇺🇸 English Version

## 📖 Overview
This tool fetches YouTube channel / playlist / video details at once.  
It uses Google Apps Script as a backend proxy to keep API keys secure while providing a simple frontend interface.  

## ✨ Features
- 🔑 Secure API key handling (stored in Script Properties, never exposed to frontend)  
- 📊 Metadata display (views / likes / comments / publish date)  
- 🎨 Optimized UI (light/dark mode, high contrast, chip-style)  
- 🔍 Sorting options (views / likes / comments / publish date / fetch order)  
- 📱 Mobile friendly (min touch 48px, base font 16px)  
- 🛡 Security (CSP, PWA, max 300 items per fetch)  

## 🎮 How to Use (For Users)
1. Open the [Demo Page](https://zsdghlk.github.io/yt-fetcher/)  
2. Paste a YouTube URL into the input box:  
   - Channel URL  
   - Video URL  
   - Playlist URL  
3. Click the **Fetch** button  
4. The video list will appear with:  
   - Title & link  
   - Views / Likes / Comments / Publish date (chip-style)  
   - Sorting options available  

## ⚡ Setup (For Developers)
1. Deploy `gas/code.js` and `gas/appsscript.json` to Google Apps Script  
2. Set `YT_API_KEY` in Script Properties  
3. Deploy as WebApp (accessible by anyone, including anonymous users)  
4. Host `index.html` (e.g., GitHub Pages) and point it to the GAS `/exec` endpoint  

## 🔑 About API Key (Important)
- This repository does **NOT** include any API keys  
- To use it, enable **YouTube Data API v3** in your own Google Cloud Console, generate an API key, and store it in Google Apps Script Script Properties  
- If you host a public demo, it is strongly recommended to enforce limits (e.g., 300 items), rotate keys regularly, and monitor usage  
