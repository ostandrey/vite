// import './src/02';
// import collect from 'collect.js';
// import './src/assets/03.css';
// //server request, that return css file, convert to js code (generate automaticaly)
// //read and transform css to js

// import styleA from './src/assets/04a.module.css';
// // import { heading as headingFontColor} from './src/assets/04a.module.css';
// import styleB from './src/assets/04b.module.css';

// console.log(collect([1, 3, 3, 7]).avg());

// // console.log(styles); // string of export styles

// // const styleEl = document.createElement('style');
// // styleEl.innerText = styles;

// // document.querySelector('head').append(styleEl);

// console.log(styleA);
// console.log(styleB);

// document.querySelector('.heading').className = `${styleA.heading} ${styleB.heading}`;

// 05

// import './src/assets/05.css'

// 06

import styles from './src/assets/06.module.sass';
console.log(styles);
document.body.className = styles.wrapper;

// 07
import data from './src/assets/07.json';
console.log(data);

// 08
import imageUrl from './src/assets/img/javascript.svg';
console.log(imageUrl);

document.getElementById('image').src = imageUrl;
