export function character(sort, arraySort = []) {
    let keys = [];
    for (const key in sort) {
      if (arraySort.indexOf(key) === -1) {
        keys.push(key);
      }
    }
    keys = [...arraySort, ...keys.sort()];
  
    const result = [];
    for (const key of keys) {
      result.push({ key, value: sort[key] });
    }
    return result;
  }