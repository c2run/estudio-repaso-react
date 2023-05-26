const sayHello = (name='Pepe', age= 0) => {
    const greeting = ` Hola Mundo function  ${name} edad ${age}`;

    return greeting;

}

const resultado = sayHello('Andres', 10);

console.log(resultado);