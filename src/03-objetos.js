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

console.log(factura.name);
console.log(factura.date);
//modificar el cliente
//factura.client.name= 'Pepe'
console.log(factura.client='Pepe Roe');
//factura.total=5000;
console.log('Total: '+factura.total());

const greeting = factura.greeting();

console.log(greeting);