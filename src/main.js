
//el fetch es una promesa y devuelve una respuesta (response) 
const httpCliente = fetch('https://jsonplaceholder.typicode.com/users');

//en el then se emite el valor de la respuesta
/*
httpCliente.then(respuesta => {
   // console.log(respuesta)
   //json es una promesa
   respuesta.json().then(datos => {
        console.log(datos)
   })
})
*/
//la promesa tiene delay (retraso)
httpCliente
.then(respuesta => respuesta.json())
.then(datos => console.log(datos))

console.log('Hola que tal síncrono!')