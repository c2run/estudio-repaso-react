//objeto

import  {encontrarFacturaPorId} from './data/facturas';

encontrarFacturaPorId(3)
.then(console.log)
.catch(console.error);

//el resolve es un objeto si se cumple
//el reject es un error en caso que no se cumpla

//las promesas son asíncronas = una tarea paralela e independiente.

//se llama a la factura 3 - es síncrono - no tiene delay
//const result = facturaPorId(3);
//console.log(result)

//catch es para atrapar una excepción que sería un reject
//promesa.catch
//then es success cuando se ejecuta algo y salé bien. se cumple
//finally es para ejecutar una tarea pase lo que pase.
//promesa.then((json) => {
//    console.log(json)
//    console.log('realizada con exito alguna tarea con demora');
// }).catch((error) => {
//        console.warn(error)
// });
