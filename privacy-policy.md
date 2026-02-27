# Privacy Policy for BetterYT

Last updated: February 2026

BetterYT is a Chrome extension that lets users create custom YouTube feeds by organizing channels and videos into categories. Your privacy is important, and this policy explains exactly what data the extension accesses and how it is used.

## Data Collection

BetterYT does not collect, store, or transmit any personal information to the extension developer.

The extension does not collect:
- Personally identifiable information
- Financial or payment information
- Personal communications
- Location data
- Web browsing history outside of YouTube
- Analytics or tracking data

## Local Storage

BetterYT uses Chrome's local storage API to store:
- User-created categories and their channel/video seed lists
- Cached feed suggestions (auto-invalidated daily or when seeds change)
- User-provided API keys (YouTube Data API and OpenAI)
- Extension preferences

All of this data is stored **locally on your device** and is never sent to the extension developer or any first-party server.

## External Services

BetterYT communicates with the following third-party APIs using API keys that you provide:

### YouTube RSS Feeds & YouTube Data API (Google)
- **What is sent:** Channel IDs, video IDs, and search queries derived from your category seeds.
- **Why:** To fetch recent uploads via RSS and to discover related videos through the YouTube Data API v3.
- **Governed by:** [Google's Privacy Policy](https://policies.google.com/privacy) and [YouTube Terms of Service](https://www.youtube.com/t/terms).

### OpenAI API (optional)
- **What is sent:** Video titles, channel names, short descriptions, and tags of candidate videos, along with a summary of your seed content profile.
- **Why:** To score and filter recommended videos for relevance to your interests. This feature is entirely optional and only active if you provide an OpenAI API key.
- **Governed by:** [OpenAI's Privacy Policy](https://openai.com/privacy) and [Usage Policies](https://openai.com/policies).

No data is sent to any external service unless you configure the corresponding API key. No personal information, browsing history, or account credentials are ever transmitted.

## Website Access

BetterYT runs on YouTube pages (`*.youtube.com`) in order to:
- Display custom category chips on the homepage
- Inject "Add to Feed" buttons on video pages, channel pages, and thumbnails
- Replace the native feed with your curated feed when a category chip is selected

The extension only interacts with content on YouTube and does not monitor or access any other websites.

## Data Sharing

BetterYT does not:
- Sell or monetize any user data
- Share data with the extension developer or any first-party server
- Transfer data to third parties beyond the API calls described above
- Use data for advertising or profiling

## API Key Security

Your API keys are stored in Chrome's local storage on your device. They are only used to authenticate requests to the respective APIs and are never exposed to any other party.

## Open Source

BetterYT is an open-source project. The source code can be reviewed to verify exactly how the extension works and how data is handled.

## Changes to This Policy

If the extension's functionality changes in the future, this privacy policy will be updated accordingly.

## Contact

If you have questions about this privacy policy or the extension, please contact the developer through the Chrome Web Store listing.
