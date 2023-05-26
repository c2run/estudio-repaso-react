const productos = ['mesa','silla','notebook','teclado'];

//productos.push('pantalla lcd');
const productos2 = productos.concat(['pantalla lcd', 'sony tv']);

const frutas = ['peras', 'manzanas', 'sandias','frutillas'];

//operador spread -> ...
const mercado = [...frutas, ...productos, 'lechugas', 'papas', 'uvas'];

//método concat
const mercado2 = productos2.concat(frutas).concat('lechuga','papas','uvas');

console.log(productos2);
console.log(mercado2);