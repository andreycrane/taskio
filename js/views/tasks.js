/**
 * Модуль вида списка задач
 *
 * @module tasks.js
 */
var TasksView = (function(Backbone,
                          load_template,
                          TaskModel,
                          TaskView) {
    'use strict';
    
    /**
     * Модальное окно задачи
     * 
     * @class TaskModal
     * @constructor
     * @extends Backbone.View
     */
    var TaskModal = Backbone.View.extend({
        el: "body",
        template: _.template(load_template("task_modal")),
        
        events: {
            "keyup #task_modal": "modalEscape",
            "click #task_modal_close": "modalClose",
            "click #task_modal_save": "modalSave",
            "keypress #task_name": "validateName"
        },
        /**
         * Метод открытия модального окна создания новой задачи
         *
         * @method modalShow
         * @param {Object} options - опции которые передаются коду
         * прослушивающего событие save данной модальной формы
         */
        modalShow: function(options) {
            var selector = ["#task_project_id option[value='",
                            options.task.get("project_id"),
                            "']"].join("");
            
            this.options = options;
            this.$el.append(this.template({
                legend: (options.create) ? "Новая задача" : "Редактировать задачу",
                projects: options.projects,
                name: options.task.get("name"),
                create: options.create,
                done: options.task.get("done") ? "checked": "",
                description: options.task.get("description")
            }));
            this.$("#task_modal").focus();
            this.$(selector).attr("selected", "selected");
        },
        
        modalClose: function () { this.$("#task_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            var name =  this.$("#task_name").val();
            
            if (_.isEmpty(name)) {
                this.$("#task_name_err").fadeIn("slow");
            } else {
                this.options.task.set({
                    project_id: this.$("#task_project_id").val(),
                    name: this.$("#task_name").val(),
                    done: this.$("#done").is(":checked"),
                    description: this.$("#description").val()
                });
                this.modalClose();
                this.trigger("save", this.options);
            }
        },
        
        validateName: function() {
            this.$("#task_name_err").fadeOut("slow");
        }
    });
    /**
     * Вид списка задач
     * 
     * @class TasksView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "tasks-view",
        template: load_template("tasks"),
        /**
         * События прослушиваемые видом
         *
         * @property events
         * @type {Object}
         */
        events: {
            "click #new_task": "createTask",
            "click #search_btn": "searchTask"
        },
        /**
         * Инициализция вида
         * 
         * @method initialize
         * @param {Object} options - параметры вида (коллекция проектов, задач)
         */
        initialize: function(options) {
            options = options || {};
            // коллекция проектов ProjectsCollection
            this.projects = options.projects;
            // коллекция задач TasksCollection
            this.tasks = options.tasks;
            // медиатор для взаимодействия с другими видами
            this.mediator = options.mediator;
            // модальное окно для создания новой задачи
            this.taskModal = new TaskModal({ projects: this.projects });
            // обработка события save нажатия кнопки сохранить модального окна
            this.listenTo(this.taskModal, "save", this.modalSave);
            // прослушивание события добавления новой модели в коллекцию задач
            this.listenTo(this.tasks, "add", this.addTask.bind(this));
            // прослушивание события редактирования задачи
            this.listenTo(this.mediator, "editTask", this.editTask.bind(this));
        },
        /**
         * Рендеринг вида списка задач
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            
            this.tasks.forEach(this.addTask.bind(this));
            
            return this;
        },
        /**
         * Обработчик события добавления задачи в коллекцию задач
         * 
         * @method addTask
         * @param 
         */
        addTask: function(task) {
            var view = new TaskView({
                model: task,
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.$("#tasks_list").append(view.render().$el);
        },
        /**
         * Создание новой задачи
         *
         * @method create_task
         */
        createTask: function() {
            var task = new TaskModel({
                name: "",
                description: "",
                done: false
            });
            
            this.taskModal.modalShow({
                task: task,
                projects: this.projects,
                create: true
            });
        },
        /**
         * Обработчик события save нажатия кнопки "Cохранить" модального окна
         * 
         * @method modalSave
         * @param {Object} options - опции возвращаемые модальным окном
         */
        modalSave: function(options) {
            if (options.create) {
                this.tasks.add(options.task);
            }
            
            options.task.save();
        },
        /**
         * Поиск задачи по тексту заданному в поиске
         * 
         * @searchTask
         */
        searchTask: function() {
            this.mediator.trigger("search", { q: this.$("#s_query").val() });
        },
        /**
         * Обработчик события редактирования задачи
         * @method editTask
         * @param {Object} event - объект содержащий модель для редактирования
         */
        editTask: function(event) {
            this.taskModal.modalShow({
                task: event.task,
                projects: this.projects,
                create: false
            });
        }
    });
    
}(Backbone,
  load_template,
  TaskModel,
  TaskView));