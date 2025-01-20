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




function aprobar(posicion_pintura_a_aprobar){


    let pinturasLocal = JSON.parse(localStorage.getItem("pinturas"));
    pinturasLocal.forEach((pi, index) =>{
        if(index==posicion_pintura_a_aprobar){
            pi.estado = "aprobada";
        }

    })
    //debo volver a guardar la lista pintirasLocal en localstorage.
    localStorage.setItem("pinturas",JSON.stringify(pinturasLocal))
    //debe recargar la página
    window.location.href = "planillaPinturasAdmin.html";
}
function reprobar(posicion_pintura_a_reprobar){
    
    let pinturasLocal = JSON.parse(localStorage.getItem("pinturas"));
    pinturasLocal.forEach((pi, index) =>{
        if(index==posicion_pintura_a_reprobar){
            pi.estado = "reprobar";
        }

    })


    //debo volver a guardar la lista pintirasLocal en localstorage.
    localStorage.setItem("pinturas",JSON.stringify(pinturasLocal))
    //debe recargar la página
    window.location.href = "planillaPinturasAdmin.html";

}

