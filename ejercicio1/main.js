
let boton = document.getElementById("boton")
let respuesta = document.getElementById("resultado")

boton.addEventListener("click",calcular);

function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);

    let estatura = parseFloat(document.getElementById("estatura").value);
    
    if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
        respuesta.innerHTML = "Por favor, ingrese valores válidos para peso y estatura.";
        return;
    }
    let imc =   peso / (estatura * estatura); 
    
    respuesta.innerHTML=`su imc es: ${imc.toFixed(2)}`;
}
