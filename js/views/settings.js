var SettingsView = (function(Backbone, load_template) {
    "use strict";
    
    var SettingsView = Backbone.View.extend({
        id: "settings-view",
        
        template: load_template("settings_template"),
        
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
    return SettingsView;
} (Backbone, load_template));