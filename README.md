# MuslimNews

MuslimNews is a news website gathering all Islam and Muslim related news articles from around the world. The website is to help users find relevant news and articles relating to Islam and the Muslim world with the added capability of specifying a keyword of their interest.

![MuslimNews on the web](https://github.com/mujahidfa/MuslimNews/blob/master/MuslimNews.gif)

Our website: https://muslimnews.netlify.app/

### Inspiration

These days I rely solely on Twitter or Facebook to get my daily dose of news and updates. Sometimes I find myself looking for what's going on in other Muslim countries and with the ummah at large. But by using only Twitter and Facebook, it's hard to get curated news on a specific topic. So we decided to create a website that collects all Muslim/Islam related news and displays it in a good looking website.

### What it does

It scrapes the web for all Muslim or Islam related news from all around the world and gathers it in a single website. Users can find latest and trending news on a specific topic or category that is related to the Muslim world. Users can search for topics and sort according to date and relevancy.

### How we built it

We built the website using NuxtJS and VueJs. News content is Rest API'd from the [Bing Search API](https://azure.microsoft.com/en-us/try/cognitive-services/?api=search-api-v7). The website is a server-side rendered SPA, which means it comes with the benefits of a modern SPA while being optimized for SEO (which is something that lacks in a traditional Vue SPA).

### Challenges we ran into

We faced challenges related to news scraping APIs. First, we need to query Islam or Muslim related news using precise keywords to get relevant news. We also found out that the News API is limited to the development phase. It works successfully during our development on the localhost, but it gives an error when deployed on a hosting platform - Netlify.

### Accomplishments that we're proud of

We are proud of the design. We started the design process by sketching the platform for mobile and web. Then, we referred to news websites to learn about important features and elements that we need to have. Important features that we implemented are sections for featured, relevant, and latest news for most news categories.

### What we learned

MuslimNews is our first web application that involves the use of a news search API. We learned how to connect the API to our web application so that it works on both development and deployment. A specific feature we like is the API's ability to sort news according to relevancy and published date. In addition, we learned to develop tests using the VueJS testing library- Vue Test Utils.

### What's next for MuslimNews

Our goal is: MuslimNews will be a one-stop news outlet for news readers around the world. We will start by making the website accessible to all users through a domain. Having a domain would help increase MuslimNews' presence in SEO, therefore allowing it to reach more users. Consequently, MuslimNews needs to be more inclusive. This can be done by having Islam/Muslim news articles from many countries including local and smaller news outlets. MuslimNews longer-term goal is to personalize news to an individual user. A user can select relevant news according to their personal interest and subscribe to them.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
