var HomeView = (function(Backbone,
                         _,
                         ProjectsCollection,
                         ProjectView,
                         TasksCollection,
                         TaskView,
                         ProjectsView,
                         load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        
        home_template: load_template("home_template"),
        task_modal: load_template("new_task_modal"),
        
        current_project: null,
        
        events: {
            "click #new_task": "new_task",
            "click #task_modal_close": "task_modal_close",
            "click #task_modal_save": "task_modal_save",
            "click #all_tasks": "all_tasks"
        },
        
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
            // объект медиатора для взаимодейтсвия и прослушивания
            // между объектами видов
            this.mediator = _.extend(Backbone.Events);
            
            this.listenTo(this.tasks, "add", this.addTask);
            
            this.projectsView = new ProjectsView({
                projects: this.projects,
                tasks: this.tasks,
                mediator: this.mediator
            });
        },
        
        render: function() {
            this.$el.append(this.home_template);
            this.$el.append(this.task_modal);
            this.tasks.forEach(this.addTask.bind(this));
            
            this.$("#projects_container").append(this.projectsView.render().$el);
            
            return this;
        },
        
        new_task: function() {
            this.$("#task_modal").toggleClass("hide");
            this.$("#task_modal").focus();
        },
        
        task_modal_close: function() { this.$("#task_modal").addClass("hide"); },
        
        task_modal_save: function() {
            var name,
                description,
                done;
            
            this.$("#task_modal").addClass("hide");
            
            name = this.$("#task_name").val();
            description = this.$("#description").val();
            done = this.$("#done").is(":checked");
            
            this.tasks.create({
                project_id: this.current_project,
                name: name,
                description: description,
                done: done
            });
        },
        
        addTask: function(model) {
            var view = new TaskView({
                model: model,
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.$("#tasks_container").append(view.render().$el);
        },
        
        prj_selected: function(event) {
            this.current_project = (event.model === null) ? null : event.model.id;
        },
        
        all_tasks: function() {
            this.mediator.trigger("prj_selected", { model: null });
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
  load_template));