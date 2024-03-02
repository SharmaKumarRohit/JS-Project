const button = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

button.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'ivory') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'crimson') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'cadetblue') {
            body.style.backgroundColor = e.target.id;
        }
    })
})