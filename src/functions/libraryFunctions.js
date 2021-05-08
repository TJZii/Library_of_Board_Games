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