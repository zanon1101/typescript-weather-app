import React, { useEffect, useState } from "react";
import Image from "next/image";
import useDebounce from "y/hooks/useDebounce";

import searchSVG from "y/assets/search.svg";

import { getWeather } from "y/api/weather";
import { type WeatherData } from "y/api/module";

export const SearchInput = () => {
    const [search, setSearch] = useState<string | null>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const debouncedSearch = useDebounce(search, 1000);

    useEffect(() => {
        async function fetchWeather() {
            setLoading(true);
            try {
                const weatherData = await getWeather(search ?? "");
                setWeather(weatherData);
                setError(null);
                setLoading(false);
            } catch (err) {
                setError("Invalid location please try again.");
                setLoading(false);
            }
        }
        console.log(debouncedSearch);

        if (debouncedSearch) fetchWeather().catch(console.error);
    }, [debouncedSearch]);

    if (loading) return <div className="text-[#FFC2C2]">Loading...</div>;
    if (error) return <div className="text-[#FFC2C2]">{error}</div>;

    if (search === "") weather === null;

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="relative p-2">
                    <input
                        type="text"
                        className="text-1xl block bg-transparent pl-10 text-[#FFFFFF] outline-none"
                        placeholder="Search for a location..."
                        value={search ?? ""}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className="absolute inset-y-0 mt-2">
                        <Image src={searchSVG} alt="search icon" />
                    </div>
                </div>
            </div>
            <br />
            {weather && search && (
                <div className="text-1xl p-4 text-[#FFC2C2]">
                    <div>
                        Location: {weather?.location?.name}, {weather?.location?.region}, {weather?.location?.country}
                    </div>
                    <div>Feels like: {weather?.current.feelslike_c}c</div>
                    <div>Condition: {weather?.current?.condition?.text}</div>
                    <div>Last updated: {weather?.current?.last_updated}</div>
                </div>
            )}
        </>
    );
};
