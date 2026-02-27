# BetterYT

A Chrome extension that lets you create custom, curated video feeds directly on YouTube's homepage. Organize channels and videos into categories, and BetterYT surfaces a personalized feed with AI-powered recommendations — right alongside YouTube's native UI.

## Features

- **Custom category chips** — Appear in YouTube's homepage chip bar. Click one to replace the native feed with your curated feed.
- **Channel & video seeds** — Add YouTube channels or individual videos as "seeds" to any category. BetterYT pulls recent uploads via RSS and discovers related content via the YouTube Data API.
- **AI reranking** — Optionally uses OpenAI (gpt-4o-mini) to score and filter recommendations for relevance to your interests.
- **"Add to Feed" buttons** — Injected on video pages, channel pages, and homepage thumbnails for quick one-click additions.
- **Smart caching** — Suggestion results are cached per category per day and automatically invalidated when seeds change.

## Setup

### Prerequisites

- Node.js (v18+)
- A [YouTube Data API v3](https://console.cloud.google.com/apis/api/youtube.googleapis.com) key
- (Optional) An [OpenAI API](https://platform.openai.com/api-keys) key for AI reranking

### Install & build

```sh
npm install
npm run build
```

### Load into Chrome

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `dist/` folder

### Configure API keys

1. Click the BetterYT extension icon to open the popup
2. Click the gear icon (⚙) to open Settings
3. Enter your YouTube Data API key (required) and OpenAI API key (optional)
4. Click **Save Keys**

## Usage

1. **Create a category** in the extension popup (e.g. "Machine Learning", "Music Production").
2. **Add channels or videos** — browse YouTube and use the "Add to Feed" buttons on video/channel pages, or on homepage thumbnails. You can also add channels manually in the popup.
3. **View your feed** — go to the YouTube homepage and click your category chip in the filter bar.
4. **Refresh suggestions** — click the refresh button in the feed or in the popup to re-fetch recommendations.

## Tech stack

- React 19 + TypeScript
- Vite + [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin) for Manifest V3 bundling
- Chrome Storage API for local persistence
- YouTube RSS feeds + YouTube Data API v3 for content
- OpenAI API for optional AI reranking

## Project structure

```
src/
├── background/     # Service worker — RSS fetching, suggestion pipeline, caching
├── content/        # Content script — injects chips, feed UI, and "Add to Feed" buttons
├── icons/          # SVG icon components
├── popup/          # Extension popup — category management and settings
├── services/       # YouTube API client, recommendation engine, AI reranker
└── utils/          # Chrome storage helpers, types
```

## Development

```sh
npm run dev      # Start Vite dev server with HMR
npm run build    # Type-check and production build to dist/
npm run lint     # Run ESLint
```
