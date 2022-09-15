// Import stylesheets
import './style.css';
import { startCase } from 'lodash';
import _ from 'lodash';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Just modify what you want

const playground: HTMLElement = document.getElementById('playground');
const phrase: string = `this is a dummy phrase that i am using to test lodash`;

playground.innerHTML = startCase(phrase);
