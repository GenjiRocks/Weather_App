search = async()=>{
    
    let placeName = place.value;
    if(placeName){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=f655893280a83607c873722c759c84fe&units=metric`)
        response.json().then((data)=>{
         console.log(data);  
         console.log(data.main.temp); 
         console.log(data.weather[0].main);
        })
    }
    else{
        alert("Please enter a place name");
    }
}