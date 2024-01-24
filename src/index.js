import carrerasTecnicas, {jornadas} from "./db/information";

const buscarCarrera = (id) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carrera = carrerasTecnicas.find((i) => i.codigo == 2);
      if (carrera != null || carrera != undefined) {
        resolve(carrera);
      } else {
        reject('No existe la carrera  tecnica');
      }
    }, 2000);
  });
}

const buscarJornada = (id) => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
     const jornada = jornadas.find((i) => i.codigo == id);
     if (jornada != null || jornada != undefined) {
       resolve(jornada);
     } else {
       reject('No existe la jornada');
     }
   }, 2000);
 });

}

buscarJornada(3).then((elemento) => {
  console.log(elemento);
}).catch(e => {
  console.log(e);
})


buscarCarrera(5).then((elemento) => {
  console.log(elemento);
}).catch(e => {
  console.log(e);
});

const validarDatos =  (idCarrera,idJornada) => {
  return new Promise((resolve,reject) => {
      buscarJornada(idJornada).then((jornada) => {
        if(jornada){
          buscarCarrera(idCarrera).then((carrera) => {
           resolve(true);
          }).catch(e => {
            return reject(false);
          })
        } else {
         reject(false);
        }
      }).catch(e => reject(false));
  }).catch(e => console.log(e));
}

if(validarDatos(2,2)) {
  console.log('Inciar Proceso de inscripcion');
} else {
  console.log('Error en data, proceso de inscripcion suspendido');
}

/*import {jornadas,carrerasTecnicas} from './db/information'


jornadas.forEach((i) => {
    console.log(i);
});

carrerasTecnicas.forEach((i) => {
  console.log(i);
});*/

/*import{useStateDemo} from './useStateDemo'

const alumnos = ['Juan','Luis','Maria'];
const [,,i3] = alumnos;
console.log(i3);

const consultarjornada = () => {
  return ['JM','Jornada Matutina','cupo'];
}

const [prefijo,descripcion] = consultarjornada();

console.log(prefijo);
console.log(descripcion);

const[nombre, setNombre] = useStateDemo('Diego Perez');


console.log(nombre);
setNombre();
/*
Desesctructuracion de objetos
const carreraTecnica = {
  codigo:'1',
  nombre:'Mecanica Automotriz',
  alumnos: [
    {
      carne: '2023001',
      apellidos: 'Perez',
      nombres: 'Alejandro'
    },
    {
      carne: '2023002',
      apellidos: 'Perez1',
      nombres: 'Alejandro'
    }
  ]

}
const caracteristicas = {
  capacidad: {
    max: 20,
    min:5
  },
  jornada: {
    codigo: 1,
    descripcion: 'JM'
  }
}
const{nombre} = carreraTecnica;
const{capacidad, jornada: {descripcion}} = caracteristicas;

const salida = {
  //carrera: nombre,
  //capacidad: capacidad,
  jornada: descripcion
}

console.log(salida);
*/

/*

Manejo de Funciones

const saludar = function( nombre ){
      return `Bienvenido al desarrollo con JS ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Bienvenido al desarrollo de JS ${nombre}`;
}
const saludar3 = nombre =>  `Bienvenido al desarrollo con JS ${nombre}`;

const getUser = () => ({uuid: 'A5DZDFDD234', username: 'Diego Perez'});
const user = getUser();

console.log(saludar('Diego perez'));
console.log(saludar2('Juan Perez'));
console.log(saludar3('Rosa Perez'));
console.log(user);
*/



/*const listaNumeros = new Array(5);

listaNumeros.push(1);
listaNumeros.push(20);
listaNumeros.push(5);
listaNumeros.push(30);
listaNumeros.push(11);*/


/*listaNumeros.forEach((i) => {
    console.log(i * 5);
});

const listaNumeros2 = listaNumeros.map((i)=> {
    return i * 5;
});

const listaNumeros3 = [...listaNumeros,5]

console.log(listaNumeros);
console.log(listaNumeros2);
console.log(listaNumeros3);*/

/*
Creacion de objetos
const carreraTecnica = {
  codigo:'1',
  nombre:'Mecanica Automotriz',
  alumnos: [
    {
      carne: '2023001',
      apellidos: 'Perez',
      nombre: 'Alejandro',
    },
    {
      carne: '2023002',
      apellidos: 'Perez1',
      nombre: 'Alejandro',
    }
  ]

}

//spread

const carreraTecnica2 = {...carreraTecnica, capacidad:{max:20, min:5}};
carreraTecnica2.codigo = '2';
carreraTecnica2.nombre = 'Electricidad Industrial';


console.log(carreraTecnica);
console.log(carreraTecnica2);

console.table(carreraTecnica);*/