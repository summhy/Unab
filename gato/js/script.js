let contador=1;

alert("Bienvenido");

function jugada(casillero){
  let simbolo;
    if(contador%2 == 1){
        simbolo="X";
    }else{
        simbolo="0";
    }
    casillero.textContent=simbolo;
    contador++;
    
  
}

function validar(simbolo){
    
    console.log(document.getElementById("pos1").textContent);

    if(document.getElementById("pos1").textContent==document.getElementById("pos2").textContent&& document.getElementById("pos2").textContent == document.getElementById("pos3").textContent && document.getElementById("pos3").textContent== simbolo ){
        alert("Has ganado!!!!");
    }
    if(document.getElementById("pos4").textContent==document.getElementById("pos5").textContent&& document.getElementById("pos5").textContent == document.getElementById("pos6").textContent && document.getElementById("pos6").textContent== simbolo ){
        alert("Has ganado!!!!");
    }

    if(document.getElementById("pos7").textContent==document.getElementById("pos8").textContent&& document.getElementById("pos8").textContent == document.getElementById("pos9").textContent && document.getElementById("pos9").textContent== simbolo ){
        alert("Has ganado!!!!");
    }
 
} 