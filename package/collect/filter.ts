import isArray from '../array/isArray';

const filter = <T, U extends T[]>(
  predicate: (item: T, index: number) => boolean,
  list: U,
) => {
  if (!isArray(list)) {
    throw new Error('list must be an array');
  }
  if (list.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i)) {
      result.push(list[i]);
    }
  }

  return result;
};

export default filter;
