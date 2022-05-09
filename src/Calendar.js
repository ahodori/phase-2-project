import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CalendarWeek() {
    return (
    <div class="row">
        <div class="col">Sun</div>
        <div class="col">Mon</div>
        <div class="col">Tue</div>
        <div class="col">Wed</div>
        <div class="col">Thu</div>
        <div class="col">Fri</div>
        <div class="col">Sat</div>
    </div>
    )
}


function Calendar() {
    return (<div class="container">

        {CalendarWeek()}
        {CalendarWeek()}
        {CalendarWeek()}
        {CalendarWeek()}
        {CalendarWeek()}
    </div>)
}

export default Calendar;