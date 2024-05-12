function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

function generateRandomLetters(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
}

function redirectToRandomPrntSc() {
    const randomNumber = generateRandomNumber();
    const randomLetters = generateRandomLetters(4);
    const url = `https://prnt.sc/${randomNumber.toString().padStart(2, '0')}${randomLetters}`;
    window.location.href = url;
}
