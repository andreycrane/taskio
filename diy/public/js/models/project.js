var ProjectModel = (function(Backbone) {
    "use strict";
    
    var ProjectModel = Backbone.Model.extend({
        defaults: {
            "name": "Project noname",
            "color": "#3498db"
        }
    });
    
    return ProjectModel;
} (Backbone));