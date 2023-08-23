const data = require('./seedData');

// GET - /api/board-games - get all boardGames
async function getAllBoardGames() {
    try{
        const boardGames = data.boardGames;
        return boardGames;
    } catch (error) {
        throw error;
    }
}

// GET - /api/board-games/:boardGameId - get boardGame by id
async function getBoardGameById(boardGameId) {
    try{
        const boardGames = data.boardGames;
        const boardGame = boardGames.find(boardGame => boardGame.id === Number(boardGameId));
        return boardGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/board-games - create a new boardGame
async function createBoardGame(body) {
    try{
        const boardGame = body;
        boardGame.id = Math.round(Math.random() * 100);
        const boardGames = data.boardGames;
        boardGames.push(body);
        return boardGame;
    } catch (error) {
        throw error;
    }
}

// PUT - /api/board-games/:boardGameId - update a boardGame
async function updateBoardGame(boardGameId) {
    try {
        const boardGames = data.boardGames;
        const boardGame = boardGames.find(boardGame => boardGame.id === Number(boardGameId));
        const index = boardGames.findIndex(boardGame => boardGame.id === Number(boardGameId));
        let newBoardGame = { ...boardGame, ...body };
        boardGames[index] = newBoardGame;
        return newBoardGame;
    } catch (error) {
        throw error;
    }
}

// DELETE - /api/board-games/:boardGameId - delete a boardGame
async function deleteBoardGame(boardGameId) {
    try{
        const boardGames = data.boardGames;
        const boardGame = boardGames.find(boardGame => boardGame.id === Number(boardGameId));
        const index = boardGames.findIndex(boardGame => boardGame.id === Number(boardGameId));
        boardGames.splice(index, 1);
        return boardGame;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBoardGames,
    getBoardGameById,
    createBoardGame,
    updateBoardGame,
    deleteBoardGame
}
