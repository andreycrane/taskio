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
            "click #delete_task": "deleteTask",
            "click #edit_task": "editTask",
            "click #save_task": "saveTask",
            "click #close_edit": "closeEdit"
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
        
        editTask: function() {
            var taskName_el,
                taskDescription_el,
                taskDone_el,
                name_input,
                descr_textarea;
            
            taskDone_el = this.$("#t_done");
            taskName_el = this.$("#t_name");
            taskDescription_el = this.$("#t_description");
            
            name_input = [
                "<input id='t_name' type='text' ",
                "value='",
                taskName_el.html(),
                "' />"
            ].join("");
            
            descr_textarea = [
                "<textarea id='t_description'>",
                taskName_el.html(),
                "</textarea>"
            ].join("");
            
            taskDone_el.attr("disabled", false);
            taskName_el.replaceWith(name_input);
            taskDescription_el.replaceWith(descr_textarea);
            
            this.$("#save_task, #close_edit").show();
        },
        
        saveTask: function() {
            this.model.save({
                "name": this.$("#t_name").val(),
                "description":  this.$("#t_description").val(),
                "done": this.$("#t_done").is(':checked')
            });
            
            this.closeEdit();
        },
        
        closeEdit: function() {
            var taskDone_el,
                taskName_el,
                taskDescription_el,
                name_span,
                description_p;
            
            taskDone_el = this.$("#t_done");
            taskName_el = this.$("#t_name");
            taskDescription_el = this.$("#t_description");
            
            name_span = [
                "<span id='t_name'>",
                this.model.get("name"),
                "</span>"
            ].join("");
            
            description_p = [
                "<p id='t_description'>",
                this.model.get("description"),
                "</p>"
            ].join("");
            
            taskDone_el.attr("disabled", true);
            taskName_el.replaceWith(name_span);
            taskDescription_el.replaceWith(description_p);
            
            this.$("#save_task, #close_edit").hide();
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