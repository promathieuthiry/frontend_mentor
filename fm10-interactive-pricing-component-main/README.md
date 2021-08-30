# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![Desktop](./images/preview-desktop.png)
![mobile](./images/preview-mobile.png)

### Links

- Solution URL: [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8/hub/princing-component-using-sass-and-css-grid-Hke75U2Q4)
- Live Site URL: [netlify](https://frontend-mentor-promathieuthiry.netlify.app/fm10-interactive-pricing-component-main/index.html)

## My process

### Built with

- Flexbox
- GRID
- SASS
- Javascript

### What I learned

I learned how to display the value of the range using javascript and to display a different background color based on the value of the range.

```js
const slider = document.getElementById("slider");

slider.oninput = function () {
    outputNumber.innerHTML = `${this.value}K&nbsp;PAGEVIEWS`;
    const percentage = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #A4F3EB ' + percentage + '%, #ECF0FB ' + percentage + '%, #ECF0FB 100%)'
}
```

## Author

- Website - [mathieuthiry.fr](https://mathieuthiry.fr/)
- Frontend Mentor - [@promathieuthiry](https://www.frontendmentor.io/profile/promathieuthiry)
- Twitter - [@mathieu_thiry](https://twitter.com/mathieu_thiry)