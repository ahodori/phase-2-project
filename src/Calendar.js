import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumCard from "./AlbumCard";




function Calendar({albumEntries}) {
    const [displayAlbumCard, setDisplayAlbumCard] = useState(false);
    const [albumEntryToDisplay, setAlbumEntryToDisplay] = useState({});


    function handleClickAlbum(e, albumEntry) {
        e.preventDefault();
        setAlbumEntryToDisplay(albumEntry);
        setDisplayAlbumCard(true);
    }


    const currentDate = new Date();
    const year  = currentDate.getFullYear();
    const month = currentDate.getMonth();
    //currentDate.toISOString().split("T")[0]

    let firstOfMonth = new Date();
    firstOfMonth.setFullYear(currentDate.getFullYear());
    firstOfMonth.setMonth(currentDate.getMonth());
    firstOfMonth.setDate(1);

    const calendarStart = firstOfMonth.getDate() - firstOfMonth.getDay(); //start calendar on earliest Sunday, even if that's in last month

    function renderDate(month, day) {
        const lastDayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day > 0 && day <= lastDayOfMonth[month]) {
            return `${month+1}/${day}`;
        }
        return <></>;
    }

    function renderAlbumCards(day) {
        const dispMonth = month+1<10 ? `0${month+1}` : `${month+1}`;
        const dispDay   = day<10   ? `0${day}`   : `${day}`;
        const todaysEntries = albumEntries.filter((albumEntry) => albumEntry.dateAdded === `${year}-${dispMonth}-${dispDay}`);
        //console.log(todaysEntries);

        if (todaysEntries.length > 0) {
            return todaysEntries.map((entry) => {
                return <p onClick={(e) => handleClickAlbum(e, entry)}>{entry.title}</p>;
            });
        }

        return <p>-</p>;
    }

    function CalendarWeek(firstDate) {   
        return (
        <div className="row">
            <div className="col">Sun {renderDate(month, firstDate)}   {renderAlbumCards(firstDate)}</div>
            <div className="col">Mon {renderDate(month, firstDate+1)} {renderAlbumCards(firstDate+1)}</div>
            <div className="col">Tue {renderDate(month, firstDate+2)} {renderAlbumCards(firstDate+2)}</div>
            <div className="col">Wed {renderDate(month, firstDate+3)} {renderAlbumCards(firstDate+3)}</div>
            <div className="col">Thu {renderDate(month, firstDate+4)} {renderAlbumCards(firstDate+4)}</div>
            <div className="col">Fri {renderDate(month, firstDate+5)} {renderAlbumCards(firstDate+5)}</div>
            <div className="col">Sat {renderDate(month, firstDate+6)} {renderAlbumCards(firstDate+6)}</div>
        </div>
        )
    }





    return (<>
                <div className="container">
                    {CalendarWeek(calendarStart)}
                    {CalendarWeek(calendarStart+7)}
                    {CalendarWeek(calendarStart+14)}
                    {CalendarWeek(calendarStart+21)}
                    {CalendarWeek(calendarStart+28)}
                </div>
                
                <div>
                {displayAlbumCard ?
                    <AlbumCard 
                        key={albumEntryToDisplay.id}
                        title={albumEntryToDisplay.title}
                        artist={albumEntryToDisplay.artist}
                        dateAdded={albumEntryToDisplay.dateAdded}
                        image={albumEntryToDisplay.image}
                        rating={albumEntryToDisplay.rating}
                        comments={albumEntryToDisplay.comments}/>
                    :
                    <></>}
                
                </div>
            </>)
}

export default Calendar;