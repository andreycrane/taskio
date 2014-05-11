var ProjectView = (function(Backbone,
                            load_template) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        template: _.template(load_template("project")),
        
        events: {
            "click .project_item span.del": "deleteClick",
            "click .project_item span.edit": "editClick",
            "click": "selected"
        },
        
        initialize: function(options) {
            options = options || {};
            this.project = options.model;
            this.tasks = options.task;
            this.mediator = options.mediator;
            
            this.listenTo(this.project, "change", this.projectChange);
            this.listenTo(this.project, "destroy", this.projectDestroy);
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
        },
        
        render: function() {
            this.$el.append(this.template({
                name: this.project.get("name"),
                color: this.project.get("color")
            }));
            
            return this;
        },
        /**
         * Обработка нажатия кнопки удаления проекта.
         * Передает сигнал родительскому виду на запрос удаления.
         *
         * @method deleteClick
         */
        deleteClick: function(event) {
            event.stopPropagation();
            this.mediator.trigger("deleteProject", { project: this.project });
        },
        /**
         * Обработка нажатия кнопки редактирования проекта.
         * Посылает сигнал родительскому виду.
         *
         * @method editClick
         */
        editClick: function(event) {
            event.stopPropagation();
            this.mediator.trigger("editProject", this.project);
        },
        
        selected: function(event) {
            this.mediator.trigger("prj_selected", {
                model: this.project
            });
        },
        
        prj_selected: function(event) {
            if (this.project === event.model) {
                this.$el.addClass("selected");
            } else {
                this.$el.removeClass("selected");
            }
        },
        /**
         * Обработчик изменения модели проекта
         * 
         * @method projectChange
         */
        projectChange: function() {
            this.$("span.name").text(this.project.get("name"));
            this.$("span.color").css({
                "background-color": this.project.get("color")
            });
        },
        /**
         * Обработчик удаления модели проекта
         *
         * @method projectRemove
         */
        projectDestroy: function() { this.remove(); }
    });
}(Backbone, load_template));