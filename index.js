


var getData = function (){
    var name = document.getElementById("name").value;
    console.log(name);
}

const apiKey = '25745ce0da2954b896c845ab208d6851';

const getInitialData = async () =>{
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Huamantla&appid=${apiKey}&units=metric`);
}

