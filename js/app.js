/************ DATOS GENERACIONES ***********/
let generaciones = [
  {
    nombre: 'generaciónZ',
    marcoTemporal: [
      1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
      2006, 2007, 2008, 2009, 2010,
    ],
    cantidadPoblacion: 7800000,
    circunstanciaHistorica: 'Expansión masiva de Internet',
    rasgoCaracteristico: 'Irreverencia',
  },
  {
    nombre: 'generaciónY',
    marcoTemporal: [
      1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
      1993,
    ],
    cantidadPoblacion: 7200000,
    circunstanciaHistorica: 'Inicio de la digilitación',
    rasgoCaracteristico: 'Frustración',
  },
  {
    nombre: 'generaciónX',
    marcoTemporal: [
      1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1978, 1979,
    ],
    cantidadPoblacion: 9300000,
    circunstanciaHistorica: 'Crisis del 73 y transición española',
    rasgoCaracteristico: 'Obsesión por el éxito',
  },
  {
    nombre: 'Baby Boom',
    marcoTemporal: [
      1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
      1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968,
    ],
    cantidadPoblacion: 12200000,
    circunstanciaHistorica: 'Paz y explotasión demográfica',
    rasgoCaracteristico: 'Ambición',
  },
  {
    nombre: 'SilentGeneration(Los niños de la PostGuerra)',
    marcoTemporal: [
      1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941,
      1942, 1943, 1944, 1945, 1946, 1947, 1948,
    ],
    cantidadPoblacion: 6300000,
    circunstanciaHistorica: 'Conflictos bélicos',
    rasgoCaracteristico: 'Austeridad',
  },
];

/********** OBJETO PERSONA  ******/
class Persona {
  #nombre;
  #edad;
  #dni;
  #genero;
  #peso;
  #altura;
  #anionacimiento;
  #cuil;
  constructor(nombre, edad, dni, genero, peso, altura, anionacimiento, cuil) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#genero = genero;
    this.#peso = peso;
    this.#altura = altura;
    this.#anionacimiento = anionacimiento;
    this.#cuil = cuil;
  }
  //set
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    }
  }
  set dni(nuevoDni) {
    if (nuevoDni > 0) {
      this.#dni = nuevoDni;
    }
  }
  set genero(nuevoGenero) {
    if (nuevoGenero.length > 0) {
      this.#genero = nuevoGenero;
    }
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this.#peso = nuevoPeso;
    }
  }
  set altura(nuevaAltura) {
    if (nuevaAltura > 0) {
      this.#altura = nuevaAltura;
    }
  }
  set anionacimiento(nuevoAnionacimiento) {
    if (nuevoAnionacimiento > 0) {
      this.#anionacimiento = nuevoAnionacimiento;
    }
  }
  set cuil(nuevoCuil) {
    if (nuevoCuil > 0) {
      this.#cuil = nuevoCuil;
    }
  }
  //get
  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }
  get dni() {
    return this.#dni;
  }
  get genero() {
    return this.#genero;
  }
  get peso() {
    return this.#peso;
  }
  get altura() {
    return this.#altura;
  }
  get anionacimiento() {
    return this.#anionacimiento;
  }
  get cuil() {
    return this.#cuil;
  }

  mostrarGeneracion() {
    let generacion = generaciones.find((element) =>
      element.marcoTemporal.includes(parseInt(this.anionacimiento))
    );
    let modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `Pertenece a la generación: ${generacion.nombre} y su rasgo característico es: ${generacion.rasgoCaracteristico}`;
  }
  esMayordeEdad() {
    if (this.edad >= 18) {
      let modalBody = document.getElementById('modal-body');
      modalBody.innerHTML = `${this.nombre} es MAYOR de edad`;
    } else {
      let modalBody = document.getElementById('modal-body');
      modalBody.innerHTML = `${this.nombre} es MENOR de edad`;
    }
  }
  mostrarDatos() {
    let mostrarDatos = document.getElementById('mostrarDatos');

    let h5 = document.createElement('h3');
    h5.innerHTML = 'Datos de la Persona';
    //nombre
    let pNombre = document.createElement('p');
    pNombre.innerHTML = `Nombre: ${this.nombre}`;
    let liNombre = document.createElement('li');
    liNombre.appendChild(pNombre);
    //edad
    let pEdad = document.createElement('p');
    pEdad.innerHTML = `Edad: ${this.edad}`;
    let liEdad = document.createElement('li');
    liEdad.appendChild(pEdad);
    //dni
    let pDni = document.createElement('p');
    pDni.innerHTML = `DNI: ${this.dni}`;
    let liDni = document.createElement('li');
    liDni.appendChild(pDni);
    //genero
    let pGenero = document.createElement('p');
    pGenero.innerHTML = `Género: ${this.genero}`;
    let liGenero = document.createElement('li');
    liGenero.appendChild(pGenero);
    //peso
    let pPeso = document.createElement('p');
    pPeso.innerHTML = `Peso: ${this.peso}`;
    let liPeso = document.createElement('li');
    liPeso.appendChild(pPeso);
    //altura
    let pAltura = document.createElement('p');
    pAltura.innerHTML = `Altura: ${this.altura}`;
    let liAltura = document.createElement('li');
    liAltura.appendChild(pAltura);
    //anionacimiento
    let pAnioNacimiento = document.createElement('p');
    pAnioNacimiento.innerHTML = `Año Nac.: ${this.anionacimiento}`;
    let liAnioNacimiento = document.createElement('li');
    liAnioNacimiento.appendChild(pAnioNacimiento);
    //cuil
    let pCuil = document.createElement('p');
    pCuil.innerHTML = `CUIL: ${this.cuil}`;
    let liCuil = document.createElement('li');
    liCuil.appendChild(pCuil);
    let ul = document.createElement('ul');
    ul.appendChild(liNombre);
    ul.appendChild(liEdad);
    ul.appendChild(liDni);
    ul.appendChild(liGenero);
    ul.appendChild(liPeso);
    ul.appendChild(liAltura);
    ul.appendChild(liAnioNacimiento);
    ul.appendChild(liCuil);
    mostrarDatos.appendChild(h5);
    mostrarDatos.appendChild(ul);
  }
  // generarDNI() {
  //   this.dni = Math.floor(Math.random() * 99999999 + 1);
  //   document.write(`Nuevo DNI generado: ${this.dni}`);
  // }
}

