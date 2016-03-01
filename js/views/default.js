define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/page.mustache'], function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main'),
    data: {},

    initialize: function() {
      this.data = {
        main: {
          title: 'main title',
          content: 'Lorem ipsum 1'
        },
        about: {
          title: 'about title',
          content: 'Lorem ipsum 2'
        },
        contact: {
          title: 'contact title',
          content: 'Lorem ipsum 3'
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
