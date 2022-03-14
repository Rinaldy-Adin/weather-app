import React, { useEffect, useState } from 'react';
import MainInfo from './components/MainInfo';
import styled from 'styled-components';
import clear from './images/clear.jpg';
import cloudy from './images/cloudy.jpg';
import mist from './images/mist.jpg';
import rain from './images/rain.jpg';
import snow from './images/snow.jpg';
import thunderstorm from './images/thunderstorm.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Switch from './components/Switch';

function App() {
    const [searchValue, setSearchValue] = useState('Bandung');
    const [location, setLocation] = useState(searchValue);
    const [weather, setWeather] = useState('clear');
    const [celsius, setCelsius] = useState(1);

    const handleSearch = (e) => {
        setLocation(searchValue);
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) handleSearch();
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleUnit = (e) => {
        setCelsius(e.target.checked);
    };

    useEffect(() => {
        document.title = 'Weather Today';
    });

    return (
        <Container
            background={
                weather === 'Clear'
                    ? clear
                    : weather === 'Clouds'
                    ? cloudy
                    : weather === 'Mist'
                    ? mist
                    : weather === 'Rain'
                    ? rain
                    : weather === 'Snow'
                    ? snow
                    : weather === 'Thunderstorm'
                    ? thunderstorm
                    : clear
            }
        >
            <SwitchWrapper>
                <Switch onChange={handleUnit} />
            </SwitchWrapper>
            <SearchWrapper>
                <SearchBar
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                    value={searchValue}
                />
                <SearchIcon onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
                </SearchIcon>
            </SearchWrapper>
            <ContentWrapper>
                <MainInfo
                    location={location}
                    celsius={celsius}
                    setWeather={setWeather}
                />
            </ContentWrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: bottom;
`;

const SwitchWrapper = styled.div`
    position: absolute;
    top: 2.5rem;
    right: 10vw;
`;

const SearchWrapper = styled.div`
    display: flex;
    margin: 0 2rem;
    width: 600px;
    margin-top: 2rem;
    border-radius: 3px;
    overflow: hidden;
`;

const SearchBar = styled.input`
    font-family: ${(props) => props.theme.fonts[0]};

    width: 90%;
    font-size: 1.5rem;
    padding: 0.6rem 1.2rem;
    border: none;
    outline: none;
`;

const SearchIcon = styled.button`
    border: none;

    width: 10%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ec6e4c;

    &:hover {
        cursor: pointer;
    }
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default App;
