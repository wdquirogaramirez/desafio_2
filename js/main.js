/* -----------Variables-------------- */
let x = document.getElementById("inputCantidad");



/* -------functions------------ */

/* -----------validación numero---------- */
function validation() {
  let fun = parseInt(x.value)
  
  if (isNaN(fun)) {
    window.alert("no ingreso numero")
    document.getElementById("inputCantidad").value= "";
  } else{
    document.getElementById("result").value= ("Total a Pagar: $ "+ fun);

  }  
}

/* ---------calcular porcentaje --------------*/
function porciento(){
  let y = document.getElementById("inputCategoria").value;
  let valor = parseInt(x.value) ;
  let imprimir;

  switch (y) {
    case "Eliga uno...":
      document.getElementById("result").value = ("Total a Pagar: $ "+ valor);
      
      break;
      case "80":
        imprimir= valor-((valor*80)/100);
        document.getElementById("result").value = ("Total a Pagar: $ "+ imprimir) ;
      
      break;
      case "50":
        imprimir= valor-((valor*50)/100);
        document.getElementById("result").value = ("Total a Pagar: $ "+ imprimir) ;
      
      break;
      case "18":
        imprimir= valor-((valor*18)/100);
        document.getElementById("result").value = ("Total a Pagar: $ "+ imprimir) ;
      
      break;
  
    default:
      break;
  }

}
/* ---------limpiar----------- */
function limpiar(){
  document.getElementById("formulario").reset();
}


document.getElementById("inputCantidad").addEventListener("change",  validation);

/* ---------------------- */
document.getElementById("inputCategoria").addEventListener("change", porciento);
/* -------------------- */
document.getElementById("borrar").addEventListener("click", limpiar);


