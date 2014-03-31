var TasksCollection = (function(Backbone, TaskModel) {
    "use strict";
    
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel
    });
    
    return TasksCollection;
}(Backbone, TaskModel));