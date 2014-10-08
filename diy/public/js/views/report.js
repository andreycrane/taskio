/**
 * Модуль вида report.js
 *
 * @module report.js
 */
var ReportView = (function(Backbone,
                           load_template) {
    /**
     * Вид страницы с отчетами
     * 
     * @class ReportView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "projects-view",
        template: load_template("report_template"),
        /**
         * Рендеринг вида
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
}(Backbone,
  load_template));