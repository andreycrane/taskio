/*
 * Модуль вида списка проектов
 * 
 * @module projects.js
 */

var ProjectsView = (function(Backbone,
                             _,
                             load_template,
                             ProjectView,
                             ProjectModel) {
    'use strict';
    
    var ProjectModal,
        ProjectDeleteModal;
    
    /**
     * Модальная форма проекта
     * 
     * @class ProjectModal
     * @constructor
     * @extends Backbone.View
     */
    ProjectModal = Backbone.View.extend({
        el: "body",
        template: _.template(load_template("project_modal")),
        
        events: {
            "keyup #project_modal": "modalEscape",
            "click #close": "modalClose",
            "click #save": "modalSave",
            "keypress #project_name": "validateName"
        },
        
        modalShow: function(options) {
            this.options = options;
            
            this.$el.append(this.template({
                legend: options.legend,
                name: options.project.get("name"),
                color: options.project.get("color")
            }));
            
            this.$("#project_modal").focus();
        },
        
        modalClose: function() { this.$("#project_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            var val = this.$("#project_name").val();
            
            if (_.isEmpty(val)) {
                this.$("#project_name_err").fadeIn("slow");
            } else {
                this.options.project.set({
                    name: val,
                    color: this.$("#project_color").val()
                });
                this.trigger("save", this.options);
                this.modalClose();
            }
        },
        
        validateName: function() {
            this.$("#project_name_err").fadeOut("medium");
        }
    });
    /**
     * Модальное окно запроса удаления проекта и его дочерних задач.
     * 
     * @class ProjectDeleteModal
     * @constructor
     * @extends Backbone.View
     */
    ProjectDeleteModal = Backbone.View.extend({
        el: "body",
        template: load_template("delete_project_modal"),
        
        events: {
            "keyup #prj_del_modal": "modalEscape",
            "click #prj_del_close": "modalClose",
            "click #prj_btn_delete": "modalDelete"
        },
        
        modalClose: function() { this.$("#prj_del_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalShow: function(options) {
            this.options = options;
            
            this.$el.append(this.template);
            this.$("#prj_del_modal").focus();
        },
        
        modalDelete: function() {
            this.trigger("delete", this.options);
            this.modalClose();
        }
    });
    /**
     * Вид списка проектов
     * 
     * @class ProjectsView
     * @constructor
     */
    return Backbone.View.extend({
        id: "projects-view",
        project_template: load_template("projects"),
        
        events: {
            "click #create_project": "create_project",
            "click #all_tasks": "allTasks"
        },
        /**
         * Инициализация вида
         * 
         * @method initialize
         * @param {Object} options параметры вида
         */
        initialize: function(options) {
            options = options || {};
            // коллекция с моделями проектов
            this.projects = options.projects;
            // коллекция с моделями задач
            this.tasks = options.tasks;
            // медиатор для передачи событий между видами
            this.mediator = options.mediator;
            // модальное окно для работы с проектом
            this.projectModal = new ProjectModal();
            // модальное окно для запроса удаления проекта
            this.projectDelModal = new ProjectDeleteModal(); 
            // подписываемся на прослушивание события save
            // модального окна
            this.listenTo(this.projectModal, "save", this.modalSave);
            // событие delete модального окна удаления проекта
            this.listenTo(this.projectDelModal, "delete", this.projectDelete.bind(this));
            // событие добавления проекта в коллекцию
            this.listenTo(this.projects, "add", this.addProject.bind(this));
            // событие изменения модели проекта
            this.listenTo(this.mediator, "editProject", this.edit_project);
            // событие удаления модели проекта
            this.listenTo(this.mediator, "deleteProject", this.deleteModal);
            // событие выбора проекта в качестве фильтра
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
        },
        /**
         * Метод рендеринга вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            // рендерим шаблон вида
            this.$el.append(this.project_template);
            // рендерим виды пунктов проектов
            this.projects.forEach(this.addProject.bind(this));
            
            return this;
        },
        /**
         * Создания нового проекта
         * 
         * @method create_project
         */
        create_project: function() {
            this.projectModal.modalShow({
                legend: "Новый проект",
                project: new ProjectModel({ name: "" }),
                create: true
            });
        },
        /**
         * Обработчик события редактирования модели проекта.
         * Запускает модальное окно для редатктирования.
         * 
         * @method edit_project
         * @param {ProjectModel} project
         */
        edit_project: function(project) {
            this.projectModal.modalShow({
                legend: "Переименовать проект",
                project: project,
                create: false
            });
        },
        /**
         * Обработка события save модального окна проекта
         * 
         * @method save
         * @param {Object} options
         */
        modalSave: function(options) {
            if (options.create) {
                this.projects.add(options.project);
            } 
            options.project.save();
        },
        /**
         * Обработчик добавления новой модели проекта в коллекцию
         *
         * @method addProject
         * @param {ProjectModel} project - экземпляр модели проекта
         */
        addProject: function(project) {
            var projectView = new ProjectView({
                model: project,
                mediator: this.mediator
            });
            
            this.$("#projects_list").append(projectView.render().$el);
        },
        /**
         * Обработчик события удаления модели проекта. Выводит модальное окно
         * с вопросом удалять или нет проект и его дочерние задачи.
         * 
         * @method deleteModal
         * @param {Object} event - событие содержащее ссылку на модель проекта
         */
        deleteModal: function(event) {
            this.projectDelModal.modalShow({ project: event.project });
        },
        /**
         * Обработчик положительного ответа модального окна запроса на удаление
         * проекта и его дочерних задач.
         * 
         * @method projectDelete
         */
        projectDelete: function(event) {
            var project = event.project,
                projectTasks;
            
            projectTasks = this.tasks.filter(function(task) {
                return task.get("project_id") === project.id;
            });
            
            projectTasks.forEach(function(task) {
                task.destroy(projectTasks);
            });
            
            project.destroy();
        },
        /**
         * Посылка сигнала видам задач (TaskView's) сигнала о том что выбран
         * фильтр 'Все задачи'
         * 
         * @method allTasks
         */
        allTasks: function() {
            this.mediator.trigger("prj_selected", { model: null });
        },
        /**
         * Обработка события установки проекта в качестве фильтра
         * 
         * @method prj_selected
         */
        prj_selected: function(event) {
            if (event.model !== null) {
                this.$("#all_tasks").removeClass("selected");
            } else {
                this.$("#all_tasks").addClass("selected");
            }
        },
        /**
         * Перегрузка метода удаления вида
         * @method remove
         */
        remove: function() {
            this.projectModal.undelegateEvents();
            this.projectDelModal.undelegateEvents();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
}(Backbone,
  _,
  load_template,
  ProjectView,
  ProjectModel));
