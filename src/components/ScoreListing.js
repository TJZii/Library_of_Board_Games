import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {removeScore} from '../functions/Scoreboard';

const ScoreListing = (props) => {
    const deletedScore = (activity) => {
        props.removeScore(scores.id, scores.games_id)
    }

    return (
        <div>
            {props.scores && props.scores.length === 0 ? <h6>There are no current scores for this game.</h6> : <h5>Previous Scores</h5>}
            <ListGroup>
                {props.scores && props.scores.map(score =>
                    <ListGroupItem key={score.id}>{score.value} <Button onClick={() => removeScore(score)}>Delete this Score </Button> </ListGroupItem>)}
            </ListGroup>
        </div>
    );
};

export default connect(null, {removeScore})(ScoreListing);