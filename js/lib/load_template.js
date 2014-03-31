var load_template = (function(require) {
    'use strict';
    
    var fs = require("fs"),
        load_template;
    
    load_template = function(template_name) {
        var filePath;
        
        filePath = [
            "templates/",
            template_name,
            ".html"
        ].join("");
        
        return fs.readFileSync(filePath, { encoding: "utf-8" });
    };
    
    return load_template;
} (require));