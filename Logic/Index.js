const users = document.getElementById("Tbx_users");
const rol = document.getElementById("Tbx_rol");

function Ingreso() {
    if (users.value == "") {
        alert("Por favor digite su Nombre")
        return;
    }
    console.log(rol.value)
    if (rol.value == "") {
        alert("Por favor digite su Rol")
        return;
    } else if(rol.value == "admin" ){
        alert("Bienvenido Admin, Accediste a todo erl sistema")
        return;
    } else if (rol.value == "usuario") {
        alert("Bienvenido Usuario, Solo lectura")
        return;
    } else if (rol.value == "diseño") {
        alert("Bienvenido Diseñador, Accediste a todos los Diseños")
        return;
    }else {
        alert("Rol no reconocido");
    }
}