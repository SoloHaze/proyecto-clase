function validarContrasena(password) {
    // Expresión regular para verificar todos los requisitos
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
  
    return regex.test(password);
}


const form = document.getElementById("formLogin");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email= document.getElementById("email")
    const password = document.getElementById("password")

   
    if(!email.value.trim() || !password.value.trim()){
        alert("LOS CAMPOS SON OBLIGATORIOS");
        return
    }else if(!validarContrasena(password.value)){
        alert(`La contraseña debe cumplir con lo siguiente: 
        largos de las contraseñas deben partir en 6 u 8 caracteres,
        e incluir distintos tipos de caracteres como minúsculas, mayúsculas, números y símbolos.`)
        return;
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

