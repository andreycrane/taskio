var ProjectView = (function(Backbone) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        
        events: {
            "click .project_item span": "delProjModal",
            "click .project_item": "selected"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
            this.mediator = options.mediator;
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
            this.on("deleteProj", this.deleteProj);
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
        
        delProjModal: function(event) {
            event.stopPropagation();
            this.mediator.trigger("del_proj_modal", { view: this });
        },
        
        deleteProj: function(event) {
            var tasks = event.collection,
                projectTasks,
                that = this;
            
            projectTasks = tasks.filter(function(task) {
                return task.get("project_id") === that.model.id;
            });
            
            projectTasks.forEach(function(task) {
                task.destroy();
            });
            
            this.model.destroy();
            this.remove();
        },
        
        selected: function(event) {
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