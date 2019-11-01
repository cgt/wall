/**
 * @jest-environment jsdom
 */

import { renderGreeting } from './renderGreeting';

describe('DOM integration', () => {
  it('renders greeting in DOM', () => {
    renderGreeting();
    let h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1!.textContent).toBe("Hello, World!");
  });
});