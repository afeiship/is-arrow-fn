declare var wx: any;

// https://stackoverflow.com/questions/28222228/javascript-es6-test-for-arrow-function-built-in-function-regular-function

const FN_RE = /^([^{=]+|\(.*\)\s*)?=>/;
const BLANK_RE = /\s/;

const isArrowFn = (f) => {
  if (typeof f !== 'function') return false;
  return FN_RE.test(f.toString().replace(BLANK_RE, ''));
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = isArrowFn;
}

export default isArrowFn;
