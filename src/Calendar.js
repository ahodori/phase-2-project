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

    const calendarStart = firstOfMonth.getDate() - firstOfMonth.getDay() //start calendar on earliest Sunday, even if that's in last month

    function renderDate(month, day) {
        const lastDayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day > 0 && day <= lastDayOfMonth[month]) {
            return `${month+1}/${day}`;
        }
        return <></>;
    }

    function CalendarWeek(firstDate) {
        const month = currentDate.getMonth();
    
        return (
        <div class="row">
            <div class="col">Sun {renderDate(month, firstDate)}</div>
            <div class="col">Mon {renderDate(month, firstDate+1)}</div>
            <div class="col">Tue {renderDate(month, firstDate+2)}</div>
            <div class="col">Wed {renderDate(month, firstDate+3)}</div>
            <div class="col">Thu {renderDate(month, firstDate+4)}</div>
            <div class="col">Fri {renderDate(month, firstDate+5)}</div>
            <div class="col">Sat {renderDate(month, firstDate+6)}</div>
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