const prompt = require('prompt')

let playerX = [];
let playerO = [];

const winCondition = (hand, player) => {
  let winningHand = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6']
  ]

  let count = 0;
  for (var i = 0; i < winningHand.length; i++) {
    // console.log(count)
    if (count === 3) {
      console.log(player + 'is the winner!')
      break;
    }
    for (var j = 0; j < winningHand[i].length; j++) {
      // console.log('Winning Hand', winningHand[i][j])
      // console.log(hand.includes(winningHand[i][j]))
      if (hand.includes(winningHand[i][j])) {
        count++
      } else {
        count = 0;
      }
    }
  }
}

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
      winCondition(playerX, player)
      console.log('Player X Hand: ', playerX)
      playGame('O')
    } else {
      playerO.push(result.position)
      winCondition(playerO, player)
      console.log('Player O Hand: ', playerO)
      playGame('X')
    }
  })
}

playGame('X')