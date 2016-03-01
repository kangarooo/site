define(['jquery', 'underscore', 'backbone', 'views/default'],
function ($, _, Backbone, DefaultView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    siteRouter.on('route:defaultAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
    });
    siteRouter.on('route:aboutAction', function(){
      console.log('about');
    });
    siteRouter.on('route:contactAction', function(){
      console.log('contact');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
