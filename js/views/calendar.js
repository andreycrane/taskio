/**
 * Модуль вида страницы календаря
 *
 * @module calendar.js
 */
var CalendarView = (function(Backbone,
                             load_template,
                             ProjectsCollection,
                             TasksCollection) {
    "use strict";
    
    /**
     * Вид страницы с календарем
     * @class CalendarView
     * @constructor
     * @exteds Backbone.View
     */
    return Backbone.View.extend({
        id: "calendar-view",
        
        template: load_template("calendar_template"),
        /**
         * Инициализация вида
         * 
         * @method initialize
         */
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
        },
        /**
         * Рендеринг вида
         * 
         * @method render
         * @chainable
         */
        render: function() {
            // добавление шаблона в страницу
            this.$el.append(this.template);
            // добавление календаря
            this.$("#calendar-container").fullCalendar({
                firstDay: 1,
                height: 500,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
                dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
                dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
                buttonText: {
                    prev: "&nbsp;&#9668;&nbsp;",
                    next: "&nbsp;&#9658;&nbsp;",
                    prevYear: "&nbsp;&lt;&lt;&nbsp;",
                    nextYear: "&nbsp;&gt;&gt;&nbsp;",
                    today: "Сегодня",
                    month: "Месяц",
                    week: "Неделя",
                    day: "День"
                },
                 events: this.calendarEvents.bind(this)
            });
            
            return this;
        },
        /**
         * Метод предоставляющий календарю задачи
         *
         * @method calendarEvents
         * @param {Date} start дата начала
         * @param {Date} end дата конца
         * @param {Агтсешщт} callback функция которой необходимо передать Events
         */
        calendarEvents: function(start, end, callback) {
            var calendarTasks,
                events;
            
            events = [];
            calendarTasks = this.tasks.filter(function(task) {
                var start_datetime,
                    end_datetime,
                    start_i,
                    end_i;
                
                start_i = start.getTime();
                end_i = end.getTime();
                
                start_datetime = task.get("start_datetime");
                end_datetime = task.get("end_datetime");
                
                if (start_datetime & end_datetime & (start_i <= start_datetime & start_datetime <= end_i) ||
                    (start_i <= end_datetime & end_datetime <= end_i)) {
                    return true;
                } else {
                    
                    return false;
                }
            });
            
            calendarTasks.forEach(function(task) {
                events.push({
                    id: task.id,
                    title: task.get("name"),
                    allDay: false,
                    start: new Date().setTime(task.get("start_datetime") / 1000),
                    end: new Date().setTime(task.get("end_datetime") / 1000)
                });
            });
            
            console.log(events);
            
            callback(events);
        }
    });
} (Backbone,
   load_template,
   ProjectsCollection,
   TasksCollection));