
define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/link.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.links'),
    data: {},

    initialize: function() {
      this.data = {
        main: {
          links: 'Lorem ipsum 1'
        },
        about: {
          links: 'Lorem ipsum 2'
        },
        contact: {
          links: 'Lorem ipsum 3'
        }
      };
    },

    render: function(pageType){
      var compiledTemplate = Mustache.render( pageTemplate, this.data[pageType] );
      this.$el.html( compiledTemplate );
    }
  });
  return DefaultView;
});
