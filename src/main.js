


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
/*
httpCliente
.then(respuesta => respuesta.json())
.then(datos => console.log(datos))
*/

//función asíncrona. el await se maneja en segundo plano un proceso en paralelo.
const encontrarTodosLosUsuarios = async() => {
//el fetch es una promesa y devuelve una respuesta (response) 
const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
const usuarios = await respuesta.json();
const ul = document.createElement('ul');

usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.innerText = usuario.name;
    ul.append(li);
    console.log(usuario.name)
});
    document.getElementById('root').append(ul);
}

encontrarTodosLosUsuarios();

console.log('Hola que tal síncrono!');