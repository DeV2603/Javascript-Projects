const clock = document.querySelector(".clock");
const startStop = document.getElementById("startStop");
const reset = document.getElementById("reset");
const show = document.querySelector("span");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalID;

let btnCnt = 0;

const timerFunction = () =>{

    intervalID = setInterval(()=>{
        seconds += 1;
        if(seconds>59){
            seconds=0;
            minutes+=1;
        }
        if(minutes>59){
            minutes=0;
            hours+=1;
        }

        const showHours = String(hours).padStart(2,"0");
        const showMinutes = String(minutes).padStart(2,"0");
        const showSeconds = String(seconds).padStart(2,"0");

        console.log(`${showHours}:${showMinutes}:${showSeconds}`);

        show.innerText = `${showHours}:${showMinutes}:${showSeconds}`;

    },1000);
}

const startAndStop = () =>{
    if(btnCnt%2==0){
        startStop.innerText = "Stop";
        timerFunction();
        btnCnt++;
    }
    else{
        startStop.innerText = "Start";
        stopFunction();
        btnCnt++;
    }
}

const stopFunction = () =>{
    clearInterval(intervalID);
}

const resetFunction = () =>{
    stopFunction();
    seconds=0;
    hours = 0;
    minutes = 0;

    show.innerText = `00:00:00`;
    btnCnt=0;
    startStop.innerText = "Start";
}
