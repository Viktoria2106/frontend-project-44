const isEvenNumber = (num) => {
    return number % 2 === 0;
}
const game1 = () => {
    let count = 0;
    const name = prompt("Как вас зовут?");
    while (count < 3) {
        const randomNum = Math.floor(Math.random()*100 + 1);
        const answer = promt(`Число ${randomNum} чётное? (yes/no)`).toLowercase();
        const right = isEvenNumber(randomNum) ? 'yes' : 'no';
        if (answer === right) {
            return 'Correct!';
            count++;
        }
    }
    return `Congratulations, ${name}`;
}