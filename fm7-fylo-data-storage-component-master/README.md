
learn to make a triangle ==> https://css-tricks.com/the-shapes-of-css/
opacity with sass

# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Desktop](./images/preview-desktop.png)
![mobile](./images/preview-mobile.png)

### Links

- Solution URL: [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n/hub/fylo-data-storage-with-sass-t_aq6n-Kk)
- Live Site URL: [netlify](https://frontend-mentor-promathieuthiry.netlify.app/fm7-fylo-data-storage-component-master/index.html)

## My process

### Built with

- SASS
- Flexbox

### What I learned

```scss
// apply an opacity to a background with built-in method from SASS
background-color: rgba($secondary-color, .5);
```
```scss
// make a triangle with only css
.triangle {
    border-left: 20px solid transparent;
    border-right: 0px solid #fff;
    border-top: 22px solid #fff;
  }
```
```scss
// Make my code cleaner with mixin
@mixin structure-shadow {
  background-color: $fourth-color;
  box-shadow: 0px 75px 100px -30px rgba(0, 0, 0, 0.24776);
}

.first-element {
  @include structure-shadow;
  ...
}
```

### Useful resources

- [CSS Tricks](https://css-tricks.com/the-shapes-of-css/) - This helped me to make the triangle

## Author

- Website - [mathieuthiry.fr](https://mathieuthiry.fr/)
- Frontend Mentor - [@promathieuthiry](https://www.frontendmentor.io/profile/promathieuthiry)
- Twitter - [@mathieu_thiry](https://twitter.com/mathieu_thiry)