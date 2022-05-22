import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainInfo = (props) => {
    const [weather, setWeather] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${
                        props.location
                    }&units=${
                        props.celsius ? 'metric' : 'imperial'
                    }&appid=ea43808cef7f14291dd69003af2398f6`
                );
                if (!response.ok) throw new Error('Network not OK');
                const weatherData = await response.json();

                setWeather(weatherData);
                props.setWeather(weatherData.weather[0].main);
                setLoaded(true);
                setNotFound(false);
            } catch (error) {
                console.error(error);
                setNotFound(true);
                setLoaded(false);
            }
        })();
    }, [props.location, props.celsius]);

    return (
        <>
            {loaded ? (
                <MainWrapper>
                    <City>{weather.name}</City>
                    <WeatherIcon
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    />
                    <Weather>{weather.weather[0].main}</Weather>
                    <Temperature>
                        {Math.round(weather.main.temp) +
                            '°' +
                            (props.celsius ? 'C' : 'F')}
                    </Temperature>
                </MainWrapper>
            ) : notFound ? (
                <MainWrapper>
                    <City>404 City / Network Not Found</City>
                </MainWrapper>
            ) : (
                <MainWrapper></MainWrapper>
            )}
        </>
    );
};

const MainWrapper = styled.div`
    width: 400px;
    height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 7px;

    font-family: ${(props) => props.theme.fonts[0]};
    font-size: 3em;
    text-align: center;
`;

const City = styled.h1`
    color: white;
`;

const WeatherIcon = styled.img`
    height: 200px;
`;

const Weather = styled.h1`
    color: white;
    margin-bottom: 2rem;
`;

const Temperature = styled.h1`
    color: white;
`;

export default MainInfo;
