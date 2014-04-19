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
        project_modal: load_template("new_project_modal"),
        task_modal: load_template("new_task_modal"),
        prj_del_modal: load_template("delete_project_modal"),
        ed_project_modal: load_template("edit_project_modal"),
        
        current_project: null,
        
        events: {
            "click #new_project": "new_project",
            "click #new_task": "new_task",
            "click #prj_modal_close": "prj_modal_close",
            "click #task_modal_close": "task_modal_close",
            "click #prj_del_close": "prj_del_close",
            "click #eprj_modal_close": "eprj_modal_close",
            "click #prj_modal_save": "prj_modal_save",
            "click #task_modal_save": "task_modal_save",
            "click #eprj_modal_save": "eprj_modal_save",
            "click #prj_btn_delete": "prj_btn_delete",
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
            this.listenTo(this.mediator, "del_proj_modal", this.del_proj_modal);
            this.listenTo(this.mediator, "edit_proj_modal", this.edit_proj_modal);
            
            this.projectsView = new ProjectsView({
                projects: this.projects,
                tasks: this.tasks,
                mediator: this.mediator
            });
        },
        
        render: function() {
            this.$el.append(this.home_template);
            this.$el.append(this.project_modal);
            this.$el.append(this.task_modal);
            this.$el.append(this.ed_project_modal);
            this.projects.forEach(this.addProject.bind(this));
            this.tasks.forEach(this.addTask.bind(this));
            
            this.$("#projects_container").append(this.projectsView.render().$el);
            
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
        
        prj_modal_close: function() { this.$("#project_modal").addClass("hide"); },
        task_modal_close: function() { this.$("#task_modal").addClass("hide"); },
        prj_del_close: function() { this.$("#prj_del_modal").addClass("hide"); },
        eprj_modal_close: function() { this.$("#edit_project_modal").addClass("hide"); },
        
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
        },
        
        del_proj_modal: function(event) {
            this.delProjectView = event.view;
            this.$("#prj_del_modal").removeClass("hide");
        },
        
        prj_btn_delete: function() {
            this.delProjectView &&
                this.delProjectView.trigger("deleteProj", { collection: this.tasks });
            this.$("#prj_del_modal").addClass("hide");
        },
        
        edit_proj_modal: function(event) {
            var prjView = event.view,
                prjModel = prjView.model;
            
            this.editProjectModel = prjModel;
            this.$("#eprj_modal_name").val(prjModel.get("name"));
            this.$("#edit_project_modal").removeClass("hide");
        },
        
        eprj_modal_save: function() {
            this.$("#edit_project_modal").addClass("hide");
            
            if (this.editProjectModel) {
                this.editProjectModel.save({
                    name: this.$("#eprj_modal_name").val()
                });
            }
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