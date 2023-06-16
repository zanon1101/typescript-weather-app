import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SearchInput = () => {
    return (
      <>
        {/* <FontAwesomeIcon icon={faSearch} size="xs" className="text-white"/> */}
        <input
          className="bg-transparent text-xl text-white outline-none"
          placeholder="Search for a location..."
        />
      </>
    ); 
}