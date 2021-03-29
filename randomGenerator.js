let names = ['David', 'Jvu', 'Tommy', 'Allyson', 'Lauren', 'Christine', 'Joon'];

function shuffle(array) {
  var currentIndex = array.length;

  while (currentIndex > 0) {

    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(names);
let mid = Math.floor(names.length / 2);
console.log('Team 1: ', names.slice(0, mid));
console.log('Team 2: ', names.slice(mid));