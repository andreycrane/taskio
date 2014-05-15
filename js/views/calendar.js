/**
 * Модуль вида страницы календаря
 *
 * @module calendar.js
 */
var CalendarView = (function(Backbone,
                             _,
                             load_template,
                             ProjectsCollection,
                             TasksCollection,
                             CalendarProjects) {
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
        currentProject: null,
        /**
         * Инициализация вида
         * 
         * @method initialize
         */
        initialize: function() {
            this.mediator = _.extend({}, Backbone.Events);
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
            
            this.calendarProjects = new CalendarProjects({
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
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
            
            this.$("#projects-container").append(this.calendarProjects.render().$el);
            
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
                events,
                that = this;
            
            events = [];
            calendarTasks = this.tasks.filter(function(task) {
                var start_datetime,
                    end_datetime,
                    start_i,
                    end_i;
                
                // филтрация по проекту
                if (that.currentProject &&
                    task.get("project_id") !== that.currentProject.id) {
                    return false;
                }
                
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
                var project,
                    backgroundColor;
                
                project = that.projects.get(task.get("project_id"));
                backgroundColor = (project) ? project.get("color"): "";
                
                events.push({
                    id: task.id,
                    title: task.get("name"),
                    allDay: false,
                    start: new Date().setTime(task.get("start_datetime") / 1000),
                    end: new Date().setTime(task.get("end_datetime") / 1000),
                    backgroundColor: backgroundColor
                });
            });
            
            callback(events);
        },
        
        remove: function() {
            this.calendarProjects.remove();
            
            return Backbone.View.prototype.remove.call(this, arguments);
        },
        /**
         * Метод управдяющий отображением задач проектов на календаре
         *
         * @method proj_selected
         */
        proj_selected: function(options) {
            this.currentProject = options.project;
            this.$("#calendar-container").fullCalendar('refetchEvents');
        }
    });
} (Backbone,
   _,
   load_template,
   ProjectsCollection,
   TasksCollection,
   CalendarProjects));