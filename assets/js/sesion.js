let usuarioLogueado = JSON.parse( localStorage.getItem("sesion") )
let listaMenu = document.getElementById("navbar")

let usuarioAdmin= [

    {nombre: "admin", email: "admin@gmail.com", password: "Admin12@", tipo: "admin"},

    
    
]   

if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify(usuarioAdmin))

}

if(usuarioLogueado){
    if(usuarioLogueado.tipo=="admin"){
        let liPinturas = document.createElement("li")
        liPinturas.classList.add("nav-item")

        liPinturas.innerHTML = `<a class="nav-link text-white"  href='planillaPinturasDina.html'>Todas las pinturas</a>`
        listaMenu.appendChild(liPinturas)
        let aprobarPinturas= document.createElement("li")
        aprobarPinturas.classList.add("nav-item")
        listaMenu.appendChild(aprobarPinturas)
        aprobarPinturas.innerHTML = `<a class="nav-link text-white" href='planillaPinturasAdmin.html'>Aprobar pinturas</a>`
        
    }else if(usuarioLogueado.tipo=="pintor"){
        let liMisPinturas = document.createElement("li")
        liMisPinturas.classList.add("nav-item")
        liMisPinturas.innerHTML = `<a class="nav-link text-white" href='misPinturas.html'>Mis Pinturas</a>`
        listaMenu.appendChild(liMisPinturas)

        let subirPintura = document.createElement("li")
        subirPintura.classList.add("nav-item")
        subirPintura.innerHTML = `<a class="nav-link text-white" href='agregarPintura.html'>Subir Pinturas</a>`
        listaMenu.appendChild(subirPintura)
    }

    let liCerrarSesion = document.createElement("li")
    liCerrarSesion.classList.add("nav-item")
    liCerrarSesion.innerHTML = `<a class="nav-link text-white" href="#" id='cerrar-sesion'>Cerrar sesión</a>`
    listaMenu.appendChild(liCerrarSesion)

    let borrarLiSearch = document.getElementById("search")

    listaMenu.removeChild(borrarLiSearch)

    let liRegistro = document.getElementById("registro")
    let liLogin = document.getElementById("login")

    listaMenu.removeChild(liRegistro)
    listaMenu.removeChild(liLogin)

    let cerrarSesion = document.getElementById("cerrar-sesion")
    cerrarSesion.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("sesion")
        window.location.href = "index.html"
    })

    listaMenu.appendChild(borrarLiSearch )
}
