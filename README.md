# Demand-IQ Online Solar Estimate

(Affectionately named for it's avatar, Stella)<br />
You can run this project from it's deployment at https://solar-for-the-win.netlify.app, or you can build it according to the details below. If running from the deployed site, you need to be on a desktop browser, as mobile browsers seem not to play nicely with the proxy and the server's CORS requirements.

## Running the Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />

## Project Decisions

### Redux and Custom Hooks

I love React hooks. They make my code more readable and allow for (IMHO) really good code phrasing. I also use the hook implementation to integrate Redux. I took a shotgun approach at first to get the logic handling to work across the whole app. And it was very ugly all in a single bloated file. That's where the custom hooks come in. I put all the logic into a custom hook and I feel this did a good job of separating concerns between component hierarchy and display/business logic.

### no CSS frameworks

This project strikes me as an opportunity to do things simply. I took advantage of that. I write (I think) just the essential CSS to achieve a look and function. I hope I did not read the intent of the project poorly. I can't decide if the decision to forego frameworks helped or hindered. On the one hand, the horizontal scrolling element that I ran out of time to implement is a built-in component for some CSS frameworks. On the other hand, it can be very time-consuming to cleanly override the default CSS properties in a framework - especially while targeting a specific Figma design look.

### the blank screen at the end

I wasn't sure how to best handle the "I'm ready" button at the end of the flow. I decided to make it go to a blank screen. This (of course) represents the wide open world of opportunities available to the user. Sarcasm aside, I want it to be clear this was an intentional move.

### promise-middleware-redux

I love this library. The developer was an instructor of mine. The library does one thing very well: loading/done/rejected states for API requests. Check it out!= and let me know what you think!

## To-Do List

### A sideways scrolling list that matches the Figma

I needed to focus on functionality, and ran out of time to come back to this item. The current scroll box is CSS only. In order to implement the functionality the Figma shows, it will take some Javascript help. I briefly tried to use the 'react-horizontal-scroller' package to get the functionality faster, but it didn't pan out the way I hoped so I ditched it.

### Dynamic styling based on the API response

In the current site, there are 2 dynamic elements: the avatar image and the document title. I would need to spend some solid time to go in and implement a readable approach to doing the CSS-in-JS based on the style information that comes from the solarcompanies endpoint. When I do have time, I'm planning to use Emotion and/or styled-components for some syntactic friendliness.

### Fully cross browser styling on the range slider

There are several great articles written on this topic (I like a couple of the ones at CSS Tricks: [1](https://css-tricks.com/sliding-nightmare-understanding-range-input/), [2](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)). I'll need more time than I had available to appreciate these articles in depth and apply their tips.

### Appropriate Cursors

This is one of my pet peeves - cursors that don't show up as the right (intuitive) shape when hovering over specific elements. Closely related, for me, is text that is selectable but it's on a button or images that are selectable. I ran out of time to finalize these items. Fortunately, it's not going to break the user experience. Unfortunately, it will aggravate me so it won't be long before I'm chomping at the bit to fix it ... I can't decide if that's a good or bad thing!
