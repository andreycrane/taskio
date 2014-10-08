var load_template = (function($) {
    'use strict';
    
    var load_template = function(template_name) {
        var templateUrl = [
            "/templates/",
            template_name,
            ".html"
        ].join("");
       
        return $.ajax({
            type: 'GET',
            url: templateUrl,
            async: false
        }).responseText;
    };
    
    return load_template;
} (jQuery));
