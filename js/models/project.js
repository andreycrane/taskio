var ProjectModel = (function(Backbone) {
    "use strict";
    
    var ProjectModel = Backbone.Model.extend({
        defaults: {
            "name": "Project noname"
        }
    });
    
    return ProjectModel;
} (Backbone));