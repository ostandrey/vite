import './src/02';
import collect from 'collect.js';
import './src/assets/03.css';
//server request, that return css file, contsin js code (generate automaticaly)
//read and transform css to js

console.log(collect([1, 3, 3, 7]).avg());

console.log(styles); // string of export styles

// const styleEl = document.createElement('style');
// styleEl.innerText = styles;

// document.querySelector('head').append(styleEl);
