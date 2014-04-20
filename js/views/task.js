var TaskView = (function(Backbone,
                         _,
                         ProjectsCollection,
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
            this.projects = options.projects;
            this.mediator = options.mediator;
            this.project = this.projects.get(this.model.get("project_id"));
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
            this.listenTo(this.model, "destroy", this.task_destroy);
            
            if (this.project) {
                this.listenTo(this.project, "change", this.prj_name_changed);
            }
        },
        
        render: function() {
            this.$el.append(this.task_template({
                name: this.model.get("name"),
                description: this.model.get("description"),
                done: this.model.get("done") ? "checked": "",
                project: this.project ? this.project.get("name") : "Вне проекта"
            }));
            
            return this;
        },
        
        deleteTask: function() {
            this.model.destroy();
            this.remove();
        },
        
        editTask: function() {
            var taskProject_el,
                taskName_el,
                taskDescription_el,
                taskDone_el,
                project_select,
                name_input,
                descr_textarea,
                that = this;
                
            taskProject_el = this.$("#t_project");
            taskDone_el = this.$("#t_done");
            taskName_el = this.$("#t_name");
            taskDescription_el = this.$("#t_description");
            
            project_select = [
                "<select id='t_project'>",
                "<option " + (this.project ? "selected" : ""),
                " value='null'>Вне проекта</option>"
            ];
            
            this.projects.forEach(function(project) {
                project_select.push([
                    "<option ",
                    ((that.project === project) ? "selected" : ""),
                    " value='",
                    project.id,
                    "' >",
                    project.get("name"),
                    "</option>"
                ].join(""));
            });
            
            project_select.push("</select>");
            
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
            taskProject_el.replaceWith(project_select.join(""));
            
            this.$("#save_task, #close_edit").show();
        },
        
        saveTask: function() {
            this.stopListening(this.project);
            this.project = this.projects.get(this.$("#t_project").val());
            
            if (this.project) {
                this.listenTo(this.project, "change", this.prj_name_changed);
            }
            
            this.model.save({
                "project_id": this.project ? this.project.id : null,
                "name": this.$("#t_name").val(),
                "description":  this.$("#t_description").val(),
                "done": this.$("#t_done").is(':checked')
            });
            
            this.closeEdit();
        },
        
        closeEdit: function() {
            var taskProject_el,
                taskDone_el,
                taskName_el,
                taskDescription_el,
                project_span,
                name_span,
                description_p;
            
            taskProject_el = this.$("#t_project");
            taskDone_el = this.$("#t_done");
            taskName_el = this.$("#t_name");
            taskDescription_el = this.$("#t_description");
            
            project_span = [
                "<span id='t_project'>",
                this.project ? this.project.get("name") : "Вне проекта",
                "</span>"
            ].join("");
            
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
            
            taskProject_el.replaceWith(project_span);
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
        
        task_destroy: function() { console.log("1"); this.remove(); },
        
        prj_name_changed: function() {
            this.$("#t_project").text(this.project.get("name"));
        }
    });
})(Backbone,
   _,
   ProjectsCollection,
   load_template);