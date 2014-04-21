/**
 * Модуль вида списка задач
 *
 * @module tasks.js
 */
var TasksView = (function(Backbone,
                          load_template) {
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
        
        render: function()  {
            return this;
        },
        
        modalShow: function(options) {
            
        },
        
        modalClose: function () { this.$el.empty(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {}
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
        },
        /**
         * Рендеринг вида списка задач
         * 
         * @method render
         * @chainable
         */
        render: function() {
            console.log(this.temlpate);
            
            this.$el.append(this.temlpate);
            
            return this;
        }
    });
    
}(Backbone,
  load_template));