import { add } from '../client/index.js';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
// runs in the terminal when you type npm run test.only
