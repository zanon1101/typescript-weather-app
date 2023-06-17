import { type WeatherData } from "./module.d";

export const getWeather = async (lat: number, lon: number, units?: string): Promise<WeatherData> => {
    if (!lat || !lon) {
        throw new Error(`Latitude and longitude are required lat: ${lat} lon: ${lon}`);
    }

    const apiKey = "ac9f17c1797aeeab5ede29ce1b75fc4f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data: WeatherData = (await response.json()) as WeatherData; // Why do I have to specify the type twice?
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
