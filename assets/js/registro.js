//Se manejara el registro  eusuario

let usuarios= [

    {nombre: "admin", email: "admin@gmail.com", password: "admin123", tipo: "admin"},
    {nombre: "aron", email: "aron@gmail.com", password:"hola", tipo: "admin"},
    {nombre: "aronUser", email: "aronUser@gmail.com", password:"holaUser", tipo: "pintor"},
    
    
]
if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

}

function validarContrasena(password) {
    // Expresión regular para verificar todos los requisitos
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
  
    return regex.test(password);
}


const formulario = document.getElementById("formRegistro");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repetirContra = document.getElementById("confirmPassword");



    if(!nombre.value.trim()){
        alert("El nombre es requerido");
        return;
    }else if(!email.value.trim()){
        alert("El email es requerido");
        return;
    }else if(!password.value.trim()){
        alert("La contraseña es requerido");
        
        return;
    }else if(!repetirContra.value.trim()){
        alert("La confirmacin de la contraseña es requerido");
        return;
    }else if(!validarContrasena(password.value)){
        alert(`La contraseña debe cumplir con lo siguiente: 
        largos de las contraseñas deben partir en 6 u 8 caracteres,
        e incluir distintos tipos de caracteres como minúsculas, mayúsculas, números y símbolos.`)
        return;
    }else if (password.value.trim() != repetirContra.value.trim()){
        alert("Las contraseñas no coinciden")
        return;
    }

    let usuario ={

        nombre: nombre.value,
        email: email.value,
        password: password.value,
        tipo: "pintor"

    }

    let usuariosLocal = JSON.parse(localStorage.getItem("usuarios"));
    usuariosLocal.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(usuariosLocal))
    alert("Usuario Registrado")
    
    window.location.href = "login.html";


});



