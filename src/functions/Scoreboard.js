export const addScores = (score, gameId) => {
    return (scoring) => {
        fetch(`http://localhost:3000/games/${gameId}/scores`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(score)
        })
        .then(resp => resp.json())
        .then(game => {
            scoring({type: 'ADD_SCORE', payload: game})
        })
    };
};


export const removeScore = (scoreId, gameId) => {
    return (removal) => {
        fetch(`http://localhost:3000/games/${gameId}/scores/${scoreId}`, {
            method: 'DELETE'
        })
        .then(resp =>resp.json())
        .then(games =>
            removal({type: 'DELETE_SCORE', payload: games}))
    };
};

