let usuarioLogueado = JSON.parse( localStorage.getItem("sesion") )
let listaMenu = document.getElementById("navbar")

if(usuarioLogueado){
    if(usuarioLogueado.tipo=="admin"){
        let liComidas = document.createElement("li")
        liComidas.innerHTML = `<a href='Productos.html'>Pinturas</a>`
        listaMenu.appendChild(liComidas)
    }else if(usuarioLogueado.tipo=="chef"){
        let liMisComidas = document.createElement("li")
        liMisComidas.innerHTML = `<a href='misPinturas.html'>Mis Pinturas</a>`
        listaMenu.appendChild(liMisComidas)
    }

    let liCerrarSesion = document.createElement("li")
    liCerrarSesion.innerHTML = `<a href="#" id='cerrar-sesion'>Cerrar sesión</a>`
    listaMenu.appendChild(liCerrarSesion)

    let liRegistro = document.getElementById("liRegistro")
    let liLogin = document.getElementById("liLogin")

    listaMenu.removeChild(liRegistro)
    listaMenu.removeChild(liLogin)

    let cerrarSesion = document.getElementById("cerrar-sesion")
    cerrarSesion.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("sesion")
        window.location.href = "index.html"
    })
}