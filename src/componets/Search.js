import React, { useState } from "react"


// the first hooks API that we are going to use, and it’s called useState . 
// As the name implies, it lets us add React state to function components. 
// he useState hook accepts one argument which is the initial state, and then it 
// returns an array containing the current state (equivalent to this.state for class components) and a function to update it (equivalent to this.setState ).
// In our case, we are passing our current state as the value for the search input field. 
// When the onChange event is called, the handleSearchInputChanges function is called which calls the state update function with the new value. 
// The resetInputField function basically called the state update function (setSearchValue) with an empty string in order to clear the input field. 
// Check this out to know more about the useState API.

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField()
    }

    return (
        <form className="search">
            <input 
            value = {searchValue } 
            onChange = { handleSearchInputChanges } 
            type="text"
            />
            <input onClick={ callSearchFunction } type="submit" value="SEARCH" />
        </form>
    );
};

export default Search