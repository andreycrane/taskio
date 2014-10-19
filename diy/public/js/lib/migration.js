var migration = ({
    // äàòà âúåçäà íà òåððèòîðèþ ÐÔ
    startDate: new Date(2014, 08, 13),
    // ïîñëåäíèé çàêîííûé äåíü ïðåáûâàíèÿ íà òåððèòîðèè ÐÔ
    // âû÷èñëÿåòñÿ íà ýòàïå ñîçäàíèÿ îáúåêòà
    endDate: null,

    dayMilliseconds: 24 * 60 * 60 * 1000,

    // âîçâðàùàåò îáúåêò ñ ñåãîäíåøíåé äàòîé áåç âðåìåíè
    getToday: function() {
        var today = new Date();

        today.setTime(Date.now());
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        
        return today;
    },

    getDateByNum: function(dayNum) {
        var dateByNum = new Date(this.startDate.getTime());

        dateByNum.setDate(this.startDate.getDate() + (dayNum - 1));
        return dateByNum;
    },

    // ïî íîìåðó äíÿ îïðåäåëÿåò ïðîéäåí îí èëè åùå íåò
    // íà ñåãîäíåøíèé ìîìåíò
    isPassNum: function(dayNum) {
        var dateByNum = this.getDateByNum(dayNum), 
            today = this.getToday();
        
        // äåíü ïî íîìåðó ìåíüøå ÷åì òåêóùèé îïðåäåëÿåìûé ñèñòåìîé
        return (dateByNum <= today); 
    },
  
    remainingDays: function() {
        return Math.round((this.endDate - this.getToday()) / this.dayMilliseconds, 0);
    },

    passedDays: function() {
        return Math.round((this.getToday() - this.startDate) / this.dayMilliseconds, 0);
    },

    init: function() {
        this.endDate = new Date(this.startDate.getTime());
        this.endDate.setDate(this.endDate.getDate() + 90);

        return this;
    }
}).init();
