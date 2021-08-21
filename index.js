const fizzbuzz = () => {
  console.log('fb')
  for (let i = 1; i <= 100; i++) {
    let remainder = i % 15
    if (i % 15 === 0){
      console.log('FizzBuzz')
    } else if (i % 5 === 0){
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    }
    let remainder = i % 15
    switch(remainder){
      case (remainder % 5 === 0):
        console.log('Fizz')
        break
      case (remainder % 3 === 0):
        console.log('Buzz')
        break
      case 0:
        console.log('FizzBuzz')
        break
    }
  }
}

const chessboard = (width = 8) => {
  let board = ''
  let value = false
  for (let i = 1; i < Math.pow(width, 2)+1; i++) {
    let t
    if (width % 2 === 0) {
      t = i + value
    } else {
      t = i
    }
    if (t % 2 === 0) {
     board = board.concat('* ')
    } else {
      board = board.concat('# ')
    }
    if (i !== 0 && i % width === 0) {
      board = board.concat('\n')
      value = !value
    }
  }
  return board
}

const runchessboard = () => {
  res = prompt('Specify a width')
  while(true) {
    if (res !== (null)) {
      let parsedRes = parseFloat(res)
      if (parsedRes.toString() !== 'NaN') {
        console.log('ye')
        res = prompt(chessboard(parsedRes))
      } else {
        console.log('eh')
        res = prompt("That's not a valid number")
      }
    } else {
      break
    }
  }
}