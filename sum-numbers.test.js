// import { hello, add } from './sum-numbers';
const hello1 = require('./sum-numbers');
const add1 = require('./sum-numbers');

describe('hello', () => {
  it('should output hello', () => {
    expect(hello1.hello('Hello')).toBe('Hello');
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add1.add(1, 2)).toBe(3);
    expect(add1.add(2, 2)).toBe(4);
    expect(add1.add(12, 2)).toBe(14);
    expect(add1.add(-2, 2)).toBe(0);
    expect(add1.add(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(add1.add(2, '2')).toBe(null);
  });
  it('should not add objects', () => {
    expect(add1.add(2, {})).toBe(null);
  });
  it('should not add arrays', () => {
    expect(add1.add([], '2')).toBe(null);
  });
});