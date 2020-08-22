import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/background-texture.jpg'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif
    }

    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        display: flex;
        justify-content: center;
        magin: 0;
        padding: 0 20px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #000;
    }

    .score {
        color: #000;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        background-image: linear-gradient(180deg, #FFF, #87F1FF)
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085A3)
        font-size: 70px;
        font-weight: 400;
        margin: 20px;
        text-align: center;
    }

    .start, .next {
        border: solid 2px #000;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        cursor: pointer;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start:hover, .next:hover {
        border: none;
    }

    .start {
        max-width: 200px;
    }
`