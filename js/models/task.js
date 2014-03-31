var TaskModel = (function(Backbone) {
    "use strict";
    
    var TaskModel = Backbone.Model.extend({
        defaults: {
            "done": false,
            "name": "No name",
            "text": "Description of task here..."
        }
    });
    
    return TaskModel;
} (Backbone));