import React from 'react';
import ScoreSetup from '../components/ScoreSetup';
import ScoreListing from '../components/ScoreListing';

class Scores extends React.Component {

    render() {
        return (
            <div>
                <ScoreSetup games={this.props.games}/>
                <ScoreListing scores={this.props.games && this.props.games.scores}/>
            </div>
        );
    }
};

export default Scores;