function gettingDateByClick(){
    const getData = document.getElementById("search-button");
    const getDataOne = getData.value;
    console.log(getDataOne);
    getDataFromFetch();
    displayOutput();
    
}



function getDataFromFetch(){
    const areInput = document.getElementById("input-from-user");
    const inputValue = areInput.value;
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=4a640ca36a6563d09e7a09a8517134ac`)
    .then(response => response.json())
    .then (weather => displayData(weather))
    

    function displayData(weather){
        
        const nameValue = document.getElementById("myCity");
        nameValue.innerText = `${weather.name}`;

        const tempValue = document.getElementById("temperature");
        tempValue.innerHTML =`${Math.round(weather.main.temp)}<span>&deg;C</span>`;

        const getDescription = document.getElementById("description");
        getDescription.innerHTML = weather.weather[0].main;
    }       
}




    


        



