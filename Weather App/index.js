const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "delhi india"

const fetchData = async(target)=>{

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=e4b1b92c27344bc9bcb213127231512&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    const{
        current:{temp_c,condition:{
            text,icon}
        },
        location:{name,localtime}
    } = data;

    
    updateDom(temp_c,name, localtime,icon,text);
    } catch (error) {
        alert("Location not found");
    }
}
fetchData(target);

function updateDom(temperature,city,time,emoji,text){
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDayFullName(new Date(exactDate).getDay());

    // console.log(getDayFullName(exactDay));

    temperatureField.innerText = temperature;
    cityField.innerText = city;
    emojiField.src = emoji;
    weatherField.innerText = text;
    dateField.innerText = `${exactTime} - ${exactDay} ${exactDate}`;
}

function getDayFullName(num){
    switch (num) {
        case 0:
            return "Sunday"
            break;
    
        case 1:
            return "Monday"
            break;
    
        case 2:
            return "Tuesday"
            break;
    
        case 3:
            return "Wednesday"
            break;
    
        case 4:
            return "Thursday"
            break;
    
        case 5:
            return "Friday"
            break;

        case 6:
            return "Saturday"
            break;
    
        default:
            return "Don't know";
            break;
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    target = searchField.value;

    fetchData(target);
})