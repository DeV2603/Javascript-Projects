const daysElement = document.querySelector(".days"); 
const hoursElement = document.querySelector(".hours"); 
const minutesElement = document.querySelector(".minutes"); 
const secondsElement = document.querySelector(".seconds"); 
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timerFunction = () => {

  let now = new Date();
  let dd = String(now.getDate()).padStart(2,"0"),
  mm = String(now.getMonth() + 1).padStart(2,"0"),
  yyyy = now.getFullYear();

  let enterdDay = prompt("Enter Day").padStart(2,"0");
  let enterdMonth = prompt("Enter Month").padStart(2,"0");

  while(enterdDay<1 || enterdDay>31 || enterdMonth<1 || enterdMonth>12){
    alert("Enter a valid date");
    enterdDay = prompt("Enter Day").padStart(2,"0");
    enterdMonth = prompt("Enter Month").padStart(2,"0");
  }

  now = `${mm}/${dd}/${yyyy}`
  let targetDate = `${enterdMonth}/${enterdDay}/${yyyy}`;
  
  // console.log(`${enterdMonth}/${enterdDay}/${yyyy}`);
  
  if(now>targetDate){
    targetDate = `${enterdMonth}/${enterdDay}/${yyyy+1}`;
  }

  const intervalId =  setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const diff = timer - today;

    const leftDay = Math.floor(diff / day);
    const leftHours = Math.floor((diff % day) / hour);
    const leftMinutes = Math.floor((diff % hour) / minute);
    const leftSeconds = Math.floor((diff % minute) / second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    secondsElement.innerText = leftSeconds;


    // console.log(`${leftDay} : ${leftHours} : ${leftMinutes} : ${leftSeconds}`);

    console.log(diff);  
    if(diff<0){
      counterTimer.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalId);
    }


  }, 1000);
};
timerFunction();
