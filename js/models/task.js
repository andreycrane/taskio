var TaskModel = (function(Backbone) {
    "use strict";
    
    var TaskModel = Backbone.Model.extend({
        defaults: {
            "project_id": null,
            "done": false,
            "name": "No name",
            "description": "Description of task here..."
        }
    });
    
    return TaskModel;
} (Backbone));