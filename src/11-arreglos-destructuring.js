const usuarios = ['pepe', 'ana','maria','juan','sebastian'];

const [pepe,ana,maria,...resto] = usuarios;

console.log(pepe, ana, maria, ...resto);