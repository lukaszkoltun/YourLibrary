import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class AddBook extends React.Component{
    render(){
        return <Form>
            <Form.Group>
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Enter author..." name='autor' />
                <Form.Label>Title: </Form.Label>
                <Form.Control type='text' placeholder='Enter title...' name='title'/>
                <Form.Label>Type:</Form.Label>
                <Form.Control as='select'>
                    <option>-select-</option>
                    <option>Sci-Fi</option>
                    <option>Fantasy</option>
                    <option>Historical</option>
                    <option>Horror</option>
                </Form.Control>
                <Form.Label>Decription:</Form.Label>
                <Form.Control as='textarea' placeholder='Something about...' name='description'/>
            </Form.Group>
            <Form.Group>
                <Form.Check type='checkbox' label='Already read?'/>
            </Form.Group>
            <Button>Submit</Button>

        </Form>;
    }
}