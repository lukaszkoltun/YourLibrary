import React from 'react';
// import ListGroup, {Item} from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const Elem = styled.li`
    padding: 1em 0 0 2em;
    list-style-type: none;
    background: lightgrey;
    color: black;
    border: 1px solid orange;
    border-radius: 0.5em;
    p{
        font-weight: 100;
        font-size: 0.8em;
        color: grey;
    }
`;



export class BookListItem extends React.Component{
    constructor(props){
        super(props);
        this.displayStyle = ['none', 'block'];
        this.texts = ['show more...', 'show less...'];
        this.index = 0;
        this.state = {
            style: {display: this.displayStyle[this.index] },
            text: this.texts[this.index]
        }
    }
    showMore = () =>{
        this.index = this.index === 0 ? 1 : 0;
        this.setState({
           style: {display: this.displayStyle[this.index]},
            text: this.texts[this.index]
        });
    };
    render(){
        return <Elem>
            <div> {this.props.book.author}</div>
            <div> {this.props.book.title} </div>
            <div style={this.state.style}>
                <div> {this.props.book.type}</div>
                <div> {this.props.book.description}</div>

            </div>
            <p onClick={this.showMore}>{this.state.text}</p>
        </Elem>
    }
}