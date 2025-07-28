# AIプロジェクト用アイコン生成プロンプト

以下のプロンプトをChatGPTのDALL-E機能で使用して、各プロジェクトのアイコンを生成してください。
生成されたアイコンは `portfolio-site/public/icons/` フォルダに保存し、ファイル名は各プロジェクトのIDに対応させてください。

## 共通スタイル指定
- サイズ: 512x512px
- スタイル: モダンでミニマル、フラットデザイン
- 背景: 透明または白
- カラーパレット: 青系（#3B82F6）をメインに、アクセントカラーを使用

## 各プロジェクトのアイコン生成プロンプト

### 1. Asagami AI (asagami-ai.png)
**既存のアイコンがあるため生成不要**

### 2. WISDOM Blog (wisdom-blog.png)
```
Create a modern, minimalist icon for an AI-powered knowledge management system called "WISDOM Blog". The icon should feature a stylized book or document with AI/brain elements integrated. Use blue (#3B82F6) as the primary color with subtle gradients. Include subtle circuit patterns or neural network lines. The design should be clean, professional, and suitable for a developer tool. 512x512px, flat design style.
```

### 3. AI Safety Monitor (ai-safety-monitor.png)
```
Create a modern, minimalist icon for an AI safety monitoring dashboard. The icon should feature a shield combined with monitoring/dashboard elements like charts or graphs. Use blue (#3B82F6) as the primary color with green accents for safety. Include subtle AI/tech elements like circuit patterns. The design should convey security, monitoring, and reliability. 512x512px, flat design style.
```

### 4. AI Development Companion (ai-development-companion.png)
```
Create a modern, minimalist icon for an AI development companion tool. The icon should feature coding elements (like brackets or code symbols) combined with AI/assistant imagery. Use blue (#3B82F6) as the primary color with purple accents. Include subtle tech elements like circuit patterns or neural networks. The design should convey intelligence, assistance, and development. 512x512px, flat design style.
```

### 5. Constitutional AI System (constitutional-ai.png)
```
Create a modern, minimalist icon for a Constitutional AI ethics system. The icon should feature scales of justice or a gavel combined with AI/neural network elements. Use blue (#3B82F6) as the primary color with gold accents for ethics/justice. Include subtle circuit patterns. The design should convey ethics, governance, and AI responsibility. 512x512px, flat design style.
```

### 6. MCP Integration Toolkit (mcp-integration-toolkit.png)
```
Create a modern, minimalist icon for a Model Context Protocol integration toolkit. The icon should feature connected nodes or network topology with integration symbols (like puzzle pieces or connecting arrows). Use blue (#3B82F6) as the primary color with teal accents. Include subtle tech/protocol elements. The design should convey connectivity, integration, and data flow. 512x512px, flat design style.
```

### 7. AI News Dashboard (ai-news-dashboard.png)
```
Create a modern, minimalist icon for an AI news dashboard. The icon should feature a newspaper or news symbol combined with dashboard/analytics elements like charts or graphs. Use blue (#3B82F6) as the primary color with orange accents for news. Include subtle AI elements like neural patterns. The design should convey information, analysis, and real-time updates. 512x512px, flat design style.
```

### 8. YouTube Channel Analyzer (youtube-channel-analyzer.png)
```
Create a modern, minimalist icon for a YouTube channel analyzer tool. The icon should feature a play button or video symbol combined with analytics elements like charts or graphs. Use blue (#3B82F6) as the primary color with red accents (YouTube brand color). Include subtle AI/analysis elements. The design should convey video analysis, insights, and performance metrics. 512x512px, flat design style.
```

### 9. AI Image Generator (ai-image-generator.png)
```
Create a modern, minimalist icon for an AI image generation tool integrated with spreadsheets. The icon should feature an image/picture symbol combined with spreadsheet grid elements and AI imagery. Use blue (#3B82F6) as the primary color with green accents for creativity. Include subtle AI elements like neural patterns. The design should convey creativity, automation, and batch processing. 512x512px, flat design style.
```

## 使用方法

1. 上記のプロンプトをChatGPTのDALL-E機能で実行
2. 生成されたアイコンをダウンロード
3. `portfolio-site/public/icons/` フォルダに保存
4. ファイル名を対応するプロジェクト名に設定
5. `portfolio-site/src/app/portfolio/page.tsx` でアイコンパスを更新

## アイコン更新後の作業

各プロジェクトの `icon` プロパティを以下のように更新：

```typescript
icon: '/icons/wisdom-blog.png', // nullから実際のパスに変更
```