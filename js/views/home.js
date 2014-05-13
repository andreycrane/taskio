var HomeView = (function(Backbone,
                         _,
                         ProjectsCollection,
                         ProjectView,
                         TasksCollection,
                         TaskView,
                         ProjectsView,
                         TasksView,
                         load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        home_template: load_template("home_template"),
        
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
            // объект медиатора для взаимодейтсвия и прослушивания событий
            // между объектами видов
            this.mediator = _.extend({}, Backbone.Events);
            
            this.projectsView = new ProjectsView({
                projects: this.projects,
                tasks: this.tasks,
                mediator: this.mediator
            });
            
            this.tasksView = new TasksView({
                tasks: this.tasks,
                projects: this.projects,
                mediator: this.mediator
            });
        },
        
        render: function() {
            this.$el.append(this.home_template);
            
            this.$("#projects_container").append(this.projectsView.render().$el);
            this.$("#tasks_container").append(this.tasksView.render().$el);
            
            return this;
        },
        /**
         * Перегрузка базового метода удаления вида из страницы
         * 
         * @method remove
         */
        remove: function() {
            this.projectsView.remove();
            this.tasksView.remove();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
    return HomeView;
}(Backbone,
  _,
  ProjectsCollection,
  ProjectView,
  TasksCollection,
  TaskView,
  ProjectsView,
  TasksView,
  load_template));