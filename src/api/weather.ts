import { type WeatherData } from "./module.d";

export const getWeather = async (location: string): Promise<WeatherData> => {
    if (!location) {
        throw new Error("Location is required");
    }

    const apiKey = "f00cdafab9984a6999961430232306";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            console.error(response.statusText);
        }
        if (response.status === 400) {
            throw new Error("Bad request");
        }

        const data: WeatherData = (await response.json()) as WeatherData; // Why do I have to specify the type twice?
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};