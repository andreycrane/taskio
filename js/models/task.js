var TaskModel = (function(Backbone) {
    "use strict";
    
    var TaskModel = Backbone.Model.extend({
        defaults: {
            "project_id": null,
            "done": false,
            "name": "No name",
            "description": "Description of task here...",
            "start_datetime": 0,
            "end_datetime": 0
        }
    });
    
    return TaskModel;
} (Backbone));