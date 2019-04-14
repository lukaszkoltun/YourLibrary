import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled, {createGlobalStyle} from 'styled-components';
import {Header} from './Header.jsx'
import {AddBook} from './AddBook.jsx';
import {BookList} from "./BookList.jsx";
import {Start} from "./Start.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';



const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Arial';
        color:  #ff8000;
        background: grey;
        font-weight: 900;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
`;
const NavList = styled.ul`
    list-style-type: none;  
    background: #242121;
    li{
        display: inline; 
        padding 0 3em;
        a{
            color: #ff8000;
        }       
    }
`;


export const App = () =>(
         <div>
             <GlobalStyle/>
                    <Header />
                        <HashRouter>
                            <Container >
                                <Row>
                                    <Col>
                                        <div>
                                            <NavList>
                                                <li>
                                                    <Link to="/">Start</Link>
                                                </li>
                                                <li>
                                                    <Link to="/add">Add new book</Link>
                                                </li>
                                                <li>
                                                    <Link to="/list">List</Link>
                                                </li>
                                            </NavList>
                                        </div>
                                        <Switch>
                                            <Route exact path='/' component={Start} />
                                            <Route path='/add' component={AddBook} />
                                            <Route path='/list' component={BookList} />
                                        </Switch>

                                    </Col>
                                </Row>
                        </Container>
                    </HashRouter>
                </div>
);