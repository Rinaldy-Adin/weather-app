import React from 'react';
import styled from 'styled-components';

const Switch = (props) => {
    return (
        <SwitchWrapper>
            <input
                type='checkbox'
                defaultChecked={true}
                onChange={props.onChange}
            />
            <span>
                <span>F</span>
                <span>C</span>
            </span>
            <a></a>
        </SwitchWrapper>
    );
};

const SwitchWrapper = styled.label`
    display: inline-block;
    height: 18px;
    position: relative;
    overflow: visible;
    padding: 0;
    margin-left: 50px;
    cursor: pointer;
    width: 40px;
    font-family: ${(props) => props.theme.fonts[0]};

    & * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    & label,
    & > span {
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
    }
    & input:focus ~ a,
    & input:focus + label {
        outline: none;
    }
    & label {
        position: relative;
        z-index: 3;
        display: block;
        width: 100%;
    }
    & input {
        position: absolute;
        opacity: 0;
        z-index: 5;
    }
    & > span {
        position: absolute;
        left: -50px;
        width: 100%;
        margin: 0;
        padding-right: 50px;
        text-align: left;
        white-space: nowrap;
    }
    & > span span {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        display: block;
        width: 50%;
        margin-left: 50px;
        text-align: left;
        font-size: 0.9em;
        width: 100%;
        left: 15%;
        top: -1px;
        opacity: 0;
    }
    & a {
        position: absolute;
        right: 50%;
        z-index: 4;
        display: block;
        height: 100%;
        padding: 0;
        left: 2px;
        width: 18px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    & > span span:first-of-type {
        color: #fff;
        opacity: 1;
        left: 45%;
    }
    & > span:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50px;
        top: -2px;
        background-color: #ec6e4c;
        border: 1px solid #ec6e4c;
        border-radius: 30px;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    & input:checked ~ a {
        border-color: #fff;
        left: 100%;
        margin-left: -8px;
    }
    & input:checked ~ span:before {
        border-color: #0097d1;
        box-shadow: inset 0 0 0 30px #0097d1;
    }
    & input:checked ~ span span:first-of-type {
        opacity: 0;
    }
    & input:checked ~ span span:last-of-type {
        opacity: 1;
        color: #fff;
    }

    width: 80px;
    height: 36px;

    & a {
        width: 36px;
    }
    & > span {
        height: 38px;
        line-height: 37px;
    }
    & input:checked ~ a {
        left: 52px;
    }
    & > span span {
        font-size: 1.4em;
    }
    & > span span:first-of-type {
        left: 70%;
    }
`;

export default Switch;
