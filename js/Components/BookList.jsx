import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {BookListItem} from "./BookListItem.jsx";

export class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(json => this.setState({ list: json }));
    }

    componentWillUnmount() {
        this.setState({ list : []})
    }

    render(){
        return <ListGroup>
            {this.state.list.map(element => <BookListItem key={element.id} book={element}/> )}
        </ListGroup>
    }

}