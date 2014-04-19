/**
 * Модуль вида списка проектов
 * 
 * @module projects.js
 */

var ProjectsView = (function(Backbone,
                             _,
                             load_template,
                             ProjectView) {
    'use strict';
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
            "clicj #create_project": "create_project"
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
            // медиатор для передачи событий между видами
            this.mediator = options.mediator;
        },
        /**
         * Метод рендеринга вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            this.$el.append(this.project_template);
            this.projects.forEach(function(project) {
                var projectView = new ProjectView({
                    model: project,
                    mediator: that.mediator
                });
                
                that.$("#projects_list").append(projectView.render().$el);
            });
            
            return this;
        },
        /**
         * Создания нового проекта
         * 
         * @method create_project
         */
        create_project: function() {
            
        }
    });
    
}(Backbone,
  _,
  load_template,
  ProjectView));