import React, { useState } from "react";

const SearchBar = ({searchedHandler}) => {
    const [search, setSearch] = useState("");

    const onInputChange = (e) => {
        setSearch(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchedHandler(search);
        setSearch("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="mt-1 mb-1">
                <input type="text" className="form-control" placeholder="Search Image" value={search} onChange={onInputChange} />
            </div>
        </form>
    );
};

export default SearchBar;