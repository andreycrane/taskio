var HomeView = (function(Backbone,
                         ProjectsCollection,
                         ProjectView,
                         TasksCollection,
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
            "click #task_modal_save": "task_modal_save"
        },
        
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection({ aync: false });
            this.projects.fetch({ async: false });
            
            this.listenTo(this.projects, "add", this.addProject);
            this.listenTo(this.tasks, "add", this.addTask);
        },
        
        render: function() {
            this.$el.append(this.home_template);
            this.$el.append(this.project_modal);
            this.$el.append(this.task_modal);
            this.projects.forEach(this.addProject.bind(this));
            
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
            done = this.$("#description").val();
            
            this.tasks.create({
                project_id: this.current_project,
                name: name,
                description: description,
                done: done
            });
        },
        
        addProject: function(model) {
            var view = new ProjectView({ model: model });
            this.$("#projects_list").append(view.render().$el);
        },
        
        addTask: function(model) { console.log(model); }
    });
    
    return HomeView;
}(Backbone,
  ProjectsCollection,
  ProjectView,
  TasksCollection,
  load_template));