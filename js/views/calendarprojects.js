/**
 * Модуль списка проектов на странице календаря
 *
 * @module calendarprojects.js
 */
var CalendarProjects = (function(Backbone, load_template) {
    "use strict";
    
    var ProjectView, projectViewsCnt = 0;
    
    ProjectView = Backbone.View.extend({
        id: function() { return "project-view-" +  (projectViewsCnt +=1 ); },
        
        initialize: function(options) {
            options = options || {};
            this.project = options.project;
        },
        /**
         * Рендеринг вида
         * 
         * @method render
         */
        render: function() {
            
            this.$el.append([
                "<li>",
                this.project.get("name"),
                "</li>"
            ].join(""));
            
            return this;
        }
    });
    /**
     * Вид списк проектов на странице календаря
     *
     * @class CalendarProjects
     * @extends Backbone.View
     * @constructor
     */
    return Backbone.View.extend({
        id: "projects-view",
        /**
         * Инициализация вида
         *
         * @method initialize
         * @param {Object} options параметры
         */
        initialize: function(options) {
            options = options || {};
            
            this.projects = options.projects;
        },
        /**
         * Рендеринг вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            this.projects.forEach(function(project) {
                var projectView = new ProjectView({
                    project: project
                });
                
                that.$el.append(projectView.render().$el);
            });
            
            return this;
        }
    });
}(Backbone, load_template));