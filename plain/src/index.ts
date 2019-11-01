import { Greeter } from './Greeter';

const greeting = document.createElement('h1');
greeting.textContent = new Greeter("Hello").greet("World");
document.querySelector('body')?.appendChild(greeting);