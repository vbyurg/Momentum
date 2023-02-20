const nextBtn = document.querySelector(".slide-next");
const prevBtn = document.querySelector(".slide-prev");
const body = document.querySelector("body");
const hour = date.getHours();
let randomNum = getRandomNum(1, 20);
// console.log(randomNum);

// Get current time of day
function getTimeOfDay() {
    if (hour >= 6 && hour <= 11) {
        return 'morning';
    } else if (hour >= 12 && hour <= 17) {
        return 'afternoon';
    } else if (hour >= 18 && hour <= 23) {
        return 'evening';
    } else {
        return 'night';
    }
}

// Get random number
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate number
function generateBackgroundNum() {
    if (randomNum < 10) {
        return (randomNum = `0${randomNum}`);
    } else {
        return randomNum
    }
}

// Set background image
function setBg() {
    let timeOfDay = getTimeOfDay();
    const bgNum = generateBackgroundNum();

    // Сделал img, т.к. при подстановке url как текст в атрибут style для body - chrom выдает ошибку (CROB)
    const img = new Image();

    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

    img.addEventListener('load', function () {
        body.style.backgroundImage = `url('${img.src}')`;
    })
}

// Set next button
function getNextSlider() {
    if (randomNum == 20) {
        randomNum = 1;
    } else {
        randomNum++;
    }
    setBg();
}

// Set previous button
function getPrevSlider() {
    if (randomNum == 1) {
        randomNum = 20;
    } else {
        randomNum--;
    }
    setBg();
}

window.addEventListener('load', setBg)
nextBtn.addEventListener('click', getNextSlider);
prevBtn.addEventListener('click', getPrevSlider);