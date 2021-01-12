const prompt = require('prompt')

let playerX = [];
let playerO = [];
let winningHand = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

let board = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'
]

let printBoard = () => {
  console.log(
    '\n' + ' ' + board[0] + ' ' + '|' + ' ' + board[1] + ' ' + '|' + ' ' + board[2] + '\n' +
    '------------' +
    '\n' + ' ' + board[3] + ' ' + '|' + ' ' + board[4] + ' ' + '|' + ' ' + board[5] + '\n' +
    '------------' +
    '\n' + ' ' + board[6] + ' ' + '|' + ' ' + board[7] + ' ' + '|' + ' ' + board[8] + '\n'
  )
}

printBoard();

let makeMove = (position, player) => {
  board[position] = player;
}

let playGame = (player) => {
  console.log(player + '\'s Turn')
  prompt.start();
  prompt.get(['position'], (err, result) => {
    // if (board[result.position] === ('X' || 'O')) {
    //   console.log('invalid move, please try again');
    //   playGame(player);
    // } else {
      makeMove(result.position, player)
      printBoard();
    // }
    if (player === 'X') {
      playerX.push(result.position)
      console.log('Player X Hand: ', playerX)
      playGame('O')
    } else {
      playerO.push(result.position)
      console.log('Player O Hand: ', playerO)
      playGame('X')
    }
  })
}

playGame('X')