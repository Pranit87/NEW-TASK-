import React, { Component } from 'react';
import {MdOutlineSearch} from 'react-icons/md'


const Search = ({handleSearchNote}) => {
    return <div className='search'>
        <MdOutlineSearch className = "search-icons"/>
        <input onChange = {(event) =>  handleSearchNote(event.target.value)} type = "text" placeholder = "type to search...."/>
        </div>
}
 
export default Search;
