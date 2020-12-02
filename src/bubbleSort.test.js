import { expect, test } from '@jest/globals';
import { bubbleSort } from './bubbleSort';

test('test bubbleSort', () => {
  expect(bubbleSort(['a', 'b'])).toEqual(['a', 'b']);
  expect(bubbleSort(['b', 'a'])).toEqual(['a', 'b']);
});
