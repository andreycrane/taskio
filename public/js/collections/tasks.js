var TasksCollection = (function(Backbone, TaskModel) {
    "use strict";
    
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel,
        url: '/tasks'
    });
    
    return TasksCollection;
}(Backbone, TaskModel));
