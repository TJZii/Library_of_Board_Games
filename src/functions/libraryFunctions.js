export const fetchGames = () => {
    return (boardGame) => {
        fetch('https://localhost:3000/games')
          .then(resp => resp.json())
          .then(games => boardGame({
              type: 'FETCH_GAMES',
              payload: games
          }))
    };
};


export const addGame = (gameData, history, path) => {
    return (boardGame) => {
        fetch('https://localhost:3000/games', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameData)
        })
        .then(resp => resp.json())
        .then(games => {
            history.push(path)
            dboardGame({type: 'ADD_GAME', payload: games})
        })
    };
};

export const deleteGame = (gameId) => {
    return (gameKiller) => {
        fetch(`http://localhost:3000/games/${gameId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(games => {
            dispatch({type: 'DELETE_GAME', payload: games.id})
        })
    };
};


export const toggleOwned = (games, gameId) => {
    const updatedOwnership = {...games, owned: !games.owned};

    return (dispatch) => {
        fetch(`http://localhost:3000/games/${gameId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'appication/json'},
            body: JSON.stringify({games: updatedOwnership})
        })
        .then(resp => resp.json())
        .then(games => {
            dispatch({type: 'TOGGLE_OWNED', payload: games})
        })
    };
};


export const toggleWishlist = (games, gamesId) => {

    const updatedWishlist = {...games, wished: !games.wished};

    return (dispatch) => {
        fetch(`http://localhost:3000/games/${gameId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({destination: updatedBucketList})
        })
        .then(resp => resp.json())
        .then(games => {
            dispatch({type: 'TOGGLE_WISHLIST', payload: games})
        })
    };
};