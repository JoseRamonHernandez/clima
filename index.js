import axios from 'axios';

const apiKey = '25745ce0da2954b896c845ab208d6851';

const getInitialData = async () =>{
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`);
}

const container = document.getElementById('div1');

const boton = document.querySelector('button');

const accion = () => {
    const imagen = document.createElement('img');
}

container.appendChild(imagen);

boton.addEventListener('click', accion);