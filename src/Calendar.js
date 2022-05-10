import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




function Calendar() {
    const currentDate = new Date();
    //currentDate.toISOString().split("T")[0]
    let firstOfMonth = new Date();
    firstOfMonth.setFullYear(currentDate.getFullYear());
    firstOfMonth.setMonth(currentDate.getMonth());
    firstOfMonth.setDate(1);
    console.log(firstOfMonth);

    const calendarStart = firstOfMonth.getDate() - firstOfMonth.getDay()

    //0 6       start at firstOfMonth.getDate() - firstOfMonth.getDay()
    //7 14
    //15 22
    //23 30
    //30 31

    function CalendarWeek(firstDate) {
        const month = currentDate.getMonth()+1;
    
        return (
        <div class="row">
            <div class="col">Sun {(firstDate > 0 && firstDate < 31) ? `${month}/${firstDate}` : <></>}</div>
            <div class="col">Mon {(firstDate+1 > 0 && firstDate+1 < 31) ? `${month}/${firstDate+1}` : <></>}</div>
            <div class="col">Tue {(firstDate+2 > 0 && firstDate+2 < 31) ? `${month}/${firstDate+2}` : <></>}</div>
            <div class="col">Wed {(firstDate+3 > 0 && firstDate+3 < 31) ? `${month}/${firstDate+3}` : <></>}</div>
            <div class="col">Thu {(firstDate+4 > 0 && firstDate+4 < 31) ? `${month}/${firstDate+4}` : <></>}</div>
            <div class="col">Fri {(firstDate+5 > 0 && firstDate+5 < 31) ? `${month}/${firstDate+5}` : <></>}</div>
            <div class="col">Sat {(firstDate+6 > 0 && firstDate+6 < 31) ? `${month}/${firstDate+6}` : <></>}</div>
        </div>
        )
    }

    return (<div class="container">
        {CalendarWeek(calendarStart)}
        {CalendarWeek(calendarStart+7)}
        {CalendarWeek(calendarStart+14)}
        {CalendarWeek(calendarStart+21)}
        {CalendarWeek(calendarStart+28)}
    </div>)
}

export default Calendar;