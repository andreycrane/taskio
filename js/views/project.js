var ProjectView = (function(Backbone) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        
        events: {
            "click .project_item": "deleteProj"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
        },
        
        render: function() {
            this.$el.append(["<a class='project_item'>",
                             this.model.get("name"),
                             "<span>",
                             "×",
                             "</span>",
                             "</a>"].join(""));
            
            return this;
        },
        
        deleteProj: function() {
            this.model.destroy();
            this.remove();
        }
    });
}(Backbone, load_template));