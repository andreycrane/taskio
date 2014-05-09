var ApplicationView = (function(Backbone,
                                HomeView,
                                CalendarView,
                                ReportView,
                                SettingsView) {
    'use strict';
    
    var ApplicationView = Backbone.View.extend({
        currentView: null,
        
        events: {
            "click #menu": "showMenu",
            "click #home": "home",
            "click #calendar": "calendar",
            "click #report": "report",
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
        
        calendar: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new CalendarView();
            this.$('.content-container').append(this.currentView.render().el);
        },
        
        report: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new ReportView();
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
   CalendarView,
   ReportView,
   SettingsView));