import React from 'react';
import Form, {Control, Label, Group, Check} from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'

const AddForm = styled.div`
   background: lightblue;
   border: 2px solid blue;
   border-radius: 1%;
   color: navy;
`

export class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            author: {
                type: 'text',
                name: 'author',
                placeholder: 'Enter author...',
                value: ''
            },
            title: {
                type: 'text',
                name: 'title',
                placeholder: 'Enter title...',
                value: ''
            },
            type: {
                as: 'select',
                name: 'type'
            },
            description: {
                as: 'textarea',
                name: 'description',
                placeholder: 'Something about...',
                value: ''
            },
            readCheck: {
                type: 'checkbox',
                label: 'Already read?',
                name: 'read',
                checked: true,
                value: true

            }
        }
}

    handleChecked = ( checked, value) => {
     this.setState({
         readCheck: Object.assign(this.state.readCheck, {
             value: checked,
             checked
         })
     })
    }

    onChange = (name, value) => {
        const input = Object.assign(this.state[name])
        input.value = value;

        this.setState({
            [name]: input
        });
        console.log(value);
    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }


    render(){
        return <AddForm>
            <Form onSubmit  = {this.onSubmit}>
                <Group>

                    <Label>Author:</Label>
                    <Control
                        {...this.state.author}
                        onChange ={
                            e => this.onChange(this.state.author.name, e.target.value)
                        }

                    />

                    <Label>Title: </Label>
                    <Control
                        {...this.state.title}
                        onChange = {
                            e => this.onChange(this.state.title.name, e.target.value)
                        }
                    />

                    <Label>Type:</Label>
                    <Control {...this.state.type}
                             onChange = {
                                 e => this.onChange(this.state.type.name, e.target.value)
                             }
                    >
                        <option>- select -</option>
                        <option value = 'Sci-Fi' >Sci-Fi</option>
                        <option value = 'Fantasy' >Fantasy</option>
                        <option value = 'Historical' >Historical</option>
                        <option value = 'Horror' >Horror</option>
                        <option value = 'other' >other</option>
                    </Control>

                    <Label>Decription:</Label>
                    <Control
                        {...this.state.description}
                        onChange = {
                            e => this.onChange(this.state.description.name, e.target.value)
                        }
                    />
                </Group>
                <Group>
                    <Check
                        {...this.state.readCheck}
                        onChange = {
                            e => this.handleChecked( e.target.checked, e.target.value)
                        }
                    />
                </Group>
                <Button type='submit' >Submit</Button>
            </Form>
        </AddForm>
    }
}