export const debounce = (callback, delay) => {
  let isDebounced;

  return function (...args) {
    clearTimeout(isDebounced);

    isDebounced = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

export const myThrottle = (func, delay) => {
  let last = 0;

  return function () {
    let args = arguments;
    let now = new Date().getTime(); // current time
    if (now - last < delay) return;
    last = now;
    return func.apply(this, args);
  };
};

export const deepClone = (obj) => {
  let newObj = obj;

  if (typeof obj !== "object") {
    return obj;
  } else {
    newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      newObj[key] = deepClone(obj[key]);
    }

    return newObj;
  }
};

const input = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      f: {
        g: -1,
      },
    },
  },
};
const callback = (element) => element >= 0;

export const deepFilter = (collections, callback) => {
  let result = {};

  function processFilter(result, collection) {
    for (let key in collection) {
      let current = collection[key];

      if (Object.prototype.toString.call(current) === "[object]") {
        let nestedObj = {};
        processFilter(nestedObj, current);

        if (Object.keys(nestedObj).length > 0) {
          result[key] = nestedObj;
        }
      } else if (callback(current)) {
        result[key] = current;
      }
    }
  }

  processFilter(result, collections);

  return result;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 1;

const flat = (arr, n){
  if (n ===0 ) return arr;

  let outArr = [];

  function flatten(arr,n){
    arr.forEach(el => {
      if (Array.isArray(el) && n > 0){
        flatten(el,n-1)
      }else {
        outArr.push(el)
      }
    })
  }
  return flatten(arr,n)
}

