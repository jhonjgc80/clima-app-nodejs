// const axios = require('axios');

const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//console.log(argv.direccion);

let getInfo = async(direccion)=>{

    try {
        let coord = await getLugarLatLng(direccion);
        let clima = await getClima(coord.lat, coord.lng)

        return `EL clima en ${ coord.direccion } presenta una temperatura de ${clima.temperatura}, una presión de ${clima.presión} y una humedad de ${clima.humedad}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensage =>console.log(mensage))
    .catch(e => console.log(e));

