# Remote
Remote is a tool to boost your productivity whilst working from home.

*A hub for daily essential information. No searching. No scrolling.*

## About
Remote is a free [Next.js](https://nextjs.org/)-based mobile-friendly web application that aggregates useful information from a variety of different sources for quick and easy access and digestion.
The COVID-19 global pandemic has moved entire workforces completely off-site, and remote working creates unique challenges that employees must navigate to 
ensure productivity.\
Searching for news articles or the latest Tesla stock price can be potentially timeconsuming and distracting in equal measure.\
Remote aims to mitigate this problem by delivering the content that you care about directly to you. 

Currently Remote supports four major categories of information: 
* COVID-19 statistics and graphs
* Financial data and economic calendar releases from TradingView
* Current weather conditions and hourly forecast
* Top headlines from an array of local and international news outlets

All this data is presented real-time, and pre-rendered and delivered from the server on a user request, with no API calls on the client. 
Furthermore, Remote is designed with a contactless approach at its core; a user is only one-click away from up-to-date information.\
Minimal interaction with the web application is required; relevant data is automatically fetched by the server 
according to your location and delivered to the client for rendering in your browser in a single page.

## Run
To run Remote locally, clone this repository and then run the following commands after navigating to the target directory:
1. ```cd remote```
2. ```npm install```
3. ```npm run dev```


## UCT DevSoc Competition Notes
Alternatively, visit a US-hosted production build of [Remote](https://remote-mu.vercel.app/). The Vercel CDN configuration routes the client IP via the US, so don't be surprised when you see US specific data! 
It's a great way to see how Remote adapts instantly to your location.
Also note that visiting the Weather page will return a 500 error, due to a Vercel deployment bug not present in previous builds.
Everything works as expected locally.
Easter Egg: Click on the mask icon on the COVID-19 page for a small surprise!
