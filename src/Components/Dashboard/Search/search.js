import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchComponent = ({ search ,onChange }) => {
  return (
    <div className="wrap-box">
      <div className="search-box">
        <SearchRoundedIcon className="search-icon" />
        <input type="text" placeholder="Search..." className="search-box-input" value={search} onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchComponent;
