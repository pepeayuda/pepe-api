module.exports = function(app) {

  var newsData = require('../data/news.json');
  var ServicesData = require('../data/services.json');
  var env = process.env.NODE_ENV;

  var PepeNews = app.models.pepe_news;
  var PepeService = app.models.pepe_service;

  if (env !== 'prod') {
    PepeNews.create(newsData, function(err, userInstance) {
      if (err) {
        console.log(err);
      }
      console.log('News created successfully!');
    });
    PepeService.create(ServicesData, function(err, userInstance) {
      if (err) {
        console.log(err);
      }
      console.log('Services created successfully!');
    });
  }

  // Services



}
