const form = document.getElementById("formLogin");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email= document.getElementById("email")
    const password = document.getElementById("password")

    if(!email.value.trim() || !password.value.trim()){
        alert("LOS CAMPOS SON OBLIGATORIOS");
        return
    }

    let usuariosLocal = JSON.parse(localStorage.getItem("usuarios"))
    let bandera = false

    usuariosLocal.forEach(u => {
        if(u.email == email.value && u.password == password.value){
            
            bandera= true
            localStorage.setItem("sesion", JSON.stringify(u) )
        }
    })

    if(bandera){
        alert("Login Exitoso!")
        window.location.href = "index.html";
        return;

    }else{

        alert("usuario o contraseña incorrecto!")

    }


})

