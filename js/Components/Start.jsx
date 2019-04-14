import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export const Start = () =>(
    <Container>
        <Row style={{margin: '0 auto', color: 'black'}}>
            <Col><div>Hi there!</div>
                <p>        Welcome on the first page where you can create your own virtual library!
                    This page is an essential tool to help you manage collection of yours books.
                    Your virtual library can organize your books.</p>
                <p>You can create your own library with a few simple clicks. Firstly go to the "Add new book" tab where you have to complete the fields
                    'autor' where you put the name of author of th book, 'tittle' - the tittle of book,'type' where you select literary genre of your book,
                    discription - is optional you can write there what you want.</p>
                <p>You can mark 'already ready' if you read this book.
                    If you want to see all your books go to "List" tab where you have the list of  yours book.</p></Col>
            <Col></Col>
        </Row>

    </Container>

);