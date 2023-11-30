const timerWrapper = document.querySelector(".timer_wrapper");
const buttons = document.querySelector(".buttons");
const timer = document.querySelector(".timer");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const description = document.querySelector(".description");

const endWrapper = document.querySelector(".end_wrapper");
const buttonEnd = document.querySelector(".reminder_button");

const body = document.querySelector("body");
let circleNumber = 1;
const lastCircle = 3;

let changeTimer = 1;
const minutes = document.querySelector(".minutes");
const secTens = document.querySelector(".sec_tens");
const sec = document.querySelector(".sec");

changeStartTime(changeTimer);

const startValues = {
    minutes: minutes.innerHTML,
    secTens: secTens.innerHTML,
    sec: sec.innerHTML
};

let interval;
let firstDescrInterval;
let descriptionInterval;

timerWrapper.classList.toggle('none');
buttons.style.animation = '.5s gap_anim cubic-bezier(.45, -0.67, .53, 1.63) 1 forwards';
timer.style.animation = '.5s timer_appear cubic-bezier(.45, -0.67, .53, 1.63) 1 forwards';
description.style.animation = '.5s descr_appear cubic-bezier(.45, -0.67, .53, 1.63) 1 forwards';
mainCircleFunc();

function changeTimerFunc() {
    if (+sec.innerHTML) {
        sec.innerHTML--;
    }

    else if (+secTens.innerHTML) {
        secTens.innerHTML--;
        sec.innerHTML = '9';

    }

    else if (+minutes.innerHTML) {
        minutes.innerHTML--;
        secTens.innerHTML = '5';
        sec.innerHTML = '9';
    }

    else {
        ++circleNumber;
        switch (circleNumber) {
            case 2: // задержка дыхание на 30
                end();
                // changeTimer = 30;
                // changeStartTime(changeTimer);
                // mainCircleFunc();
                // break;

            case 3: // задержка дыхание на 15
                changeTimer = 15;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;
            
            case 4: // 30 вдох-выдохов
                changeTimer = 1;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;

            case 5: // задержка дыхание на 60
                changeTimer = 60;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;
            
            case 6: // задержка дыхание на 15
                changeTimer = 15;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;

            case 7: // 30 вдох-выдохов
                changeTimer = 1;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;

            case 8: // задержка дыхание на 90
                changeTimer = 90;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;
            
            case 9: // задержка дыхание на 15
                changeTimer = 15;
                changeStartTime(changeTimer);
                mainCircleFunc();
                break;

            case 10:
                window.location.href = './index.html';
                break;
        }
    }
}

function changeStartTime(startTime) {
    minutes.innerHTML = +Math.floor(startTime / 60);
    secTens.innerHTML = Math.floor((startTime - minutes.innerHTML * 60) / 10);
    sec.innerHTML = startTime % 10;
}


function changeDescription(firstText, lastText) {
    description.innerHTML = firstText;
    description.style.opacity = '100%';
    description.style.color = `rgb(209, 60, 209)`;
    
    setTimeout(() => {
        description.style.opacity = '0';
    }, 2500);
    setTimeout(() => {
        description.innerHTML = lastText;
        description.style.color = "white";
        description.style.opacity = '100%';
    }, 5000);
    setTimeout(() => {
        description.style.opacity = '0';
    }, 7500);
}


function mainCircleFunc() {

    clearInterval(interval);
    clearTimeout(firstDescrInterval);
    clearInterval(descriptionInterval);

    let firstText = 'Сделайте глубокий вдох';
    let lastText = 'Выдохните';
    
    if (circleNumber % 3 === 0 || circleNumber % 3 === 2) {
        firstText = 'Не дышите';
        lastText = 'Не дышите';
    }

    interval = setInterval(changeTimerFunc, 1000);
    firstDescrInterval = setTimeout(changeDescription, 0, firstText, lastText);
    descriptionInterval = setInterval(changeDescription, 10000, firstText, lastText);

    pause.onclick = function() {
        if (this.classList.contains('resume')) {
            this.innerHTML = 'пауза';
            interval = setInterval(changeTimerFunc, 1000);
        }

        else {
            this.innerHTML = 'продолжить';
            clearInterval(interval);
        }

        description.classList.toggle('hidden');
        this.classList.toggle('resume');
    }
}


function end() {
    timerWrapper.style.opacity = '0';
    setTimeout(() => {
        timerWrapper.classList.add('none');
        endWrapper.classList.remove('none');
        endWrapper.style.opacity = '100%';
        buttonEnd.onclick = () => {
            endWrapper.style.opacity = '0';
            setTimeout(() => {
                location.href = './index.html';
            }, 400);
        };
    }, 400);

    setTimeout(() => {
        endWrapper.style.opacity = '0';
    }, 9500);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 10000);
}


// reset.onclick = function() {

    

//     // clearInterval(interval);
//     // clearTimeout(firstDescrInterval);
//     // clearInterval(descriptionInterval);

//     // circleNumber = 1;
//     // minutes.innerHTML = startValues.minutes;
//     // secTens.innerHTML = startValues.secTens;
//     // sec.innerHTML = startValues.sec;
        
//     // if (!pause.classList.contains('resume')) {
//     //     pause.innerHTML = 'начать';
//     //     pause.classList.toggle('resume');
//     //     description.classList.toggle('hidden');
//     // }

// }





