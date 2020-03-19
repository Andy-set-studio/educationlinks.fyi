const categories = require('./categories.js');

module.exports = {
  getCategory(slug) {
    let response = categories.tags.find(x => x.slug === slug);

    if (!response) {
      response = categories.ages.find(x => x.slug === slug);
    }

    return response;
  }
};
