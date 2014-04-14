var HomeView = (function(Backbone,
                         _,
                         ProjectsCollection,
                         ProjectView,
                         TasksCollection,
                         TaskView,
                         load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        
        home_template: load_template("home_template"),
        project_modal: load_template("new_project_modal"),
        task_modal: load_template("new_task_modal"),
        
        current_project: null,
        
        events: {
            "click #new_project": "new_project",
            "click #new_task": "new_task",
            "keyup #project_modal": "modal_escape",
            "keyup #task_modal": "modal_escape",
            "click #prj_modal_close": "prj_modal_close",
            "click #task_modal_close": "task_modal_close",
            "click #prj_modal_save": "prj_modal_save",
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
            
            this.listenTo(this.projects, "add", this.addProject);
            this.listenTo(this.tasks, "add", this.addTask);
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
        },
        
        render: function() {
            this.$el.append(this.home_template);
            this.$el.append(this.project_modal);
            this.$el.append(this.task_modal);
            this.projects.forEach(this.addProject.bind(this));
            this.tasks.forEach(this.addTask.bind(this));
            
            return this;
        },
        
        new_project: function() {
            this.$("#project_modal").toggleClass("hide");
            this.$("#prj_modal_name").val("");
            this.$("#project_modal").focus();
        },
        
        new_task: function() {
            this.$("#task_modal").toggleClass("hide");
            this.$("#task_modal").focus();
        },
        
        modal_escape: function(event) {
            if((!this.$("#project_modal").hasClass("hide") ||
                !this.$("#task_modal").hasClass("hide"))&&
               event.keyCode === 27) {
                this.$("#project_modal, #task_modal").addClass("hide");
                
            }
        },
        
        prj_modal_close: function() { this.$("#project_modal").addClass("hide"); },
        task_modal_close: function() { this.$("#task_modal").addClass("hide"); },
        
        prj_modal_save: function() {
            var name;
            
            this.$("#project_modal").addClass("hide");
            name = this.$("#prj_modal_name").val();
            this.projects.create({ name: name });
        },
        
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
        
        addProject: function(model) {
            var view = new ProjectView({
                model: model,
                mediator: this.mediator
            });
            this.$("#projects_list").append(view.render().$el);
        },
        
        addTask: function(model) {
            var view = new TaskView({
                model: model,
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
  load_template));