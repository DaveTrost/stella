# Demand-IQ Online Solar Estimate

Affectionately named for it's avatar, Stella.


## Running the Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />

## Project Decisions

### Redux and Custom Hooks

### no CSS frameworks

### promise-middleware-redux

### seamless-immutable

## To-Do List

### A sideways scrolling list that matches the Figma

I needed to focus on functionality, and ran out of time to come back to this item. The current scroll box is CSS only. In order to implement the functionality the Figma shows, it will take some Javascript help. I briefly tried to use the 'react-horizontal-scroller' package to get the functionality faster, but it didn't pan out the way I hoped so I ditched it.

### Dynamic styling based on the API response

In the current site, there are 2 dynamic elements: the avatar image and the document title. I would need to spend some solid time to go in and implement a readable approach to doing the CSS-in-JS based on the style information that comes from the solarcompanies endpoint. When I do have time, I'm planning to use Emotion and/or styled-components for some syntactic friendliness.

### Fully cross browser styling on the range slider

There are several great articles written on this topic (I like a couple of the ones at CSS Tricks: [1](https://css-tricks.com/sliding-nightmare-understanding-range-input/), [2](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)). I'll need more time than I had available to appreciate these articles in depth and apply their tips.

### Appropriate Cursors

This is one of my pet peeves - cursors that don't show up as the right (intuitive) shape when hovering over specific elements. Closely related, for me, is text that is selectable but it's on a button or images that are selectable. I ran out of time to finalize these items. Fortunately, it's not going to break the user experience. Unfortunately, it will aggravate me so it won't be long before I'm chomping at the bit to fix it ... I can't decide if that's a good or bad thing!
