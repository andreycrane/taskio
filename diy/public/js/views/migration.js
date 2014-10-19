/**
 * Модуль вида migration.js
 *
 * @module migration.js
 */
var MigrationView = (function(Backbone,
                              _,
                              load_template,
                              migration) {
    /**
     * Вид страницы с Миграционной картой
     * 
     * @class MigrationView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "projects-view",
        template: _.template(load_template("migration_template")),
        /**
         * Рендеринг вида
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template({
                passedDays: migration.passedDays(),
                remainingDays: migration.remainingDays()
            }));

            var container = this.$('#paper').get(0),
                ctx = container.getContext('2d'),
                x = 30, 
                y = 7,
                i,
                j,
                rWidth = 35,
                rHeight = 35,
                rect,
                box,
                text,
                dayNum = 1,
                canvX,
                canvY;
            
            ctx.lineWidth = 2;
            ctx.strokeStyle ="red";
            ctx.font = "bold 16px sans";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
    
            for(i = 0; i <= x; i += 1) {
                for(j = 0; j <= y; j += 1, dayNum += 1) {
                    if (dayNum > 90) break;
                    
                    canvX = (i * (rWidth)) + 10; 
                    canvY = (j * (rHeight)) + 10;

                    ctx.beginPath();
                    ctx.fillStyle = (migration.isPassNum(dayNum)) ? "black" : "white";
                    ctx.rect(canvX, canvY, rWidth, rHeight);
                    ctx.fill();
                    ctx.stroke(); 
                    ctx.closePath();

                    ctx.fillStyle =(migration.isPassNum(dayNum)) ? "red" : "green";
                    ctx.fillText(migration.getDateByNum(dayNum).getDate(), 
                            canvX + (rWidth / 2), 
                            canvY + (rHeight / 2));
                }
            }

            return this;
        }
    });
    
}(Backbone,
  _,
  load_template,
  migration));
