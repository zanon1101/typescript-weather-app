export type LocationData = {
     name: string;
     local_names: {
         [key: string]: string;
     };
     lat: number;
     lon: number;
     country: string;
     state: string;
 }
 
 export const getLocation = async (city: string, stateCode: string, countryCode: string): Promise<LocationData> => {
    // const apiKey = process.env.WEATHER_API_KEY ?? '';
    const apiKey = "ac9f17c1797aeeab5ede29ce1b75fc4f";
    const limit = 1;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;

    // const url = new URL(`/geo/1.0/direct`, `http://api.openweathermap.org`);
    // const queryParams = new URLSearchParams({
    //     q: `${city},${stateCode},${countryCode}`,
    //     limit: limit.toString(),
    //     appid: apiKey
    // })
    // url.search = queryParams.toString();

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data: LocationData = await response.json() as LocationData; // Why do I have to specify the type twice?
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