//Ejercicio 2 TP 5
window.addEventListener('DOMContentLoaded', select);
//inicializar
const persona1 = new Persona();

//addEventListener
document.querySelector('form').addEventListener('submit', guardarPersona);
document
  .getElementById('botonMostrarGeneracion')
  .addEventListener('click', mostrarGeneracion);
document
  .getElementById('botonMayorEdad')
  .addEventListener('click', mostrarMayorEdad);
document
  .getElementById('botonLimpiarForm')
  .addEventListener('click', limpiarFormulario);

//Funciones
function select() {
  const selectEdad = document.getElementById('selectEdad');
  optionChooseEdad(selectEdad, 110);
  const selectAnionacimiento = document.getElementById('selectAnionacimiento');
  optionChooseAnionacimiento(selectAnionacimiento, 1930, 2010);
}

function optionChooseEdad(selectId, numero) {
  const option00 = document.createElement('option');
  option00.selected = true;
  option00.value = '00';
  option00.innerHTML = '00';
  selectId.appendChild(option00);

  for (let i = 1; i <= numero; i++) {
    const option = document.createElement('option');
    option00.selected = true;
    option.value = i.toString().padStart(2, '0');
    option.innerHTML = i.toString().padStart(2, '0');
    selectId.appendChild(option);
  }
}

function optionChooseAnionacimiento(selectId, finicio, ffin) {
  const option00 = document.createElement('option');
  option00.selected = true;
  option00.value = String(finicio);
  option00.innerHTML = String(finicio);
  selectId.appendChild(option00);

  for (let i = finicio; i <= ffin; i++) {
    const option = document.createElement('option');
    option00.selected = true;
    option.value = i.toString().padStart(4, '0');
    option.innerHTML = i.toString().padStart(4, '0');
    selectId.appendChild(option);
  }
}

function guardarPersona(persona) {
  persona.preventDefault();

  //settear
  persona1.nombre = persona.target[0].value;
  persona1.edad = persona.target[1].value;
  persona1.dni = persona.target[2].value;
  persona1.genero = persona.target[3].value;
  persona1.peso = persona.target[4].value;
  persona1.altura = persona.target[5].value;
  persona1.anionacimiento = persona.target[6].value;
  persona1.cuil = persona.target[7].value;

  persona1.mostrarDatos();
  deshabilitarBotonGuardar();
  habilitarBotonesGeneracionyMayordeEdad();
}

function mostrarGeneracion() {
  return persona1.mostrarGeneracion();
}

function mostrarMayorEdad() {
  return persona1.esMayordeEdad();
}

function deshabilitarBotonGuardar() {
  let botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.disabled = true;
  document.getElementById('botonLimpiarForm').classList.remove('disabled');
}

function habilitarBotonesGeneracionyMayordeEdad() {
  let botonMostrarGeneracion = document.getElementById(
    'botonMostrarGeneracion'
  );
  botonMostrarGeneracion.classList.remove('d-none');
  let botonMayorEdad = document.getElementById('botonMayorEdad');
  botonMayorEdad.classList.remove('d-none');
}

function limpiarFormulario() {
  document.getElementById('formPersona').reset();
  document.getElementById('botonGuardar').disabled = false;
  document.getElementById('botonLimpiarForm').classList.add('disabled');
  const imagenPadre = document.getElementById('imagenPadre');
  const mostrarDatos = document.getElementById('mostrarDatos');
  imagenPadre.removeChild(mostrarDatos);
}
