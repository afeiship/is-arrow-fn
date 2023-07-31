declare var wx: any;

const IsArrowFn = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = IsArrowFn;
}

export default IsArrowFn;
