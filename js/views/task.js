var TaskView = (function(Backbone,
                         _,
                         load_template) {
    "use strict";
    
    var task_views_cnt = 0;
    
    return Backbone.View.extend({
        id: function() { return "task-view-" + (task_views_cnt += 1); },
        className: "task",
        task_template: _.template(load_template("task")),
        
        events: {
            "click #delete_task": "deleteTask"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
            this.mediator = options.mediator;
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
            this.listenTo(this.model, "destroy", this.task_destroy);
        },
        
        render: function() {
            this.$el.append(this.task_template({
                name: this.model.get("name"),
                description: this.model.get("description"),
                done: (this.model.get("done")) ? "checked": ""
            }));
            
            return this;
        },
        
        deleteTask: function() {
            this.model.destroy();
            this.remove();
        },
        
        prj_selected: function(event) {
            var project = event.model;
            
            if (project === null ||
                project.id === this.model.get("project_id")) {
                this.$el.fadeIn("fast");
            } else {
                this.$el.fadeOut("fast");
            }
        },
        
        task_destroy: function() { this.remove(); }
    });
})(Backbone,
   _,
   load_template);