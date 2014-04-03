var ProjectView = (function(Backbone) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
        },
        
        render: function() {
            this.$el.html(this.model.get("name"));
            
            return this;
        }
    });
}(Backbone, load_template));