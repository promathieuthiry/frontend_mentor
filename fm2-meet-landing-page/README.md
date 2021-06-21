# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Desktop](./preview/fm2-meet-landing-page-desktop.png)
![tablet](./preview/fm2-meet-landing-page-tablet.png)
![mobile](./preview/fm2-meet-landing-page-mobile.png)

### Links

- Solution URL: [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR/hub/landing-page-using-css-Q8u5yhHUH)
- Live Site URL: [netlify](https://frontend-mentor-promathieuthiry.netlify.app/fm2-meet-landing-page/index.html)

## My process

### Built with

- Only HTML5 and CSS
- Flexbox

### What I learned

The child inherit the opacity property from the parent. The problem is the text had a low opacity. To avoid the problem I use RGBA.

```css
#wrapper-footer {
    background: rgba(77, 150, 169, 0.8);
}
```

I learned how to apply an opacity without adding the opacity property with rgba, see snippet below

```css
footer {
  background: url("./starter-code/assets/desktop/image-footer.jpg") rgba(255,255,255,0.4);
}
```

## Author

- Website - [mathieuthiry.fr](https://mathieuthiry.fr/)
- Frontend Mentor - [@promathieuthiry](https://www.frontendmentor.io/profile/promathieuthiry)
- Twitter - [@mathieu_thiry](https://twitter.com/mathieu_thiry)
