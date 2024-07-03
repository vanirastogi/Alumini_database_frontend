import React from 'react';
import FilterButton from './FilterButton';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="flex ml-auto justify-center rounded-xl bg-rose-200 sm:w-1/2 md:w-1/2 lg:w-1/3">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Search here" 
                    className="bg-rose-200 rounded-l-xl flex-grow px-5 py-2"
                />
                <button className="ml-2 p-2 bg-rose-200 hover:bg-pink-400 text-white rounded-r-xl flex items-center justify-center">
                    <img src='src/assets/search-interface-symbol.png' alt="search" className="w-4 h-4" />
                </button>
            </div>
            <div className="flex-shrink-0">
                <FilterButton />
            </div>
        </div>
    );
};

export default SearchBar;