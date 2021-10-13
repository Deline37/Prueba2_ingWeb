interface estudiante{
  Rut:string;
  Telefono:number;
  correoElectronico:string;
  Acudientes:string;
  fechaDeNacimiento:string;
  curso:String;
}

interface asignatura{
  nombre:string;
  objetivo:string;
  nota:string;
}

let comunasValpo:string[] = ['Isla de Pascua','Calle Larga','Los Andes','Rinconada de Los Andes','San Esteban','Limache','Olmué','Quilpué',
'Villa Alemana','Cabildo','La Ligua', 'Papudo', 'Petorca', 'Zapallar', 'Hijuelas','La Calera', 'La Cruz', 'Nogales', 'Quillota',
'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'San Antonio', 'Santo Domingo', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo',
'San Felipe', 'Santa María', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quintero', 'Valparaíso', 'Viña del Mar'];

let comunasArica:string[] = ['Arica', 'Camarones', 'General Lagos', 'Putre'];

let estudianteDefault:estudiante = {
  Rut : "11.111.111-1",
  Telefono: 11111111,
  correoElectronico: "MaríaPerez@gmail.com",
  Acudientes: "ninguno",
  fechaDeNacimiento:"2016-05-12",
  curso:"4 primaria",
}

let asignaturas:asignatura[]= [
  {
    nombre:"Matemáticas",
    objetivo:"Comprensión",
    nota:"6.0",
  },
  {
    nombre:"Física",
    objetivo:"Lógica",
    nota:"7.0",
  },
  {
    nombre:"Español",
    objetivo:"Gramática",
    nota:"7.0",
  }
]

let rut:any = document.getElementById("rut");
let telefono:any = document.getElementById("Telefono");
let email:any = document.getElementById("email");
let Acudientes:any = document.getElementById("Acudientes");
let fechaDeNacimiento:any = document.getElementById("fechaDeNaciemiento");
let curso:any = document.getElementById("curso");
let regiones:any = document.getElementById("regiones");
let comuna:any = document.getElementById("comunas");
let editar:any = document.getElementById("Btn-Editar");
let act:any = document.getElementById("actualizar");
let agregarbtn:any = document.getElementById("agregar");

cargarEventListeners();
agregarAsignaturas();

function cargarEventListeners(){

  regiones?.addEventListener('change', leerValor);

  editar?.addEventListener('click', editarForm);

  act?.addEventListener('click', actualizarForm);

  agregarbtn?.addEventListener('click', agregarAsignatura);

}

rut?.setAttribute("value", estudianteDefault.Rut);
telefono?.setAttribute("value", estudianteDefault.Telefono);
email?.setAttribute("value", estudianteDefault.correoElectronico);
Acudientes?.setAttribute("value", estudianteDefault.Acudientes);
fechaDeNacimiento?.setAttribute("value", estudianteDefault.fechaDeNacimiento);
curso?.setAttribute("value", estudianteDefault.curso);

let opcion2 = document.createElement('option');
opcion2.value = "0";
opcion2.textContent="Valparaíso";
regiones?.appendChild(opcion2);

let opcion1 = document.createElement('option');
opcion1.value = "1";
opcion1.textContent="Arica y Paricacota";
regiones?.appendChild(opcion1);

let asignaturasA = asignaturas;
asignaturas = asignaturasA;

let valparaiso = document.createElement('option');
valparaiso.value = "0";
valparaiso.textContent="Valparaíso";
comuna?.appendChild(valparaiso);

function leerValor(e:any){
    regiones[e.target.name] = e.target.value;
    console.log( regiones[e.target.name]);
    ComunasAMostrar(regiones[e.target.name]);
}

function ComunasAMostrar(e:any){
    while(comuna?.firstChild){
      comuna.removeChild(comuna?.firstChild);
    }

    if(e == 0){
      comuna?.removeAttribute('disabled');
      for(let i = 0; i<comunasValpo.length; i++){
        let opcion = document.createElement('option');
        opcion.value="i";
        opcion.textContent=comunasValpo[i];
        comuna?.appendChild(opcion);
      }
    }else{
    if(e == 1){
      comuna?.removeAttribute('disabled');
      for(let i = 0; i<comunasArica.length; i++){
        let opcion = document.createElement('option');
        opcion.value="i";
        opcion.textContent=comunasArica[i];
        comuna?.appendChild(opcion);
      }
    }
  }
}

console.log(asignaturas);

function agregarAsignaturas(){

  for(let i = 0; i<asignaturas.length; i++){
    let li = document.createElement('li');
    li.value = i;
    li.setAttribute("class", "row");
  
    let divAsignatura = document.createElement('div');
    let divObjetivo = document.createElement('div');
    let divNota = document.createElement('div');
    let divVacio = document.createElement('div');
    let divBtn = document.createElement('div');

    let listaAsig = document.getElementById("lista-asignaturas");
    listaAsig?.appendChild(li);

    divVacio.setAttribute("class", "col-md-1");
    divAsignatura.setAttribute("class", "col-md-4");
    divObjetivo.setAttribute("class", "col-md-4");
    divNota.setAttribute("class", "col-md-2");
    divBtn.setAttribute("class", "col-md-1");
    divBtn.innerHTML = `<button type="button" id="eliminar${i}" ><span class="material-icons">delete</span></button>`;

    divAsignatura.textContent = asignaturas[i].nombre;
    divObjetivo.textContent = asignaturas[i].objetivo;
    divNota.textContent = asignaturas[i].nota;

    li.appendChild(divVacio);
    li.appendChild(divAsignatura);
    li.appendChild(divObjetivo);
    li.appendChild(divNota);
    li.appendChild(divBtn);    
  }
}

function editarForm(e:any){
  e.preventDefault();

  let inputs = document.getElementsByClassName("input-epico");
  for(let i = 0; i<inputs.length; i++){
    inputs[i].removeAttribute("disabled");
    inputs[i].setAttribute("style", "border:1px solid black");
  }

  console.log(estudianteDefault);

  let actualizar = document.getElementById("actualizar");
  actualizar?.removeAttribute("disabled");
  actualizar?.removeAttribute("hidden");


}



function actualizarForm(){
  let inputs = document.getElementsByClassName("input-epico");

  estudianteDefault.Rut = rut.value;
  estudianteDefault.Telefono = telefono.value;
  estudianteDefault.correoElectronico = email.value;
  estudianteDefault.Acudientes = Acudientes.value;
  estudianteDefault.fechaDeNacimiento = fechaDeNacimiento.value;
  console.log(estudianteDefault);

  for(let i = 0; i<inputs.length; i++){
    console.log(inputs[i].getAttribute("value"));
    if(inputs[i].getAttribute("value")?.length == 0){
      alert(`Falto rellenar ${inputs[i].getAttribute("id")}`);
      return 0;
    }
  }

  for(let i = 0; i<inputs.length; i++){
    inputs[i].setAttribute("disabled", "true");
    inputs[i].removeAttribute("style");
  }

  let actualizar = document.getElementById("actualizar");
  actualizar?.setAttribute("disabled", "true");
  actualizar?.setAttribute("hidden", "true");
}

function agregarAsignatura(){
  let input1 = document.createElement('input');
  let input2 = document.createElement('input');
  let input3 = document.createElement('input');
  let divinputs = document.createElement('div');

  input1.setAttribute("type","text");
  input2.setAttribute("type","text");
  input3.setAttribute("type","text");

  input1.setAttribute("class", "col-md-3");
  input2.setAttribute("class", "col-md-3");
  input3.setAttribute("class", "col-md-3");

  input1.setAttribute("placeHolder", "Asignatura");
  input2.setAttribute("placeHolder", "objetivo");
  input3.setAttribute("placeHolder", "nota");

  input1.setAttribute("style", "border:1px solid black;");
  input2.setAttribute("style", "border:1px solid black;");
  input3.setAttribute("style", "border:1px solid black;");

  divinputs.setAttribute("class", "container-fluid");

  let btnEnviar = document.createElement('input');

  btnEnviar.setAttribute('type', 'submit');
  btnEnviar.setAttribute('class', 'col-md-4');
  btnEnviar.setAttribute('style', 'border:1px solid black');
  btnEnviar.value = "agregar";
  
  let divGrande = document.getElementById("clases");

  divinputs?.appendChild(input1);
  divinputs?.appendChild(input2);
  divinputs?.appendChild(input3);
  divinputs?.appendChild(btnEnviar);

  divGrande?.appendChild(divinputs);

  btnEnviar.addEventListener('click', (e)=>{

    let nuevaAsignatura:asignatura={
      nombre:input1.value,
      objetivo:input2.value,
      nota:input3.value
    }
    
    asignaturasA.push(nuevaAsignatura);
    asignaturas = asignaturasA;

    return 1;
  })

}
