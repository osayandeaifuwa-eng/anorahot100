# Anora Hot 100

Personal music charts website — inspired by Elio Charts.

## What's included
- Your Top 100 ranked by plays (from your scrobble data)
- Clean design similar to Elio Charts
- Dark mode support
- Ready to deploy on Vercel

## How to run locally

1. Install Node.js (https://nodejs.org) if you don't have it
2. Open a terminal in this folder
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open http://localhost:3000

## Deploy to Vercel (free)

### Option A — Easiest (Recommended)
1. Create a free GitHub account: https://github.com/signup
2. Create a new repository called `anorahot100`
3. Upload all the files from this folder to the repo
4. Go to https://vercel.com and sign up with your GitHub account
5. Click "Add New Project" → select your `anorahot100` repo
6. Click Deploy
7. You will get a link like: `https://anorahot100.vercel.app`

### Option B — Using Vercel CLI
```
npm install -g vercel
vercel
```

## Updating the chart later
Edit the file `data/chart.json` and change the songs list.  
Then commit & push (or re-deploy) and the site will update.

## Custom domain (optional)
After deploying on Vercel you can add your own domain (e.g. anorahot100.com) in the Vercel project settings.
