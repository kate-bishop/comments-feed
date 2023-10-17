# Comments Feed

This app displays a list of comments posted on a feed.

## How to Run Locally

### comments-feed

Start this repository first so it gets the localhost:3000 spot:

```
yarn
yarn start
```

### comments-feed-api

Start the API so it runs on localhost:3001. I made a few updates to the provided front-end-cyoa repository to resolve some errors on my machine:

1. Updated sqlite3 version to "^5.0.3" (originally "^4.0.7")
2. In `./server/index`, configured cors to accept calls from localhost:3000

Those changes can be found in [comments-feed-api](https://github.com/kate-bishop/comments-feed-api). Everything else is the same, so you can run that server with:

```
npm install
npm run dev
```

## Project Planning
- [X] Run & connect to API locally
- [X] Display comments in list
- [X] Seed comments button (for ease of testing)
- [X] Delete comments button (for ease of testing)
- [ ] Styling
- [ ] Notify when a new comment is added
- [ ] Create comment input
- [ ] Write tests

### Future Features
- Sort order
