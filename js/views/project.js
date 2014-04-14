var ProjectView = (function(Backbone) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        
        events: {
            "click .project_item span": "deleteProj",
            "click .project_item": "selected"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
            this.mediator = options.mediator;
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
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
        },
        
        selected: function() {
            this.mediator.trigger("prj_selected", {
                model: this.model
            });
        },
        
        prj_selected: function(event) {
            if (this.model === event.model) {
                this.$el.addClass("pure-menu-selected");
            } else {
                this.$el.removeClass("pure-menu-selected");
            }
        }
    });
}(Backbone, load_template));