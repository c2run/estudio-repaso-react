

const productos = ['mesa','silla','notebook','teclado'];

productos.push('pantalla lcd');

//console.log(productos);


//productos.forEach(el => {
 //   console.log(el)
//})

for (const prod of productos){
    console.log(prod);
}

for(let i= 0; i < productos.length; i++){
    const element = productos[i];
    console.log(element);
}

console.log(productos[4]);