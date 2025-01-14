let nombrePintura = "";
let autor = "";
let precio = 0;
let descripcion = "";
let tecnicaUsada = "";

let pinturasArray = [];


pinturasArray.push(nombrePintura);
pinturasArray.push(descripcion);
pinturasArray.push(precio);
pinturasArray.push(autor);
pinturasArray.push(tecnicaUsada);


pinturasArray[0] = "";//Aqui va el input desde el formulario de agregar pintura
pinturasArray[1] = "";

//function para agregar a un array las variable devueltas por el fomrulario de agregar pintura
let agregarPintura = (nombrePintura,descripcion,precio,autor,tecnicaUsada) =>{
    let agregarPinturaArray = [];

    pinturasArray.push(nombrePintura);
    pinturasArray.push(descripcion);
    pinturasArray.push(precio);
    pinturasArray.push(autor);
    pinturasArray.push(tecnicaUsada);

    return agregarPinturaArray;

}
console.log(agregarPintura(nombrePintura,descripcion,precio,autor,tecnicaUsada));



//con el indexOf se buscara cada pintura por su nombre con la barra de busqueda
