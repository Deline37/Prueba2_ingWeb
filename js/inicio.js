"use strict";
var comunasValpo = ['Isla de Pascua', 'Calle Larga', 'Los Andes', 'Rinconada de Los Andes', 'San Esteban', 'Limache', 'Olmué', 'Quilpué',
    'Villa Alemana', 'Cabildo', 'La Ligua', 'Papudo', 'Petorca', 'Zapallar', 'Hijuelas', 'La Calera', 'La Cruz', 'Nogales', 'Quillota',
    'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'San Antonio', 'Santo Domingo', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo',
    'San Felipe', 'Santa María', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quintero', 'Valparaíso', 'Viña del Mar'];
var comunasArica = ['Arica', 'Camarones', 'General Lagos', 'Putre'];
var estudianteDefault = {
    Rut: "11.111.111-1",
    Telefono: 11111111,
    correoElectronico: "MaríaPerez@gmail.com",
    Acudientes: "ninguno",
    fechaDeNacimiento: "2016-05-12",
    curso: "4 primaria",
};
var asignaturas = [
    {
        nombre: "Matemáticas",
        objetivo: "Comprensión",
        nota: "6.0",
    },
    {
        nombre: "Física",
        objetivo: "Lógica",
        nota: "7.0",
    },
    {
        nombre: "Español",
        objetivo: "Gramática",
        nota: "7.0",
    }
];
var rut = document.getElementById("rut");
var telefono = document.getElementById("Telefono");
var email = document.getElementById("email");
var Acudientes = document.getElementById("Acudientes");
var fechaDeNacimiento = document.getElementById("fechaDeNaciemiento");
var curso = document.getElementById("curso");
var regiones = document.getElementById("regiones");
var comuna = document.getElementById("comunas");
var editar = document.getElementById("Btn-Editar");
var act = document.getElementById("actualizar");
var agregarbtn = document.getElementById("agregar");
cargarEventListeners();
agregarAsignaturas();
function cargarEventListeners() {
    regiones === null || regiones === void 0 ? void 0 : regiones.addEventListener('change', leerValor);
    editar === null || editar === void 0 ? void 0 : editar.addEventListener('click', editarForm);
    act === null || act === void 0 ? void 0 : act.addEventListener('click', actualizarForm);
    agregarbtn === null || agregarbtn === void 0 ? void 0 : agregarbtn.addEventListener('click', agregarAsignatura);
}
rut === null || rut === void 0 ? void 0 : rut.setAttribute("value", estudianteDefault.Rut);
telefono === null || telefono === void 0 ? void 0 : telefono.setAttribute("value", estudianteDefault.Telefono);
email === null || email === void 0 ? void 0 : email.setAttribute("value", estudianteDefault.correoElectronico);
Acudientes === null || Acudientes === void 0 ? void 0 : Acudientes.setAttribute("value", estudianteDefault.Acudientes);
fechaDeNacimiento === null || fechaDeNacimiento === void 0 ? void 0 : fechaDeNacimiento.setAttribute("value", estudianteDefault.fechaDeNacimiento);
curso === null || curso === void 0 ? void 0 : curso.setAttribute("value", estudianteDefault.curso);
var opcion2 = document.createElement('option');
opcion2.value = "0";
opcion2.textContent = "Valparaíso";
regiones === null || regiones === void 0 ? void 0 : regiones.appendChild(opcion2);
var opcion1 = document.createElement('option');
opcion1.value = "1";
opcion1.textContent = "Arica y Paricacota";
regiones === null || regiones === void 0 ? void 0 : regiones.appendChild(opcion1);
var asignaturasA = asignaturas;
asignaturas = asignaturasA;
var valparaiso = document.createElement('option');
valparaiso.value = "0";
valparaiso.textContent = "Valparaíso";
comuna === null || comuna === void 0 ? void 0 : comuna.appendChild(valparaiso);
function leerValor(e) {
    regiones[e.target.name] = e.target.value;
    console.log(regiones[e.target.name]);
    ComunasAMostrar(regiones[e.target.name]);
}
function ComunasAMostrar(e) {
    while (comuna === null || comuna === void 0 ? void 0 : comuna.firstChild) {
        comuna.removeChild(comuna === null || comuna === void 0 ? void 0 : comuna.firstChild);
    }
    if (e == 0) {
        comuna === null || comuna === void 0 ? void 0 : comuna.removeAttribute('disabled');
        for (var i = 0; i < comunasValpo.length; i++) {
            var opcion = document.createElement('option');
            opcion.value = "i";
            opcion.textContent = comunasValpo[i];
            comuna === null || comuna === void 0 ? void 0 : comuna.appendChild(opcion);
        }
    }
    else {
        if (e == 1) {
            comuna === null || comuna === void 0 ? void 0 : comuna.removeAttribute('disabled');
            for (var i = 0; i < comunasArica.length; i++) {
                var opcion = document.createElement('option');
                opcion.value = "i";
                opcion.textContent = comunasArica[i];
                comuna === null || comuna === void 0 ? void 0 : comuna.appendChild(opcion);
            }
        }
    }
}
console.log(asignaturas);
function agregarAsignaturas() {
    for (var i = 0; i < asignaturas.length; i++) {
        var li = document.createElement('li');
        li.value = i;
        li.setAttribute("class", "row");
        var divAsignatura = document.createElement('div');
        var divObjetivo = document.createElement('div');
        var divNota = document.createElement('div');
        var divVacio = document.createElement('div');
        var divBtn = document.createElement('div');
        var listaAsig = document.getElementById("lista-asignaturas");
        listaAsig === null || listaAsig === void 0 ? void 0 : listaAsig.appendChild(li);
        divVacio.setAttribute("class", "col-md-1");
        divAsignatura.setAttribute("class", "col-md-4");
        divObjetivo.setAttribute("class", "col-md-4");
        divNota.setAttribute("class", "col-md-2");
        divBtn.setAttribute("class", "col-md-1");
        divBtn.innerHTML = "<button type=\"button\" id=\"eliminar" + i + "\" ><span class=\"material-icons\">delete</span></button>";
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
function editarForm(e) {
    e.preventDefault();
    var inputs = document.getElementsByClassName("input-epico");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("disabled");
        inputs[i].setAttribute("style", "border:1px solid black");
    }
    console.log(estudianteDefault);
    var actualizar = document.getElementById("actualizar");
    actualizar === null || actualizar === void 0 ? void 0 : actualizar.removeAttribute("disabled");
    actualizar === null || actualizar === void 0 ? void 0 : actualizar.removeAttribute("hidden");
}
function actualizarForm() {
    var _a;
    var inputs = document.getElementsByClassName("input-epico");
    estudianteDefault.Rut = rut.value;
    estudianteDefault.Telefono = telefono.value;
    estudianteDefault.correoElectronico = email.value;
    estudianteDefault.Acudientes = Acudientes.value;
    estudianteDefault.fechaDeNacimiento = fechaDeNacimiento.value;
    console.log(estudianteDefault);
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].getAttribute("value"));
        if (((_a = inputs[i].getAttribute("value")) === null || _a === void 0 ? void 0 : _a.length) == 0) {
            alert("Falto rellenar " + inputs[i].getAttribute("id"));
            return 0;
        }
    }
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("disabled", "true");
        inputs[i].removeAttribute("style");
    }
    var actualizar = document.getElementById("actualizar");
    actualizar === null || actualizar === void 0 ? void 0 : actualizar.setAttribute("disabled", "true");
    actualizar === null || actualizar === void 0 ? void 0 : actualizar.setAttribute("hidden", "true");
}
function agregarAsignatura() {
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var divinputs = document.createElement('div');
    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    input3.setAttribute("type", "text");
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
    var btnEnviar = document.createElement('input');
    btnEnviar.setAttribute('type', 'submit');
    btnEnviar.setAttribute('class', 'col-md-4');
    btnEnviar.setAttribute('style', 'border:1px solid black');
    btnEnviar.value = "agregar";
    var divGrande = document.getElementById("clases");
    divinputs === null || divinputs === void 0 ? void 0 : divinputs.appendChild(input1);
    divinputs === null || divinputs === void 0 ? void 0 : divinputs.appendChild(input2);
    divinputs === null || divinputs === void 0 ? void 0 : divinputs.appendChild(input3);
    divinputs === null || divinputs === void 0 ? void 0 : divinputs.appendChild(btnEnviar);
    divGrande === null || divGrande === void 0 ? void 0 : divGrande.appendChild(divinputs);
    btnEnviar.addEventListener('click', function (e) {
        var nuevaAsignatura = {
            nombre: input1.value,
            objetivo: input2.value,
            nota: input3.value
        };
        asignaturasA.push(nuevaAsignatura);
        asignaturas = asignaturasA;
        return 1;
    });
}
