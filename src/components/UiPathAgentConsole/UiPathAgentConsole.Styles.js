import { default as styled } from 'react-emotion';

export const UiPathAgentConsoleStyles = styled('div')`
  padding: 10px;
  margin: 0px;

  button {
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 2px;
    font: 400 13.3333px Arial;

    align-self: center;
    height: 28px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    white-space: nowrap;
    color: rgb(255, 255, 255);
    padding: 0px 16px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: linear-gradient(to top, rgb(25, 118, 210), rgb(25, 118, 210));
    outline: none;
    border-radius: 0px
  }

  ul {
      margin-left: 10px;
  }
`;
