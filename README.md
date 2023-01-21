# For Blossom API

This API pulls up quotes from books (fiction, nonfiction, poetry) that I've read and reminds me of my fiancée.

**Link to project:** https://forblossom.netlify.app/

**NOTE:** All projects are currently being migrated out of Heroku.

![For Blossom](https://raw.githubusercontent.com/diathekez/for-blossom-api/master/forblossom_screenshot.png)

## How It's Made:

**Tech used:** HTML, JavaScript, Express, Materialize, Heroku, Netlify, & Postman

I built this with vanilla JS using VSCode and the built-in Git Bash terminal. I used Postman to test it before pushing it to Github and deploying it on Heroku. Materialize and some minor custom CSS was used for the styling.

## Install all the dependencies or node packages used for development via terminal

`npm install`

afterward:

`npm start`

## How to Deploy

There's a folder in the repo named "for-blossom-client-side." This folder is the static website that will consume the API. The easiest way to have it running is to deploy it manually on Netlify, since it doesn't need to be updated. Everything else in the repo should be deployed on Heroku or a similar service (this would be the back-end).

## Optimizations

In the future, I'll add a "newsletter" option so my fiancée (and others) could subscribe and get daily emails with a quote. Perhaps if some people like the API, I'll add OAuth to enable account creation so users can input their own quotes. I'll also get rid of the user input and simply leave a button that randomly generates and displays data from the array. Some minor improvements will be adding an anchor link to the "Work" collapsible section that directs users to the relevant Amazon page of the book cited.

## Conclusions

This was a good exercise in learning how to implement and pull up handcoded APIs as well as separating front-end from the back-end but integrating it together. I also finally managed to do something with all the book quotes I've written down. This project helped me use Materialize a little better and I'm happy with the result.
