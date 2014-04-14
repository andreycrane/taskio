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
        
        initalize: function(options) {
            options = options || {};
            this.model = options.model;
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
        }
    });
})(Backbone,
   _,
   load_template);