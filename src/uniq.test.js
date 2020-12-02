import { expect, test } from '@jest/globals';
import { uniq } from './uniq';

test('test uniq', () => {
  expect(uniq(['a', 'a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
});
