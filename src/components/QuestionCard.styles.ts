import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #EBFEFF;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    max-width: 1100px;
    padding: 20px;
    text-align: center;

    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        background: ${({ correct, userClicked}) => 
            correct
                ? 'linear-gradient(90deg, #56FFA4, #59BC86);'
                : !correct && userClicked
                    ? 'linear-gradient(90deg, #FF5656, #C16868);'
                    : 'linear-gradient(90deg, #56CCFF, #6EAFB4);'
        }
        border: 3px solid white;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: black;
        cursor: pointer;
        font-size: 0.8rem;
        height: 40px;
        margin: 5px 0;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        user-select: none;
        width: 100%;
    }
`