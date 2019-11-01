import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('greets with given greeting', () => {
    const greeter = new Greeter("Hi");
    const greeting = greeter.greet("Alice");
    expect(greeting).toBe("Hi, Alice!");
  });
});