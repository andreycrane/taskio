var HomeView = (function(Backbone, load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        template: load_template("home_template"),
        
        initialize: function() { },
        
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
    return HomeView;
}(Backbone, load_template));