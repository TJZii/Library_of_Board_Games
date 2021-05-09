  
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const YourGames = (props) => {

    return (
        <div>
            <h3>Your Game Library</h3>

            {props.games.map(game => {
                if(game.owned === true) {
                    return (
                        <Link key={game.id} to={`/games/${game.id}`}>
                            <Card className='gameCard'>
                                <CardBody>
                                    <CardTitle>{game.name}, {game.minPlayers} to {game.maxPlayers} players.</CardTitle>
                                    <CardImg className='gameCard' src={game.image} alt={game.name}/>
                                </CardBody>
                            </Card>
                        </Link>
                    )
                }else{
                    return(null);
                }
            })}
        </div>
    );
};

export default YourGames;