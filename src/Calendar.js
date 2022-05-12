import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumCard from "./AlbumCard";
import { Col, Container, Row } from "react-bootstrap";




function Calendar({albumEntries, filteredDeletedAlbum, onUpdatedAlbum}) {
    const [displayAlbumCard, setDisplayAlbumCard] = useState(false);
    const [albumEntryToDisplay, setAlbumEntryToDisplay] = useState({});
    const [displayedMonth, setDisplayedMonth] = useState(1);
    const [displayedYear, setDisplayedYear] = useState(2022);
    const [calendarStart, setCalendarStart] = useState(1);

    const currentDate = new Date();
    const lastDayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    useEffect(() => {
        setDisplayedMonth(currentDate.getMonth());
        setDisplayedYear(currentDate.getFullYear());
    }, [])

    useEffect(() => {

        //currentDate.toISOString().split("T")[0]

        let firstOfMonth = new Date();
        firstOfMonth.setFullYear(displayedYear);
        firstOfMonth.setMonth(displayedMonth);
        firstOfMonth.setDate(1);

        setCalendarStart(firstOfMonth.getDate() - firstOfMonth.getDay()); //start calendar on earliest Sunday, even if that's in last month
    }, [displayedMonth])


    function handleDeleteAlbum(id) {
        setDisplayAlbumCard(false);
        filteredDeletedAlbum(id);
    }

    function handleClickAlbum(e, albumEntry) {
        e.preventDefault();
        setAlbumEntryToDisplay(albumEntry);
        setDisplayAlbumCard(true);
    }

    function handleDecrementMonth(e) {
        setDisplayedMonth((currentDisplayedMonth) => {
            if (currentDisplayedMonth === 0) {
                setDisplayedYear((currentDisplayedYear) => currentDisplayedYear - 1);
                return 11;
            }
            return currentDisplayedMonth - 1;
        })
    }

    function handleIncrementMonth(e) {
        setDisplayedMonth((currentDisplayedMonth) => {
            if (currentDisplayedMonth === 11) {
                setDisplayedYear((currentDisplayedYear) => currentDisplayedYear + 1);
                return 0;
            }
            return currentDisplayedMonth + 1;
        })        
    }

    function renderDate(month, day) {


        const dispMonth = displayedMonth+1<10 ? `0${displayedMonth+1}` : `${displayedMonth+1}`;
        const dispDay   = day<10   ? `0${day}`   : `${day}`;
        const todaysEntries = albumEntries.filter((albumEntry) => albumEntry.dateAdded === `${displayedYear}-${dispMonth}-${dispDay}`);

        let datePart = <></>;
        let entriesPart = <p>-</p>;
        let stylePart = {fontWeight: "bold"};

        if (day > 0 && day <= lastDayOfMonth[month]) {
            datePart = `${month+1}/${day}`;
        }

        if (todaysEntries.length > 0) {
            entriesPart = todaysEntries.map((entry) => {
                return <p className="calendar-entries" onClick={(e) => handleClickAlbum(e, entry)}>{entry.title}</p>;
            });
        }

        return <><span style={stylePart}>{datePart}</span> <span>{entriesPart}</span></>
    }

    function renderAlbumCards(day) {

        //console.log(todaysEntries);

        
    }

    function renderCalendarWeek(firstDate) {   
        return (
        <div className="row">
            <div className="col">Sun {renderDate(displayedMonth, firstDate)}   {renderAlbumCards(firstDate)}</div>
            <div className="col">Mon {renderDate(displayedMonth, firstDate+1)} {renderAlbumCards(firstDate+1)}</div>
            <div className="col">Tue {renderDate(displayedMonth, firstDate+2)} {renderAlbumCards(firstDate+2)}</div>
            <div className="col">Wed {renderDate(displayedMonth, firstDate+3)} {renderAlbumCards(firstDate+3)}</div>
            <div className="col">Thu {renderDate(displayedMonth, firstDate+4)} {renderAlbumCards(firstDate+4)}</div>
            <div className="col">Fri {renderDate(displayedMonth, firstDate+5)} {renderAlbumCards(firstDate+5)}</div>
            <div className="col">Sat {renderDate(displayedMonth, firstDate+6)} {renderAlbumCards(firstDate+6)}</div>
        </div>
        )
    }





    return (<>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button onClick={handleDecrementMonth}>&lt;--</button>
                        </div>
                        <div className="col">
                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][displayedMonth]} {displayedYear}
                        </div>
                        <div className="col">
                            <button onClick={handleIncrementMonth}>--&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {renderCalendarWeek(calendarStart)}
                    {renderCalendarWeek(calendarStart+7)}
                    {renderCalendarWeek(calendarStart+14)}
                    {renderCalendarWeek(calendarStart+21)}
                    {renderCalendarWeek(calendarStart+28)}
                    {calendarStart+35 <= lastDayOfMonth[displayedMonth] ? renderCalendarWeek(calendarStart+35) : <></>}

                    <Row>
                        <Col style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                        {displayAlbumCard ?
                            <AlbumCard
                                key={albumEntryToDisplay.id}
                                albumEntry={albumEntryToDisplay}
                                title={albumEntryToDisplay.title}
                                artist={albumEntryToDisplay.artist}
                                dateAdded={albumEntryToDisplay.dateAdded}
                                image={albumEntryToDisplay.image}
                                id={albumEntryToDisplay.id}
                                rating={albumEntryToDisplay.rating}
                                comments={albumEntryToDisplay.comments}
                                filteredDeletedAlbum={handleDeleteAlbum}
                                onUpdatedAlbum={onUpdatedAlbum}/>
                        :
                            <></>}
                        </Col>
                    </Row> 
                </div>
                
            </>)
}

export default Calendar;