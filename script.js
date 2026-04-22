 // seleciona el botton y el evento click
document.getElementById("agregar").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value; //Obtengo los valores - value para que sea 
    let nota = document.getElementById("nota").value; // un elemento de la tabla 
    let notaNum = parseFloat(nota); //pasamon el dato de tabla a numero
     // valida por si los campos esta vacios
    if (nombre === "" || nota ===""){
        alert("Debe completar todos los campos");
        return;
    }
   if (isNaN(notaNum) || notaNum < 1 || notaNum > 7) {
        alert("Por favor ingrese una nota válida entre 1 y 7 ");
        return;
    }
     // crear la tabla en js y le das lo valores del html
    let fila = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.textContent = nombre;

    let c2 = document.createElement("td");
    c2.textContent = nota;

    let c3 = document.createElement("td");
         //logica
    if(nota >= 4.0){
        c3.textContent = "Aprobado"
        c3.style.color = "green"
    }else{
        c3.textContent = "reprovado"
        c3.style.color = "red"
    }
       // los agrega a la tabla
    fila.append(c1)
    fila.append(c2)
    fila.append(c3)

      // agrega la tabla visual
    document.getElementById("tabla").appendChild(fila);
      // limpiar 
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";

});

