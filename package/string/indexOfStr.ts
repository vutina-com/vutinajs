import isString from './isString';

const indexOfStr = (source: string, target: string) => {
  if (!isString(source) || !isString(target)) {
    throw new Error('source must be a string');
  }
  if (source.length === 0) return -1;
  return source.indexOf(target);
};

export default indexOfStr;
