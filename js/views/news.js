var NewsView = (function(Backbone, load_template) {
    "use strict";
    
    var NewsView = Backbone.View.extend({
        id: "news-view",
        
        template: load_template("news_template"),
        
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
    return NewsView;
} (Backbone, load_template));