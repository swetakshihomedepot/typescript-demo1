// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let message: string = 'Hello World!';
let user: string = "John";
console.log(message + " Hi from " + user); 

appDiv.innerHTML = `<h1>${message}, <br> Hi from  ${user}</h1>`;