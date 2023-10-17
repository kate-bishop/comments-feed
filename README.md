# Kate Bishop's Comments Feed UI

This app is for users to read and post comments in a feed. If a comment is posted while the user is on the page, the feed will update within 5 seconds.

For local testing usage, buttons are provided to seed the comment feed, and delete all comments.

<img width="1724" alt="Comments Feed Screenshot" src="https://github.com/kate-bishop/comments-feed/assets/22239024/05070bfa-69c0-4972-8cf7-68560d85b782">

## How to Run Locally

I made a few updates to the provided front-end-cyoa repository that are needed to run this app locally. Please clone [comments-feed-api](https://github.com/kate-bishop/comments-feed-api) and use as the API server. Those changes include:

1. CORS package added configured to accept calls from localhost:3000 ([see the configuration change here](https://github.com/kate-bishop/comments-feed-api/blob/main/server/index.js#L10))
2. Package version for sqlite3 updated to "^5.0.3"
    - Depending on the version installed on your machine, you may need to downgrade this package back to "^4.0.7"

### comments-feed

Start this repository first so it gets the localhost:3000 spot:

```
yarn
yarn start
```

### comments-feed-api

Start the API so it runs on localhost:3001:

```
npm install
npm run dev
```

## Project Planning
- [X] Run & connect to API locally
- [X] Display comments in list
- [X] Seed comments button (for ease of testing)
- [X] Delete comments button (for ease of testing)
- [X] Styling
- [X] Create comment input
- [X] Update feed when new comment is added

Ran out of time:
- [ ] Notify when a new comment is added (see TODO comment [here](https://github.com/kate-bishop/comments-feed/blob/main/src/App.tsx#L18))
- [ ] Write tests

### Future Improvements
- Lazy loading/pagination
- Use websocket instead of polling for new comments
- Error handling on comment form
- Sort and filter comments
- Author can edit or delete a post
