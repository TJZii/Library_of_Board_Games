import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addScores} from '../functions/Scoreboard';

class ScoreSetup extends React.Component {
    state = {
        score: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit= e => {
        e.preventDefault();
        this.props.addScores(this.state, this.props.games.id);
        this.setState({
            title: ''
        });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>

                    <h5>Add a New Winning Score</h5>

                    <FormGroup row>
                        <Label for='title'>Previous Winning Scores:</Label>
                        <Col>
                         <Input type='text' name='title' value={this.state.title} placeholder='MM/DD/YYYY -- Score' onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>

                    <Button>Add Score</Button>

                </Form>
            </div>
        )
    };

};


export default connect(null, {addScores})(ScoreSetup);