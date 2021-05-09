import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const WishList = (props) => {

    return (
        <div className='WishListDiv'>
            <h3>Games on your Wish-List</h3>

            {props.games.map(game => {
                if(game.wished === true) {
                    return (
                        <Link key={game.id} to={`/games/$game.id`}>
                            <Card key={game.id} className='gameCard'>
                                <CardBody>
                                    <CardTitle>{game.name}, {game.minPlayers} to {game.maxPlayers} players.</CardTitle>
                                    <CardImg className='gameCard' src={game.image} alt={game.name}/>
                                </CardBody>
                            </Card>
                        </Link>
                    );
                }else{
                    return null;
                }
            })}
        </div>
    );
};

export default WishList;