import React from "react";


function Search ( { handleSearch, search } ) {
    

    




return (
    <div className="searchbar">
        <label htmlFor="search">Search by Artist: </label>
        <input type="text" id="search" placeholder="Enter Artist Name Here" value={search} onChange={handleSearch}/>
    </div>
)
}

export default Search;