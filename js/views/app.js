var ApplicationView = (function(Backbone,
                                HomeView,
                                NewsView,
                                SettingsView) {
    'use strict';
    
    var ApplicationView = Backbone.View.extend({
        currentView: null,
        
        events: {
            "click #menu": "showMenu",
            "click #home": "home",
            "click #news": "news",
            "click #settings": "settings"
        },
        
        initialize: function() {},
        
        showMenu: function() { this.$el.addClass("animate modalview"); },
        
        home: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new HomeView();
            this.$('.content-container').append(this.currentView.render().el);
        },
        
        news: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new NewsView();
            this.$('.content-container').append(this.currentView.render().el);
        },
        
        settings: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new SettingsView();
            this.$('.content-container').append(this.currentView.render().el);
        }
    });
    
    return ApplicationView;
} (Backbone,
   HomeView,
   NewsView,
   SettingsView));