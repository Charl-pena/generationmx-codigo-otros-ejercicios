// Reorganice el codigo para que la funcion quede arriba antes de los statements
function agregarInvitado(nombre, edad, nacionalidad) {
  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  // No es added es add
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  // Eliminadas statements que dublicaban el nombre del invitado
  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}
// Este query selector no nos regresara una referencia valida hay que quitar la #
var formulario = document.querySelector("form")

formulario.onsubmit = function (e) {

  const classError = "error"
  e.preventDefault();

  // Renombramos las variables por otros más claros y que no entren en conflicto con los parametros de la funcion
  let nameField = formulario.elements[0]
  let edadField = formulario.elements[1]
  let naField = formulario.elements[2]

  let nombre = nameField.value
  let edad = edadField.value

  let i = naField.selectedIndex
  let nacionalidad = naField.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nameField.classList.add(classError)
  }
  if (edad < 18 || edad > 120) {
    let mensajeError = document.createElement("p")
    mensajeError.classList.add(classError)
    mensajeError.textContent = "Ingresa una edad valida (18-120)"
    edadField.classList.add(classError)
    edadField.insertAdjacentElement( "afterend",mensajeError)
  }

  if (nombre.length > 0
    // Deberian de ser rangos inclusivos por eso agregamos el = a cada > y <
    && (edad >= 18
    && edad <= 120)) {
      agregarInvitado(nombre, edad, nacionalidad)
  }
}

// Eliminadas los statements que dublican el boton de borrar