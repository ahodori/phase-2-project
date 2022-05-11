import React from "react";
import AlbumCard from "./AlbumCard";
import { useParams } from "react-router-dom";

function SingleCardDisplay({albumEntries, filteredDeletedAlbum}) {
    let params = useParams();
    if (params.entryId) {
        const albumToDisplay = albumEntries.filter((albumEntry) => albumEntry.id == params.entryId);

        //console.log(albumToDisplay);
        if (albumToDisplay.length > 0) {
            return <AlbumCard 
                        key={albumToDisplay[0].id}
                        id={albumToDisplay[0].id}
                        title={albumToDisplay[0].title}
                        artist={albumToDisplay[0].artist}
                        dateAdded={albumToDisplay[0].dateAdded}
                        image={albumToDisplay[0].image}
                        rating={albumToDisplay[0].rating}
                        comments={albumToDisplay[0].comments}
                        filteredDeletedAlbum={filteredDeletedAlbum}
                        />
        }
    }

    return <p>Nothing here!</p>;
}

export default SingleCardDisplay;