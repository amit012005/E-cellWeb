const squares = document.querySelectorAll('.square');
let clickOrder = [];

squares.forEach((square, index) => {
   square.addEventListener('click', () => {
       square.style.backgroundColor = 'red';
       clickOrder.push(index);
       if (index === squares.length - 1) {
           changeColorsToBlueInSequence();
       }
   });
});

function changeColorsToBlueInSequence() {
   let delay = 1000;

   clickOrder.forEach((index, sequence) => {
       setTimeout(() => {
           squares[index].style.backgroundColor = 'blue';
       }, sequence * delay);
   });
   clickOrder = [];
}
