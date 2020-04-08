import React from "react";

const SearchBox = ({ onChange }) => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
};

export default SearchBox;
