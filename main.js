import './src/02';
import collect from 'collect.js';
import './src/assets/03.css';
//server request, that return css file, convert to js code (generate automaticaly)
//read and transform css to js

import styleA from './src/assets/04a.module.css';
// import { heading as headingFontColor} from './src/assets/04a.module.css';
import styleB from './src/assets/04b.module.css';

console.log(collect([1, 3, 3, 7]).avg());

// console.log(styles); // string of export styles

// const styleEl = document.createElement('style');
// styleEl.innerText = styles;

// document.querySelector('head').append(styleEl);

console.log(styleA);
console.log(styleB);

document.querySelector('.heading').className = `${styleA.heading} ${styleB.heading}`;
