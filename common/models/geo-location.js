module.exports = function(GeoLocation) {
  // Google Maps API has a rate limit of 10 requests per second
  // Seems we need to enforce a lower rate to prevent errors
  var lookupGeo = require('function-rate-limit')(5, 1000, function() {
    var geoService = GeoLocation.app.dataSources.geo;
    geoService.geocode.apply(geoService, arguments);
  });


  GeoLocation.afterRemote('**', function(ctx, user, next) {
    var body = ctx.req.body;
    if (body &&
      body.preferences &&
      body.preferences.street &&
      body.preferences.city &&
      body.preferences.zipcode) {

      console.log(body);
      var loc = body.preferences;

      // geo code the address
      lookupGeo(loc.street, loc.city, loc.zipcode,
        function(err, result) {
          if (result && result[0]) {
            body.geo = result[0];
            console.log(body.geo);
            next();
          } else {
            next(new Error('could not find location'));
          }
        });

    } else {
      next();
    }

  });
};
