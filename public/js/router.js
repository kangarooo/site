define(['jquery', 'underscore', 'backbone', 'views/default', 'views/links'],
function ($, _, Backbone, DefaultView, LinksView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var linksView = new LinksView();

    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    siteRouter.on('route:defaultAction', function(){
      defaultView.render('main');
      linksView.render('main');
    });
    siteRouter.on('route:aboutAction', function(){
      defaultView.render('about');
      linksView.render('about');
    });
    siteRouter.on('route:contactAction', function(){
      defaultView.render('contact');
      linksView.render('contact');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
