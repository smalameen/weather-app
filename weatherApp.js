const api = {
    key :"4a640ca36a6563d09e7a09a8517134ac",
    base : "https://api.openweathermap.org/data/2.5/"
}

function gettingDateByClick(){
    const getData = document.getElementById("search-button");
    const getDataOne = getData.value;
    console.log(getDataOne);
    getDataFromFetch();
    
}
// function getInputFromUser(){
   
//     getDataFromFetch();
// }
function getDataFromFetch(){
    const areInput = document.getElementById("input-from-user");
    const inputValue = areInput.value;
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=celsius&APPID=4a640ca36a6563d09e7a09a8517134ac`)
    .then(res => res.json())
    .then(weather => console.log(weather))

    .then(showInput());
}

function showInput(name){
    let myCity = document.getElementById("myCity");
    myCity.innerText = `${name}`;
}
        


// const searchBox =  document.getElementById("search-button");
// searchBox.addEventListener("click", setQuery);

// function setQuery (event){
//     if(event.keyCode === 13){
//         getResults(searchBox.value);
//         console.log(searchBox.value);
//     }
// }

// function getResults(query){
//     fetch (`${api.base}weather?q=${query}&units=celsius&APPID=${api.key}`)
//     .then (weather => {
//         return weather.json();

//     }) 
//     .then (displayResults);
// }

// function displayResults(weather){
//     console.log(weather);
    
// }
