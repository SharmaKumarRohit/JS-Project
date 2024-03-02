const input = document.querySelector("#qr_input");
const button = document.querySelector("#qr_button");
const img = document.querySelector("#qr_img");

button.addEventListener('click', () => {
    const inputValue = input.value;

    if( !inputValue ) {
        input.style.borderColor = "red";
        return;
    }
    else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        img.alt = `QR Code for ${inputValue}`;
        input.style.borderColor = "#141414";
    }
})