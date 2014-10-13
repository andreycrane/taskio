var ApplicationView = (function(Backbone,
                                HomeView,
                                CalendarView,
                                MigrationView,
                                SettingsView) {
    'use strict';
    
    var ApplicationView = Backbone.View.extend({
        currentView: null,
         
        events: {
            "click #home": "home",
            "click #calendar": "calendar",
            "click #migration": "migration",
            "click #settings": "settings"
        },
        
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
            this.currentView.$("#calendar-container").fullCalendar('render');
        },
        
        migration: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new MigrationView();
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
   MigartionView,
   SettingsView));
