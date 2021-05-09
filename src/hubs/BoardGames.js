import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchGames} from '../functions/libraryFunctions';
import GamesInput from '../components/GamesInput';
import GamesList from '../components/GamesList';
import ShowGames from '../components/ShowGames';
import YourGames from '../components/YourGames';
import WishList from '../components/WishList';

class BoardGames extends React.Component {

    componentDidMount() {
        this.props.fetchGames()
    }

    render() {
        return (
            <div>
            <Switch>
              <Route path='/games/new' component={GamesInput} />
              <Route path='/games/owned' render={(routerProps) => <YourGames {...routerProps} games={this.props.games} />} />
              <Route path='/games/wishlist' render={(routerProps) => <WishList {...routerProps} games={this.props.games} />}  />
              <Route path='/games/:id' render={(routerProps) => <ShowGames {...routerProps} games={this.props.games} />} />
              <Route path='/games' render={(routerProps) => <GamesList {...routerProps} games={this.props.games} />} />
            </Switch>
          </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
};

export default connect(mapStateToProps, {fetchGames})(BoardGames);