import React, { useEffect, useState } from "react";

import { getLocation } from "y/api/geolocation";
import { getWeather } from "y/api/weather";

import { type LocationData, type WeatherData } from "y/api/module";

type WeatherDisplayProps = {
    input: string;
};

// this fnct will eventually take in location args / props from search input
const useLocationAndWeatherData = (searchInput: string) => {
    const [locationData, setLocationData] = useState<LocationData | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLocationAndWeather = async () => {
            try {
                setLoading(true);
                const location: LocationData = await getLocation(searchInput);
                setLocationData(location);

                if (location) {
                    const weather: WeatherData = await getWeather(location[0].lon, location[0].lat);
                    setWeatherData(weather);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (searchInput) {
            fetchLocationAndWeather().catch(console.error);
        }
    }, [searchInput]);

    return { locationData, weatherData, isLoading };
};

export const WeatherDisplay = ({ input }: WeatherDisplayProps) => {
    // how to handle no input?

    const { locationData, weatherData } = useLocationAndWeatherData(input);
    console.log(weatherData);

    if (!input) return null;

    if (!locationData || !weatherData) return <div>No Results...</div>;

    const { name, state, lat, lon } = (locationData[0] as LocationData) || {};

    if (!name || !state || !lat || !lon) return <div>No Results...</div>;

    return (
        <div className="text-slate-400">
            {locationData && weatherData && (
                <pre>{JSON.stringify(`${name}, ${state} - Lat: ${lat} Lon: ${lon}`, null, 4)}</pre>
            )}
            {weatherData && <pre>{JSON.stringify(weatherData.main.temp_min, null, 4)}</pre>}
        </div>
    );
};
