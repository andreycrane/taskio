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
        id: "task-modal-container",
        template: load_template("task_modal"),
        
        events: {
            "keyup #task_modal": "modalEscape",
            "click #task_modal_close": "modalClose",
            "click #task_modal_save": "modalSave"
        },
        /**
         * Рендеринг модальной формы
         * 
         * @method render
         * @chainable
         */
        render: function()  {
            return this;
        },
        /**
         * Метод открытия модального окна создания новой задачи
         *
         * @method modalShow
         * @param {Object} options - опции которые передаются коду
         * прослушивающего событие save данной модальной формы
         */
        modalShow: function(options) {
            this.options = options;
            this.$el.append(this.template);
            this.$("#task_modal").focus();
        },
        
        modalClose: function () { this.$el.empty(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            this.options.task.set({
                name: this.$("#task_name").val(),
                done: this.$("#done").is(":checked"),
                description: this.$("#description").val()
            });
            this.modalClose();
            this.trigger("save", this.options);
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
            this.taskModal = new TaskModal();
            // обработка события save нажатия кнопки сохранить модального окна
            this.listenTo(this.taskModal, "save", this.modalSave);
            // прослушивание события добавления новой модели в коллекцию задач
            this.listenTo(this.tasks, "add", this.addTask.bind(this));
        },
        /**
         * Рендеринг вида списка задач
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            this.$el.append(this.taskModal.render().$el);
            
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
            var task = new TaskModel();
            
            this.taskModal.modalShow({
                task: task
            });
        },
        /**
         * Обработчик события save нажатия кнопки "Cохранить" модального окна
         * 
         * @method modalSave
         * @param {Object} options - опции возвращаемые модальным окном
         */
        modalSave: function(options) {
            this.tasks.add(options.task);
            options.task.save();
        },
        /**
         * Поиск задачи по тексту заданному в поиске
         * 
         * @searchTask
         */
        searchTask: function() {
            this.mediator.trigger("search", { q: this.$("#s_query").val() });
        }
    });
    
}(Backbone,
  load_template,
  TaskModel,
  TaskView));