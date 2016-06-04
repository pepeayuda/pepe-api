module.exports = function(app) {

  // News
  setTimeout(function() {
    var data = require('../data/news.json');
    var env = process.env.NODE_ENV;
    var PepeNews = app.models.pepe_news;
    if (env !== 'prod') {
      PepeNews.create(data, function(err, userInstance) {
        if (err) {
          console.log(err);
        }
        console.log('News created successfully!');
      });
    }
  }, 2000);

}
