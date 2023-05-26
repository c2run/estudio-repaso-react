const usuario = {
    username: 'andres',
    email: 'correo@google.com',
    age: 20,
    ranking: 9,
}

//desestructuración
//const detail = ({username, email}) => {
//    console.log(`El detalle del usuario ${username} con correo ${email}`)
//}

//desestructuración
const detail = ({username, email}) => {
    console.log(`El detalle del usuario ${usuario.username} con correo ${usuario.email}`)
}

detail(usuario)