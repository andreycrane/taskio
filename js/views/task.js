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
            "click #edit_task": "editTask"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
            this.projects = options.projects;
            this.mediator = options.mediator;
            this.project = this.projects.get(this.model.get("project_id"));
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected.bind(this));
            this.listenTo(this.mediator, "search", this.searchProject);
            this.listenTo(this.model, "change", this.changeTask);
            
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
            this.mediator.trigger("editTask", { task: this.model });
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
        
        task_destroy: function() { this.remove(); },
        
        prj_name_changed: function() {
            this.$("#t_project").text(this.project.get("name"));
        },
        /**
         * Обработка поиска задачи
         * 
         * @searchProject
         * @param {Object} event - объект содержащий искомый текст
         */
        searchProject: function(event) {
            var name_r, // результат поиска в имени задачи
                description_r; // результат поиска в описании задачи
            
            // если поиск по пустой строке показывает задачу
            if (event.q === "") {
                this.$el.fadeIn("fast");
                return;
            }
            
            name_r = this.model.get("name").search(event.q);
            description_r = this.model.get("description").search(event.q);
            
            if((name_r === -1) && (description_r === -1)) {
                // если совпадения не найдены скрываем строчку задания
                this.$el.fadeOut("fast");
            } else {
                
            }
        },
        /**
         * Обработка события изменения модели
         * 
         * @method changeTask
         */
        changeTask: function() {
            this.$("#t_name").text(this.model.get("name"));
            this.$("#t_description").text(this.model.get("description"));
            this.$("#t_done").attr("checked", this.model.get("done"));
        }
    });
})(Backbone,
   _,
   ProjectsCollection,
   load_template);