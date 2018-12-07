const axios = require('axios');

const getClima = async(lat, lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=eab94d02ff1b389ff10cb649615af49b`);

    //axios
    //return resp ... main.temp
    let datClima = resp.data.main;

    

    return{
        temperatura: datClima.temp,
        presión: datClima.pressure,
        humedad: datClima.humidity,
    }

}

module.exports = {
    getClima
}