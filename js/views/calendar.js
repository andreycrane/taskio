var CalendarView = (function(Backbone, load_template) {
    "use strict";
    
    return Backbone.View.extend({
        id: "calendar-view",
        
        template: load_template("calendar_template"),
        
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
} (Backbone, load_template));