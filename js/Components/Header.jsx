import React from 'react';
import style from 'styled-components';


const HeaderDiv = style.div`
    background: #242121;
    padding: 2% 0 1% 5%;
    margin: 0 0 2% 0;
    color: orange;
    fontWeight: 900;
`;

export class Header extends React.Component{
    render(){
        return <HeaderDiv>
            <h1>Your Library</h1>
        </HeaderDiv>
    }
}