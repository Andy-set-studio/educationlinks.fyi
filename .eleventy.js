module.exports = config => {
  // Custom collections
  config.addCollection('homepage', function(collection) {
    return collection.getAll().find(x => x.url === '/');
  });

  // Pass through
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/site.webmanifest');
  config.addPassthroughCopy('./src/browserconfig.xml');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
