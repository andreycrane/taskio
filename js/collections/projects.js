var ProjectsCollection = (function(Backbone, ProjectModel) {
    "use strict";
    
    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel
    });
    
    return ProjectsCollection;
}(Backbone, ProjectModel));