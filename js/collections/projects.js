var ProjectsCollection = (function(Backbone, ProjectModel) {
    "use strict";
    
    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel,
        url: '/projects'
    });
    
    return ProjectsCollection;
}(Backbone, ProjectModel));
