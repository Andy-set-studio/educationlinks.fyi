module.exports = config => {
  // Custom collections
  config.addCollection('homepage', function(collection) {
    return collection.getAll().find(x => x.url === '/');
  });

  config.addCollection('items', function(collection) {
    return collection.getFilteredByGlob('./src/item/*.md').sort(function(a, b) {
      return b.date - a.date;
    });
  });

  // Limit feed items and shuffle them so they are random for
  // each build
  config.addFilter('shuffle', items => {
    let currentIndex = items.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = items[currentIndex];
      items[currentIndex] = items[randomIndex];
      items[randomIndex] = temporaryValue;
    }

    return items;
  });

  // A simple limiter
  config.addFilter('limit', items => {
    return items.slice(0, 20);
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
