import React from 'react';
import {connect} from 'react-redux';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {addGame} from '../functions/libraryFunctions';

class GamesInput extends React.Component {

    state = {
        name: '', 
        minPlayers: 0,
        maxPlayer: 0,
        image: '',
        minutesToPlay: 0,
        owned: false,
        wshed: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const path = '/games';
        this.props.addGame(this.state, this.props.history, path);
        this.setState({
            name: '', 
            minPlayers: 0,
            maxPlayer: 0,
            image: '',
            minutesToPlay: 0,
            owned: false,
            wshed: false
        });
    };

    render() {
        return(
            <div className='gameSubmissionFormDiv'>
                <Form className='gameSubmissionForm' onSubmit={this.handleSubmit}>
                    <h5>Add a New Game</h5>

                    <FormGroup row>
                        <Label for='name'>Name</Label>
                        <Col>
                            <Input type='text' name='name' value={this.state.name} placeholder='Uno...' onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='minPlayers'>Min # of Players</Label>
                        <Col>
                            <Input type='text' name='minPlayers' value={this.state.minPlayers} placeholder='3...' onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='maxPlayers'>Max # of Players</Label>
                        <Col>
                            <Input type='text' name='maxPlayers' value={this.state.maxPlayers} placeholder='8...' onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for='image'>Image URL</Label>
                        <Col>
                            <Input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for='minutesToPlay'>Minutes to Play</Label>
                        <Col>
                            <Input type='text' name='minutesToPlay' value={this.state.minutesToPlay} placeholder='30...' onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <Button>Add Game</Button>

                </Form>
            </div>
        );
    }
};

export default connect(null, {addGame})(GamesInput);