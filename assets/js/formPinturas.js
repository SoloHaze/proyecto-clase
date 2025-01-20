let pinturas = [
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: 5000,autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado",
    },
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: 5000,autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado",
    },
    {
        pintura: "Arbol de la creacion", descripcion: "arbolito", precio: 5000,autor: "Desconocido", tecnicaUsada: "Óleo",estado: "aprobado"
    }
]

if(!localStorage.getItem("pinturas")){
    localStorage.setItem("pinturas", JSON.stringify(pinturas))
}
function crearTabla(){
    const principal = document.getElementById("principalAdmin");
    
    const tabla = document.createElement("table");
    tabla.classList.add("table","table-striped","table-hover");
    
    tabla.innerHTML = `
        <thead>
            <th>Pintura</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Autor</th>
            <th>Tecnica Usada</th>
            <th>Dolar</th>
            <th>Estado</th>
            <th>Acción</th>
        </thead>
        <tbody id="cuerpo-tabla"></tbody>
    `;

    principal.appendChild(tabla);
}
function cargarPinturas(){



    let valorDolarrr = 0;

    //consumir una api:
    fetch("https://mindicador.cl/api")
    .then(response => response.json())//El response se convnierte en json
    //.then(data => console.log(data))//así se pide toda la data entregada de la api
    .then(data => {
        console.log(data.dolar.valor)
        valorDolarrr = data.dolar.valor;

            
        const cuerpoTabla = document.getElementById("cuerpo-tabla");
        cuerpoTabla.innerHTML = '';
        let pinturasLocal = JSON.parse(localStorage.getItem("pinturas"));
        pinturasLocal.forEach((p,index) => {
            //console.log(p);
            band = true
            if(band){
                const filaTabla = document.createElement("tr");
                filaTabla.innerHTML = `
                    <td>${p.pintura}</td>
                    <td>${p.descripcion}</td>
                    <td>${p.precio}</td>
                    <td>${p.autor}</td>
                    <td>${p.tecnicaUsada}</td>
                    <td>US$ ${(p.precio / valorDolarrr).toFixed(2)}</td>
                    <td>${p.estado}</td>
                    <td><button id="aprobar" onclick="aprobar(${index})">Aprobado</button><button onclick="reprobar(${index})">Reprobado</button></td>

                
                `;
        
                cuerpoTabla.appendChild(filaTabla);


            }

    })

        
    });


    const cuerpoTabla = document.getElementById("cuerpo-tabla");



    cuerpoTabla.innerHTML = '';
    let pinturasLocal = JSON.parse(localStorage.getItem("pinturas"));
    pinturasLocal.forEach(p => {
        //console.log(p);
        if(p.estado == 'aprobado'){
            const filaTabla = document.createElement("tr");
            filaTabla.innerHTML = `
                <td>${p.pintura}</td>
                <td>${p.descripcion}</td>
                <td>${p.precio}</td>
                <td>${p.autor}</td>
                <td>${p.tecnicaUsada}</td>
            
            `;
    
            cuerpoTabla.appendChild(filaTabla);


        }

    })

}

crearTabla();
cargarPinturas();

const form = document.getElementById("formPinturas");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombrePintura= document.getElementById("nombrePintura")
    const descripcion = document.getElementById("descripcion")
    const precio = document.getElementById("precio")
    const autor = usuarioLogueado.nombre;
    const tecnica = document.getElementById("tecnica")
    const archivo = document.getElementById("imagen") 
    if(!nombrePintura.value.trim() || !descripcion.value.trim() || !precio.value.trim() || !autor.value.trim() || !tecnica.value.trim() || !archivo.value){
        alert("LOS CAMPOS SON OBLIGATORIOS");
        return
    }

    let usuariosLocal = JSON.parse(localStorage.getItem("usuarios"))
    let bandera = false
    /*
    usuariosLocal.forEach(u => {
        if(u.email == email.value && u.password == password.value){
            
            bandera= true
            localStorage.setItem("sesion", JSON.stringify(u) )
        }
    })*/

    if(bandera){
        alert("pintura agregada con exito!")
        window.location.href = "misPinturas.html";
        return;

    }else{

        alert("Faltan campos por rellenar!")

    }
    if(!nombrePintura.value().trim()){
        alert('El nombre de la pintura es obligatorio');
        return;
    }else if(!precio.value().trim()){
        alert('El precio es obligatorio')
        return;
    }else if(!descripcion.value().trim()){
        alert('La descripcion es obligatoria')
        return;
    }else if(!autor.value().trim()){
        alert('El autor es obligatorio')
        return;
    }
    let pinturasLocal = JSON.parse(localStorage.setItem("pintura"));

    let pintura = {id: pinturasLocal.length+1,pintura: nombre.value.trim(),
          descripcion: "arbolito",
          precio: precio.value().trim(), 
          autor: "Desconocido",
          tecnicaUsada: "Óleo",
          estado: "aprobado"
    }
    pinturasLocal.push(pintura)
    localStorage.setItem("pinturas", JSON.stringify(pinturasLocal))

    pinturas.push();
    alert('pintura agregada con éxito');
    cargarPinturas();

    nombre.innerText = '';
    precio.innerText = '';

})
