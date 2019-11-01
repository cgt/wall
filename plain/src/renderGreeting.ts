import { Greeter } from './Greeter';

export function renderGreeting() {
  const greeting = document.createElement('h1');
  greeting.textContent = new Greeter("Hello").greet("World");
  document.querySelector('body')?.appendChild(greeting);
}