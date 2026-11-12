# Scroll to Top Using JavaScript

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/scroll-to-top-javascript/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable reconstruction of the uploaded 6.8-second tutorial video.

## What is shown in the video

- Title: **Scroll to top using JavaScript**
- A JavaScript function named `topFunction()`.
- Safari scroll reset using `document.body.scrollTop = 0`.
- Chrome, Firefox and Opera scroll reset using `document.documentElement.scrollTop = 0`.
- A fixed red square button at the bottom-right of the page.
- Button dimensions: 50 × 50 px.
- Fixed offsets: 30 px from bottom and right.
- CSS transitions for background color, opacity and visibility.
- The sample webpage scrolls, and the button is shown near the bottom-right when the user scrolls down.

## Readable JavaScript transcribed from the video

```js
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Opera
}
```

## Readable CSS transcribed from the video

```css
#button {
  display: inline-block;
  background-color: #dc3545;
  width: 50px;
  height: 50px;
  line-height: 60px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s, opacity .5s, visibility .5s;
  opacity: 0;
  z-index: 1000;
}

#button i {
  font-size: 32px;
  color: white;
}
```

## Features implemented

- Long sample page to test scrolling.
- Fixed red back-to-top button.
- Button appears after scrolling 100 px.
- Button fades in/out using opacity and visibility.
- Smooth scroll back to page top.
- Safari-compatible and modern browser scroll position reset.
- Responsive layout.
- Accessible button label and keyboard focus.
- No external dependencies.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
scroll-to-top-javascript/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The JavaScript function and the readable CSS declarations above are transcribed from the video. The video does not show the full website source or all visibility-trigger logic; the sample page and scroll listener are completed as a functional reconstruction.
ub.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
