import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';

const GamesList = (props) => {
    return (
        <div className='gameListDiv'>
            <Link to='/games/new' className='newGameButton' role='button'>Add a New Game</Link>

            <h3 style={{color:'teal', margin: '20px'}}>Your Games</h3>
            {props.games.map(game =>
                <Link key={game.id} to={`/games/${game.id}`}>
                    <Card className='GameCard'>
                        <CardBody>
                            <CardTitle>{game.name}, {game.minPlayers} to {game.maxPlayers} players.</CardTitle>
                            <CardImg className='GameImage' src={game.image} alt={game.name}/>
                        </CardBody>
                    </Card>
                </Link>
                )}
        </div>
    );
};

export default GamesList;