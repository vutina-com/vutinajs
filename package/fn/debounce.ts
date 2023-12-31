import isFunction from './isFunction';
import { FullType } from 'utilis/types';
import curry from '../fp/curry';

const debounce = curry(
  <T extends FullType, R>(fn: (...args: T[]) => R, delay: number) => {
    if (!isFunction(fn)) {
      throw new Error('fn must be a function');
    }
    let timer: NodeJS.Timeout | number;
    return (...rest: T[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...rest);
      }, delay);
    };
  },
);

export default debounce;
