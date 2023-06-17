import React, { useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { WeatherDisplay } from "./weather-display";

export const SearchInput = () => {
    const [searchInput, setSearchInput] = useState<string | null>("");

    // const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchInput(event.target.value);
    // };

    console.log(searchInput);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <>
            {/* <FontAwesomeIcon icon={faSearch} size="xs" className="text-white"/> */}
            <form method="get" onSubmit={handleSubmit}>
                <input
                    className="bg-transparent text-xl text-white outline-none"
                    placeholder="Search for a location..."
                    value={searchInput ?? ""}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </form>

            <WeatherDisplay input={searchInput} />
        </>
    );
};
