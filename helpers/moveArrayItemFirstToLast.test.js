import deepFreeze from 'deep-freeze';
import moveArrayItemFirstToLast from './moveArrayItemFirstToLast';

describe('moveArrayItemFirstToLast', () => {
  it('shuffles an array so the first item is moved to the end', () => {
    expect(moveArrayItemFirstToLast(deepFreeze([1, 2, 3]))).toEqual([2, 3, 1]);
    expect(moveArrayItemFirstToLast(deepFreeze([2, 3, 1]))).toEqual([3, 1, 2]);
  });
});
