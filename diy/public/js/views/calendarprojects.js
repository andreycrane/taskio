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
        
        events: {
            "click": "projectSelected"
        },
        
        initialize: function(options) {
            options = options || {};
            
            this.mediator = options.mediator;
            this.project = options.project;
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
        },
        /**
         * Рендеринг вида
         * 
         * @method render
         */
        render: function() {
            this.$el.append(this.project.get("name"))
                    .prepend("<div></div>")
                    .children("div")
                    .css("background-color", this.project.get("color"));
            
            return this;
        },
        
        projectSelected: function() {
            this.mediator.trigger("proj_selected", { project: this.project });
        },
        
        proj_selected: function(options) {
            if (options.project === this.project) {
                this.$el.addClass("selected");
            } else {
                this.$el.removeClass("selected");
            }
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
        template: load_template("calendar_projects"),
        
        events: {
            "click #all_projects": "allProjSelected"
        },
        /**
         * Инициализация вида
         *
         * @method initialize
         * @param {Object} options параметры
         */
        initialize: function(options) {
            options = options || {};
            
            this.mediator = options.mediator;
            this.projects = options.projects;
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
        },
        /**
         * Рендеринг вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            this.$el.append(this.template);
            
            this.projects.forEach(function(project) {
                var projectView = new ProjectView({
                    project: project,
                    mediator: that.mediator
                });
                
                that.$el.append(projectView.render().$el);
            });
            
            return this;
        },
        
        allProjSelected: function() {
            this.mediator.trigger("proj_selected", { project: null });
        },
        
        proj_selected: function(options) {
            if (options.project === null) {
                this.$("#all_projects").addClass("selected");
            } else {
                this.$("#all_projects").removeClass("selected");
            }
        }
    });
}(Backbone, load_template));