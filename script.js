const btn = document.getElementById('myButton');
const colors = ['yellow', 'green', 'red'];
let index = 0;

btn.addEventListener('click', function onClick() {
        btn.style.backgroundColor = colors[index];
        btn.style.color = 'black';
        if(index = colors.length ) {
            index = 0;
        } else {
            index = index + 1;
        }
})

function changeColor() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'black';
    if(index = colors.length ) {
        index = 0;
    } else {
        index = index + 1;
    }
}
setInterval(changeColor, 10000);
