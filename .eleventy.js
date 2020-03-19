module.exports = config => {
  // Custom collections
  config.addCollection('homepage', function(collection) {
    return collection.getAll().find(x => x.url === '/');
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
