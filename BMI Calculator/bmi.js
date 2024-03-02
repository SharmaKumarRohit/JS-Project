const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = +(document.querySelector("#height").value);
    const height2 = document.querySelector("#height");
    const weight = +(document.querySelector("#weight").value);
    const weight2 = document.querySelector("#weight");
    const results = document.querySelector("#results");
    const under = document.querySelector("#under");
    const normal = document.querySelector("#normal");
    const over = document.querySelector("#over");

    if(!height || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height(${height})`;
        height2.style.borderColor = "crimson";
    }
    else if(!weight || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight(${weight})`;
        weight2.style.borderColor = "crimson";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        height2.style.borderColor = "#888";
        weight2.style.borderColor = "#888";

        if(bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span>`;
            under.style.color = "#b8b800";
            normal.style.color = "#02111B";
            over.style.color = "#02111B";
        }
        else if(bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi}</span>`;
            normal.style.color = "#00eb5e";
            under.style.color = "#02111B";
            over.style.color = "#02111B";
        }
        else {
            results.innerHTML = `<span>${bmi}</span>`;
            over.style.color = "#dc143c";
            under.style.color = "#02111B";
            normal.style.color = "#02111B";
        }
    }
})