
const usuario = {
    username: 'andres',
    email: 'correo@google.com',
    age: 20,
    ranking: 9,
}

//desestructuración
const nombreUsuario = usuario.username;

//desestructuración
const {username, ranking, age} = usuario;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);
console.log(nombreUsuario);