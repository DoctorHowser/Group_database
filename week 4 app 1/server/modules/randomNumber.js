function randomNumber(min, max){

    min = Number(min);
    max = Number(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber;