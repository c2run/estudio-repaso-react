
export const paper = {
    producto: 'paper',
    precio: 100,
    cantidad: 10,
};

export const facturas = [
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
        name: "Juan",
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

  export default (clientName) => {
    return facturas.find(i => i.client.name === clientName);
  }
  
  
export const facturaPorId = (id) => {
  return facturas.find(i => i.id === id)
}

export const encontrarFacturaPorId = (id) => {
  const promesa = new Promise((resolve, reject) => {

      //settimeout simula un delay (espera)
      //después de 2.5 segundos se ejecuta lo que está dentro del timeout
      setTimeout(() => {
          //console.log('realizando alguna tarea con delay ');
          const result = facturaPorId(id);
  
          if(result){
              resolve(result);
          }else{
              reject('error: no existe la factura por el id');
          }
  
          resolve(result);
      }, 2500);
  });
  return promesa;
}



