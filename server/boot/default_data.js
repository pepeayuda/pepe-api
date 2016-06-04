module.exports = function(app) {

  var newsData = require('../data/news.json');
  var servicesTypeData = require('../data/serviceType.json');
  var ServicesData = require('../data/services.json');
  var env = process.env.NODE_ENV;

  var PepeNews = app.models.pepe_news;
  var ServicesType = app.models.servicesType;
  var Services = app.models.service;

  if (env !== 'prod') {
    PepeNews.create(newsData, function(err, userInstance) {
      if (err) {
        console.log(err);
      }
      console.log('News created successfully!');
    });
    ServicesType.create(servicesTypeData, function(err, userInstance) {
      if (err) {
        console.log(err);
      }
      console.log('TypeServices created successfully!');
    });
    Services.create(ServicesData, function(err, userInstance) {
      if (err) {
        console.log(err);
      }
      console.log('Services created successfully!');
    });
  }

  // Services



}
