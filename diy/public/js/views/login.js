var LoginView = (function(Backbone,
                          $,
                          load_template) {
    'use strict';
    
    return Backbone.View.extend({
        id: "login-view",
        login_template: load_template('login_template'),
        
        events: {
            'click #ok': 'authenticate'
        },
     
        initialize: function(options) {
            this.mediator = options.mediator;
        },
        
        authenticate: function() {
            var username = this.$("#username").val(),
                password = this.$("#password").val();
           
            $.post("/login", { 
                username: username, 
                password: password 
            }, this.success.bind(this));
        },
        
        success: function(data) {
            this.mediator.trigger("authenticated");
        },
        
        render: function() {
            this.$el.append(this.login_template);
            
            return this;
        }
    });
}(Backbone, jQuery, load_template));
