function isCardNumberValid(number) {
    return /^\d{16}$/.test(number);
}

function submitHandler(event) {
    event.preventDefault();

    let errorMsg = '';

    document.querySelector('.errorMsg').innerHTML = '';

    const cardNumber = document.getElementById('cardNumber').value;
    if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number must be a 16-digit number.\n';
    }


    const expiryMonth = parseInt(document.getElementById('expiryMonth').value, 10);
    const expiryYear = parseInt(document.getElementById('expiryYear').value, 10);
    const currentDate = new Date();
    const inputDate = new Date(expiryYear, expiryMonth - 1);

    if (inputDate < currentDate) {
        errorMsg += 'Card has expired.\n';
    }


    if (errorMsg !== '') {
        document.querySelector('.errorMsg').innerHTML = errorMsg;
        return false;
    }


    alert('Form submitted successfully!');

}

document.getElementById('credit-card').addEventListener('submit', submitHandler);
