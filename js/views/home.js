var HomeView = (function(Backbone,
                         ProjectsCollection,
                         ProjectView,
                         load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        
        home_template: load_template("home_template"),
        project_modal: load_template("new_project_modal"),
        
        events: {
            "click #new_project": "new_project",
            "keyup #project_modal": "modal_keypress",
            "click #prj_modal_close": "prj_modal_close",
            "click #prj_modal_save": "prj_modal_save"
        },
        
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.projects.fetch({ async: false });
            
            this.listenTo(this.projects, "add", this.addProject);
        },
        
        render: function() {
            this.$el.append(this.home_template);
            this.$el.append(this.project_modal);
            this.projects.forEach(this.addProject.bind(this));
            
            return this;
        },
        
        new_project: function() {
            this.$("#project_modal").toggleClass("hide");
            this.$("#project_modal").focus();
        },
        
        modal_keypress: function(event) {
            if(!this.$("#project_modal").hasClass("hide") &&
               event.keyCode === 27) {
                this.$("#project_modal").addClass("hide");
            }
        },
        
        prj_modal_close: function() {
            this.$("#project_modal").addClass("hide");
        },
        
        prj_modal_save: function() {
            var name;
            
            this.$("#project_modal").addClass("hide");
            name = this.$("#prj_modal_name").val();
            this.projects.create({ name: name });
        },
        
        addProject: function(model) {
            var view = new ProjectView({ model: model });
            this.$("#projects_list").append(view.render().$el);
        }
    });
    
    return HomeView;
}(Backbone,
  ProjectsCollection,
  ProjectView,
  load_template));