import React from "react";
import Image from "next/image";

interface WeatherIconProps {
    code: number | undefined;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ code }) => {
    let iconSrc = "";

    switch (code) {
        case 1000:
            iconSrc = "/weather-icons/sun.svg";
            break;
        case 1003:
        case 1006:
        case 1009:
            iconSrc = "/weather-icons/cloud.svg";
            break;
        case 1183:
            iconSrc = "/weather-icons/cloud-drizzle.svg";
            break;
        case 1186:
            iconSrc = "/weather-icons/cloud-drizzle.svg";
            break;
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1252:
        case 1255:
        case 1258:
        case 1261:
        case 1264:
        case 1273:
        case 1276:
        case 1279:
        case 1282:
            iconSrc = "/weather-icons/cloud-rain.svg";
            break;
    }

    if (iconSrc === "") return null;

    return <Image src={iconSrc} width={50} height={50} alt="weather icon" />;
};

export default WeatherIcon;
