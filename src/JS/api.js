const key = "51c5328cef61e4185cc5ca37efaefdc7";
const inputSearch = document.querySelector('#input-search');
const cityName = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const icon = document.querySelector("#icon");
const umidity = document.querySelector('#umidity');
const wind = document.querySelector('#wind');
const countryFlag = document.querySelector('#country-flag');
const msgalert = document.querySelector('.msg-alert')
const getData = async(cityValue) =>{
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${key}&lang=pt_br`;
    const res = await fetch(apiUrl);
    if(res.statusText != "OK"){
        const preData = false
        return preData;
    }
    const preData = await res.json();
    return preData;
        
       
}

const showData = async()=>{
    
    const data = await getData(inputSearch.value);

    if(data!=false){

        containerSearch.style.animationName = 'up';

        setTimeout(()=>{
            containerData.style.display = 'flex';
        },100);

        setTimeout(()=>{
            for( let i = 0; i<hide.length;i++){
                hide[i].style.opacity = 1;
            }
        },700);

        cityName.innerHTML = data.name;
        temperature.innerHTML = data.main.temp + ' &deg C'
        description.innerHTML = data.weather[0].description
        umidity.innerHTML = data.main.humidity +"%";
        wind.innerHTML = data.wind.speed +" km/h";
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        countryFlag.setAttribute("src", `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`);
    } else{
        errorMsg("Cidade não encontrada")
        return;
    }
}


