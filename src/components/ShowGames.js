import React from 'react';
import {connect} from 'react-redux';
import {Card, CardBody, CardTitle, CardImg, Button} from 'reactstrap';
import Scores from '../hubs/Scores';
import {deleteGame, toggleOwned, toggleWishlist} from '../functions/libraryFunctions';

const ShowGames = (props) => {

    let game = props.games.filter(game => game.id === props.match.params.id)[0];

    const handleDelete = () => {
        props.deleteGame(game.id);
        const path = `/games`;
        props.history.push(path);
    };

    const handleOwn = () => {
        props.toggleOwned(game, game.id)
    }

    const handleWish = () => {
        props.toggleWishlist(game, game.id)
    }

    return (
        <div>
          <Card className = 'ShowGames'>
          <CardBody>
              <CardTitle style={{border: 'dotted' }}>{game.name}, {game.minPlayers} to {game.maxPlayers}</CardTitle>
              <CardImg className='GameImage' src={game.image} alt={game.name} /><br></br><br></br>
            </CardBody>
            <Button onClick={handleOwn} className='OwnedButton' style={{alignItems: 'center' }}>
              {game && game.owned === false ? 'Add to Owned' : 'You own this Game'}
            </Button>
            <Button onClick={handleWish} className='WishButton'>
              {game && game.wished === false ? 'Add to Wish-List' : 'This is on your Wish-List'}
            </Button>
            <Button onClick={handleDelete} className='DeleteButton'>Remove this Game</Button>
          </Card>
    
            <Scores game={game} />
        </div>
    );

};

export default connect(null, {deleteGame, toggleOwned, toggleWishlist})(ShowGames);