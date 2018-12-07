const axios = require('axios');

const getLugarLatLng = async(direccion) =>{
        // para salvar los espacios entre ciudad y pais ejm (Popayan Colombia)
    // usamos urls amigables asi
    let encodeUrl = encodeURI(direccion)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
        
        if (resp.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultados para la ciudad: ${direccion}`)
        }
            //para ver la informacion completa en consola como lo muestra postman podemos usar 
            //console.log(JSON.stringify(result.data, undefined, 2));

            //obtenemos la direccion

            let location = resp.data.results[0];
            let latlng = location.geometry.location;

            // console.log('Direccion: ' + location.formatted_address);
            // console.log(`lat: ${ latlng.lat}`);
            // console.log(`lng: ${ latlng.lng }`);
            //console.log(result.data);
            // console.log(result.status);

    return{
        direccion: location.formatted_address,
        lat: latlng.lat,
        lng: latlng.lng
    }

}

module.exports = {
    getLugarLatLng
}
