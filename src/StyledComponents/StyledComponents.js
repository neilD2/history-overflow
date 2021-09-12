import styled from 'styled-components'

export const Button = styled.button`
        background-color: lightseagreen;    
        color: white;    
        outline: none;
        appearance: none;
        border: none;
        width: 300px;
        padding: 10px;
            margin: 13px 13px;
            font-size: 1em;
        border: ${props => props.clicked ? '1px solid black' : 'none'};
        border-radius: 3px;
        cursor: pointer;    
        box-shadow: 0px 2px 2px lightgray;
        transition: ease background-color 250ms;    
        &:hover {
            background-color: cadetblue;
        }
        &:disabled {
            cursor: default;
            opacity: 0.6;
        }    
    `;
