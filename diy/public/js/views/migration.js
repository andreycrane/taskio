/**
 * Модуль вида migration.js
 *
 * @module migration.js
 */
var MigartionView = (function(Backbone,
                           load_template) {
    /**
     * Вид страницы с Миграционной картой
     * 
     * @class MigrationView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "projects-view",
        template: load_template("migration_template"),
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
