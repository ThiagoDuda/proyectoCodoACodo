const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const tel =  document.getElementById("tel");
const comentario =  document.getElementById("comentario");
const parrafo =  document.getElementById("warnings");


function comprobarNombre(cadena) {
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i];
        if (isNaN(caracter)) {
            continue;
        }
        return false;
    }
    return true;
}


    form.addEventListener("submit", function(event) {
    event.preventDefault();

        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        parrafo.innerHTML = "";   
            
        if (nombre.value.length < 3 || !comprobarNombre(nombre.value)) {
            warnings += `El nombre no es válido <br>`;
            entrar = true;
            console.log("Paso");
        }

        if (apellido.value.length < 3 || !comprobarNombre(apellido.value)) {
            warnings += `El apellido no es válido <br>`;
            entrar = true;
        }

        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            entrar = true;
        }
        if (tel.value.length < 10) {
            warnings += `El teléfono no es válido <br>`;
            entrar = true;
        }
            if (comentario.value.length < 20) {
            warnings += `El comentario no es válido <br>`;
            entrar = true;
        }

        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            form.submit();
        }
        });




