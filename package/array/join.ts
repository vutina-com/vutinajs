import isArray from './isArray';
import { FullType } from '../utilis/types';

const join = <T extends FullType>(arr: T[], separator: string) => {
  if (!isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (arr.length === 0) return '';
  return arr.join(separator);
};

export default join;
