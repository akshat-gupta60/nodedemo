const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please write the name before search`;

    }
    else{
            try{
            let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityVal}&appid=573546db852e108762cb8c4cf9feb08f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText  = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            }
            catch{
                city_name.innerText = `Please enter the city name properly`;
            }
    }
}






submitBtn.addEventListener('click',getInfo);
