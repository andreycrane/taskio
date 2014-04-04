var TaskView = (function(Backbone) {
    "use strict";
    
    var task_views_cnt = 0;
    
    return Backbone.View.extend({
        id: function() { return "task-view-" + (task_views_cnt += 1); },
        
        initalize: function(options) {
            options = options || {};
            this.model = options.model;
        },
        
        render: function() {
            return this;
        }
    });
})(Backbone);