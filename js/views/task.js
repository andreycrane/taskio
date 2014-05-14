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
            "change #t_done": "changeDone",
            "click #toggle_details": "toggleDetails"
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
            var taskDatetime = "";
            
            if (this.model.get("start_datetime")
                && this.model.get("end_datetime")) {
                taskDatetime = [
                    this.datetimeString("start_datetime"),
                    this.datetimeString("end_datetime")
                ].join(" - ");
            }
            
            this.$el.append(this.task_template({
                name: this.model.get("name"),
                description: this.model.get("description"),
                done: this.model.get("done") ? "checked": "",
                created: this.datetimeString("created"),
                taskDatetime: taskDatetime,
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
                description_r, // результат поиска в описании задачи
                r; // регулярное выражение искомое в строке
            
            this.unhighlight();
            // если поиск по пустой строке показывает задачу
            if (event.q === "") {
                this.$el.fadeIn("fast");
                return;
            }
            
            r = new RegExp(event.q, "ig");
            
            name_r = this.model.get("name").search(r);
            description_r = this.model.get("description").search(r);
            
            if((name_r === -1) && (description_r === -1)) {
                // если совпадения не найдены скрываем строчку задания
                this.$el.fadeOut("fast");
            } else {
                this.$el.fadeIn("fast");
                this.highlight(r)
            }
        },
        /**
         * Подсветка указанного участка текста в задании
         *
         * @method highlight
         * @param {RegExp} r - регулярное выражение искомого текста
         */
        highlight: function(r) {
            // строка подсвечиваемая в поиске
            var highl = '<span class="highlight">$&</span>';
            
            this.$("#t_name").html(this.model.get("name").replace(r, highl));
            this.$("#t_description").html(this.model.get("description").replace(r, highl));
        },
        /**
         * Снятие подсветки с текста в задаче
         * 
         * @method unhighlight
         */
        unhighlight: function() {
            this.$("#t_name").text(this.model.get("name"));
            this.$("#t_description").text(this.model.get("description"));
        },
        /**
         * Обработка события изменения модели
         * 
         * @method changeTask
         */
        changeTask: function() {
            this.project = this.projects.get(this.model.get("project_id"));
            
            if (this.project) {
                this.$("#t_project").text(this.project.get("name"));
            }
            
            this.$("#t_name").text(this.model.get("name"));
            this.$("#t_description").text(this.model.get("description"));
            this.$("#t_done").attr("checked", this.model.get("done"));
        },
        /**
         * Обработка события изменения состояния флажка завершенности задачи
         *
         * @method changeDone
         * @param {Object} event объект jQuery-события
         */
        changeDone: function() {
            this.model.set({
                "done": this.$("#t_done").is(":checked")
            });
            this.model.save();
        },
        /**
         * Возвращает текстовое представление даты и времени
         * 
         * @method datetimeString
         * @param {String} field - поле модели из которого извлекается дата и время
         */
        datetimeString: function(field) {
            var d = new Date();
            d.setTime(this.model.get(field));
            
            return [
                ("00" + d.getDate()).slice(-"00".length),
                ".",
                ("00" + (d.getMonth() + 1)).slice(-"00".length),
                ".",
                d.getFullYear(),
                " ",
                ("00" + d.getHours()).slice(-"00".length),
                ":",
                ("00" + d.getMinutes()).slice(-"00".length)
            ].join("");
        },
        /**
         * Отображение или скрытие детальной информации о задаче
         * 
         * @method toggleDetails
         */
        toggleDetails: function() { this.$("#t_details").toggle(); }
    });
})(Backbone,
   _,
   ProjectsCollection,
   load_template);