
//objeto
const factura = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name:'John',
        lastname: 'Doe',
        age:20,
    },
    items: [
        {
        producto: 'keyboard',
        precio: 399,
        cantidad: 2,
         },
         {
            producto: 'mouse',
            precio: 200,
            cantidad: 1,
             },
             {
                producto: 'paper',
                precio: 100,
                cantidad: 10,
                 },
    ],
    total:function(){
        let total = 0;
   this.items.forEach(item => {
            total=total+item.precio*item.cantidad;
    });
    return total;
    },
    
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};

//con spread se copia el objeto -> ...
const factura2 = {...factura};
const resultado = factura === factura2;

if(resultado){ console.log(resultado)
}else{ console.log('no son iguales')
}

factura2.id = 20;

console.log(factura.id);
console.log(factura2.id);