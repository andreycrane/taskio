var ProjectsCollection = (function(Backbone, ProjectModel) {
    "use strict";
    
    var ProjectsCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("projects-backbone"),
        model: ProjectModel
    });
    
    return ProjectsCollection;
}(Backbone, ProjectModel));