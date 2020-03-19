// Import data files
// const site = require('./src/_data/site.json');

module.exports = config => {
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
