let shape = document.getElementById('shape');
let result = document.getElementById('result');
let start = new Date().getTime(); // give milliseconds value

function generateRandomColor() {
    let color = "0123456789ABCDEF";
    let hash = "#";
    for(let i = 0; i < 6; i++) {
        hash += color[Math.floor(Math.random() * 16)];
    }
    return hash;
}

function move() {
    let left = Math.floor(Math.random() * 300);
    let top = Math.floor(Math.random() * 300);
    let wh = Math.floor(Math.random() * 200) + 100;
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    start = new Date().getTime();
    shape.style.backgroundColor = generateRandomColor();
    shape.style.display = "block";
}

move();

shape.onclick = function() {
    shape.style.display = "none";
    let end = new Date().getTime(); // give milliseconds value
    let timeOut = (end - start) / 1000; // convert it milliseconds to seconds
    // alert("Your reaction time on clicking the box is " + timeOut);
    result.innerHTML = `Your reaction time on clicking the box is ${timeOut}`;
    move();
}