/**
 * Модуль вида списка задач
 *
 * @module tasks.js
 */
var TasksView = (function(Backbone,
                          load_template,
                          TaskModel,
                          TaskView) {
    'use strict';
    
    /**
     * Модальное окно задачи
     * 
     * @class TaskModal
     * @constructor
     * @extends Backbone.View
     */
    var TaskModal = Backbone.View.extend({
        el: "body",
        template: _.template(load_template("task_modal")),
        
        events: {
            "keyup #task_modal": "modalEscape",
            "click #task_modal_close": "modalClose",
            "click #task_modal_save": "validate",
            "click #add_to_calendar": "calendarControls",
            "change #whole_day": "calendarWholeDay",
            "keypress #task_name": "validateName"
        },
        /**
         * Метод открытия модального окна создания новой задачи
         *
         * @method modalShow
         * @param {Object} options - опции которые передаются коду
         * прослушивающего событие save данной модальной формы
         */
        modalShow: function(options) {
            var start_date,
                start_time,
                end_date,
                end_time,
                d,
                dateoptions,
                timeoptions,
                selector = ["#task_project_id option[value='",
                            options.task.get("project_id"),
                            "']"].join("");
            
            if (options.task.get("start_datetime")) {
                d = new Date();
                d.setTime(options.task.get("start_datetime"));
                
                start_date = this.getDateString(d);
                start_time = this.getTimeString(d);
            } else {
                start_date = "";
                start_time = "";
            }
            
            if (options.task.get("end_datetime")) {
                d = new Date();
                d.setTime(options.task.get("end_datetime"));
                
                end_date = this.getDateString(d);
                end_time = this.getTimeString(d);
            } else {
                end_date = "";
                end_time = "";
            }
            
            this.options = options;
            this.$el.append(this.template({
                legend: (options.create) ? "Новая задача" : "Редактировать задачу",
                projects: options.projects,
                name: options.task.get("name"),
                create: options.create,
                start_date: start_date,
                start_time: start_time,
                end_date: end_date,
                end_time: end_time,
                whole_day: ((start_time === "00:00") & (end_time === "00:00")) ? "checked": "",
                done: options.task.get("done") ? "checked": "",
                description: options.task.get("description")
            }));


            this.$("#task_modal").focus();
            this.$(selector).attr("selected", "selected");
            
            if (start_date && end_date) {
                this.$("#calendar_controls").toggle(true);
                
                if (((start_time === "00:00") & (end_time === "00:00"))) {
                    this.$("#start_time, #end_time").toggle(false);
                }
            }

            dateoptions = { 
                lang: "ru", 
                className: "datetimepicker",
                timepicker: false,
                format: "d-m-Y" 
            };
            
            timeoptions = { 
                lang: "ru", 
                className: "datetimepicker",
                datepicker: false,
                format: "G:i"
            };

            this.$("#start_date.date").datetimepicker(dateoptions);
            this.$("#end_date.date").datetimepicker(dateoptions);
            this.$("#start_time.time").datetimepicker(timeoptions);
            this.$("#end_time.time").datetimepicker(timeoptions);
        },
        
        modalClose: function () { 
            this.$(".date, .time").datetimepicker('destroy');    
            this.$("#task_modal").remove(); 
        },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            var start_datetime,
                end_datetime;
            
            start_datetime = [this.$("#start_date").val(),
                              this.$("#start_time").val()].join(" ");
 
            end_datetime = [this.$("#end_date").val(),
                              this.$("#end_time").val()].join(" ");

            this.options.task.set({
                project_id: this.$("#task_project_id").val(),
                name: this.$("#task_name").val(),
                done: this.$("#done").is(":checked"),
                description: this.$("#description").val(),
                start_datetime: Date.parse(start_datetime) || 0,
                end_datetime: Date.parse(end_datetime) || 0
            });
            this.modalClose();
            this.trigger("save", this.options);
        },
        /**
         * Валидация правильности ввода в информации в поля
         * формы модального окна.
         * 
         * @method validate
         */
        validate: function() {
            var errors = false, // флажок показывающий что есть ошибки
                start_date,
                start_time,
                end_date,
                end_time,
                emp_start_date,
                emp_start_time,
                emp_end_date,
                emp_end_time;
            
            // заранее скрываем все сообщения об ошибках
            this.$(".error").toggle(false);
            
            // проверка заполненности имени задачи
            if (_.isEmpty(this.$("#task_name").val())) {
                this.$("#task_name_err").fadeIn("slow");
                errors = true;
            }
            // провекра корректности ввода даты
            start_date = this.$("#start_date").val();
            start_time = this.$("#start_time").val();
            end_date = this.$("#end_date").val();
            end_time = this.$("#end_time").val();
            
            emp_start_date = _.isEmpty(start_date);
            emp_start_time = _.isEmpty(start_time);
            emp_end_date = _.isEmpty(end_date);
            emp_end_time =  _.isEmpty(end_time);
            
            // либо все должны быть назаполненными
            // либо наоборот
            if (!(emp_start_date ===
                  emp_start_time ===
                  emp_end_date === emp_end_time)) {
                
                this.$("#invalid_format_err").fadeIn("slow");
                errors = true;
            }
            // если все параметры сроков заполнены
            // и время начала большее времени завершения
            if (!(emp_start_date & emp_start_time & emp_end_date & emp_end_time) &&
                (Date.parse(start_date + " " + start_time) >=
                    Date.parse(end_date + " " + end_time))) {
                
                this.$("#date_wrong_order").fadeIn("slow");
                errors = true;
            }
            
            if (!errors) { this.modalSave(); }
        },
        
        validateName: function() {
            this.$("#task_name_err").fadeOut("slow");
        },
        /**
         * Переключение отображения элементов управления занесения
         * даты и времени начала и конца задачи
         * 
         * @method calendarControls
         */
        calendarControls: function() {
            this.$("#calendar_controls").fadeToggle("medium");
        },
        /**
         * Переключение отображения элементов управления занесения времени
         * задачи
         * 
         * @method calendarWholeDay
         */
        calendarWholeDay: function() {
            if (this.$("#whole_day").is(":checked")) {
                this.$("#start_time, #end_time").val("00:00")
                                                .hide("fast");
            } else {
                this.$("#start_time, #end_time").show("fast");
            }
        },
        /**
         * Возвращает строку отформатированной даты
         *
         * @method getDateString
         * @param {Date} d объект
         * @returns {String} строка даты
         */
        getDateString: function(d) {
            return [d.getFullYear(),
                    ("00" + (d.getMonth() + 1)).slice(-"00".length),
                    ("00" + d.getDate()).slice(-"00".length)].join("-");
        },
        /**
         * Возвращает строку отформатированного времени
         *
         * @method getTimeString
         * @param {Date} d объект
         * @returns {String} строка времени
         */
        getTimeString: function(d) {
            return [("00" + d.getHours()).slice(-"00".length),
                    ("00" + d.getMinutes()).slice(-"00".length)].join(":");
        }
    });
    /**
     * Вид списка задач
     * 
     * @class TasksView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "tasks-view",
        template: load_template("tasks"),
        /**
         * События прослушиваемые видом
         *
         * @property events
         * @type {Object}
         */
        events: {
            "click #new_task": "createTask",
            "click #search_btn": "searchTask",
            "keypress #s_query": "searchKeyPress"
        },
        /**
         * Инициализция вида
         * 
         * @method initialize
         * @param {Object} options - параметры вида (коллекция проектов, задач)
         */
        initialize: function(options) {
            options = options || {};
            // коллекция проектов ProjectsCollection
            this.projects = options.projects;
            // коллекция задач TasksCollection
            this.tasks = options.tasks;
            // медиатор для взаимодействия с другими видами
            this.mediator = options.mediator;
            // модальное окно для создания новой задачи
            this.taskModal = new TaskModal({ projects: this.projects });
            // обработка события save нажатия кнопки сохранить модального окна
            this.listenTo(this.taskModal, "save", this.modalSave);
            // прослушивание события добавления новой модели в коллекцию задач
            this.listenTo(this.tasks, "add", this.addTask.bind(this));
            // прослушивание события редактирования задачи
            this.listenTo(this.mediator, "editTask", this.editTask.bind(this));
        },
        /**
         * Рендеринг вида списка задач
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            
            this.tasks.forEach(this.addTask.bind(this));
            
            return this;
        },
        /**
         * Обработчик события добавления задачи в коллекцию задач
         * 
         * @method addTask
         * @param 
         */
        addTask: function(task) {
            var view = new TaskView({
                model: task,
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.$("#tasks_list").append(view.render().$el);
        },
        /**
         * Создание новой задачи
         *
         * @method create_task
         */
        createTask: function() {
            var task = new TaskModel({
                name: "",
                description: "",
                done: false
            });
            
            this.taskModal.modalShow({
                task: task,
                projects: this.projects,
                create: true
            });
        },
        /**
         * Обработчик события save нажатия кнопки "Cохранить" модального окна
         * 
         * @method modalSave
         * @param {Object} options - опции возвращаемые модальным окном
         */
        modalSave: function(options) {
            if (options.create) {
                this.tasks.add(options.task);
            }
            
            options.task.save({ wait: true });
        },
        /**
         * Обработка нажатия клавиш в поле поиска
         * @method searchKeyPress
         */
        searchKeyPress: function(event) {
            // если нажали Enter запускаем поиск задачи по контексту
            if (event.which === 13){
                this.searchTask();
            }
        },
        /**
         * Поиск задачи по тексту заданному в поиске
         * 
         * @searchTask
         */
        searchTask: function() {
            this.mediator.trigger("search", { q: this.$("#s_query").val() });
        },
        /**
         * Обработчик события редактирования задачи
         * @method editTask
         * @param {Object} event - объект содержащий модель для редактирования
         */
        editTask: function(event) {
            this.taskModal.modalShow({
                task: event.task,
                projects: this.projects,
                create: false
            });
        },
        /**
         * Перегрузка базового метода удаления вида из страницы
         * 
         * @method remove
         */
        remove: function(){
            this.taskModal.undelegateEvents();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
}(Backbone,
  load_template,
  TaskModel,
  TaskView));
