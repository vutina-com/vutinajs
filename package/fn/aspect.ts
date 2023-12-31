import { FullType } from '../utilis/types';
import isFunction from './isFunction';

type FuncType = (...args: FullType[]) => unknown;

const aspect = (
  target: FuncType,
  beforeFn?: FuncType,
  afterFn?: FuncType,
): FuncType => {
  if (
    !isFunction(target) ||
    (beforeFn && !isFunction(beforeFn)) ||
    (afterFn && !isFunction(afterFn))
  ) {
    throw new Error('Invalid functions provided');
  }

  return function (...args: FullType[]) {
    if (beforeFn) {
      beforeFn(...args);
    }

    const result = target(...args);

    if (afterFn) {
      afterFn(...args);
    }

    return result;
  };
};

export default aspect;
