var TasksCollection = (function(Backbone, TaskModel) {
    "use strict";
    
    var TasksCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("tasks-backbone"),
        model: TaskModel
    });
    
    return TasksCollection;
}(Backbone, TaskModel));