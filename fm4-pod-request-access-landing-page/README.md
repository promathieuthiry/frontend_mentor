# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![Desktop](./assets/preview/desktop-preview.png)
![mobile](./assets/preview/mobile-preview.png)

### Links

- Solution URL: [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG/hub/landing-page-using-sass-qxqqzQ5zh)
- Live Site URL: [netlify](https://frontend-mentor-promathieuthiry.netlify.app/fm4-pod-request-access-landing-page/index.html)

## My process

### Built with

- SASS
- Flexbox

### What I learned

Validate an email with regex
To see how you can add code snippets, see below:

```js
function ValidateEmail(inputText, mobile) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
```

Erase what the user has written and hide the error message. To do so, I select the class of the input on the event focus and set the value at empty and the opacity of the error message at 0.
```js
function Erase() {
        document.getElementsByClassName('input-email')[0].value = ""
        return document.getElementById("email-error-message").style.opacity = "0";
}
```

Make my code even more DRY thanks to the "extension" powered by SASS

```scss
.input-template{
  border: none;
  ...
}

.input-email {
@extend .input-template;
height: 56px;
...
}
```

## Author

- Website - [mathieuthiry.fr](https://mathieuthiry.fr/)
- Frontend Mentor - [@promathieuthiry](https://www.frontendmentor.io/profile/promathieuthiry)
- Twitter - [@mathieu_thiry](https://twitter.com/mathieu_thiry)
