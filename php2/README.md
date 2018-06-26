# gatsby-react-graphql


For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).


## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
gatsby develop
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)


## notes

- `npm install gatsby-plugin-catch-links` Intercepts local links from markdown and other non-react pages, and does a client-side pushState to avoid the browser having to refresh the page.
- `npm install gatsby-source-filesystem` sources data about files from your computer’s file system.
- `npm install gatsby-transformer-remark` this transforms blog posts written in markdown .md files on the local disk into HTML for rendering.
- `npm install --save react-media`