let box = document.querySelector('.box');
let getbtn = document.querySelector('.btn');
let stopbtn = document.querySelector('.stop-btn');
let colors = ['red', 'green', 'blue', 'pink', 'purple', 'grey', 'yellow', 'orange', 'brown', 'black'];
let intervalId;
function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
getbtn.addEventListener('click', function() {
    intervalId = setInterval(function() {
        let color = randomColor();
        box.style.backgroundColor = color;
    }, 500);
});
stopbtn.addEventListener('click', function() {
    if(!intervalId) {
        alert("No color change is currently happening.");
        return;
    }
    clearInterval(intervalId);
});