//objeto
const facturas = [
    {
      id: 1,
      name: "Compras de oficina",
      client: {
        name: "John",
        lastname: "Doe",
      },
      items: [
        {
          producto: "keyboard",
          precio: 399,
          cantidad: 2,
        },
        {
          producto: "mouse",
          precio: 200,
          cantidad: 1,
        },
        {
          producto: "paper",
          precio: 100,
          cantidad: 10,
        },
      ]
    },
    {
      id: 2,
      name: "Compras de Computación",
      client: {
        name: "John",
        lastname: "Doe",
      },
      items: [
        {
          producto: "keyboard",
          precio: 399,
          cantidad: 2,
        },
        {
          producto: "MONITOR",
          precio: 800,
          cantidad: 1,
        },
        {
          producto: "CPU RYZEN",
          precio: 1200,
          cantidad: 10,
        },
      ]
    },
    {
      id: 3,
      name: "Compras de papelería",
      client: {
        name: "John",
        lastname: "Doe",
      },
      items: [
        {
          producto: "keyboard",
          precio: 399,
          cantidad: 2,
        },
        {
          producto: "lápiz",
          precio: 800,
          cantidad: 1,
        },
        {
          producto: "paper",
          precio: 100,
          cantidad: 10,
        },
      ]
    }
  ];
  
   //bucle 
  
   const facturaNombre = facturas.map(i => {
      return i.name;
   });
  
   console.log(facturas);
   console.log(facturaNombre);
  
   const facturaCliente = facturas.map(i => {
      return i.client.name;
   });
  
   console.log(facturaCliente);
  //buscar alguna factura por el id
   const facturaPorID = facturas.find(i => i.id === 3);
   console.log(facturaPorID);
  
   const facturaPorNombre = facturas.find(i => i.name === 'Compras de oficina');
   console.log(facturaPorNombre);
  
   const facturaFiltro = facturas.filter(i => i.id > 1);
   console.log(facturaFiltro);
  
   const facturaFiltro2 = facturas.filter(i => i.items.includes({
      producto: "paper",
          precio: 100,
          cantidad: 10,
   }));
  
  console.log(facturaFiltro2);
  
  const resultado = facturas.some(i => i.client.name === 'Pepe');
  
  console.log(resultado)