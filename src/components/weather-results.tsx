import dayjs from "dayjs";
import React from "react";
import Image from "next/image";

import { type WeatherData } from "y/api/module";

import moon from "public/weather-icons/moon.svg";
import sun from "public/weather-icons/sun.svg";

export const WeatherResults = (props: { weather: WeatherData }) => {
    const time = props.weather?.location?.localtime;
    const formattedTime = dayjs(time).format("HH:mm");

    const timeOfDayIcon = props.weather.current.is_day === 1 ? sun : moon;

    return (
        <div className="text-1xl block bg-transparent pl-10 text-[#FFC2C2] outline-none">
            <div>
                Location: {props.weather?.location?.name}, {props.weather?.location?.region},{" "}
                {props.weather?.location?.country}
            </div>
            <div>Local time: {formattedTime}</div>
            <div>Feels like: {props.weather?.current.feelslike_c}c</div>
            <div>Condition: {props.weather?.current?.condition?.text}</div>
            <Image src={timeOfDayIcon} alt="time of day" height={50} width={50} />
        </div>
    );
};
