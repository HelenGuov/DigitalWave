import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import { Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';


import './style.css'; 
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm : '', 
            nameInput : null, 
        }
    }

    render() {
        bootstrapUtils.addStyle(FormGroup, 'custom');
        return (
           
            <Col className="search-bottom-space" mdOffset={3} md={6}>
                <Form inline onSubmit={(e) => {e.preventDefault(); this.handleFormSubmit(e)}}>
                    <FormGroup controlId="searchControl">
                        <FormControl onChange={(e) => this.handleInputChange(e)} type="text" 
                             />
                    </FormGroup>
                    {'    '}
                    <Button type="button" onClick={(e) => this.handleFormSubmit(e)}> Search </Button>
                </Form>
            </Col>);
    }

    handleFormSubmit(e) {
        $("#searchControl").blur(); 
        console.log('search bar ', this.state.searchTerm); 
        this.props.onSearchSubmit(this.state.searchTerm); 
    }

    handleInputChange(e) {
        this.setState({ searchTerm : e.target.value }); 
    }
}