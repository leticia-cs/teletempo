import * as main from "./main.js";

function cancelar_almoco(){
    let almocoOUT = main.h;
    console.log(`[LOGADO - AlmocoOUT]: ${almocoOUT}`);
    //window.location.href = "/acoes";
}

document.getElementById('btn-cancelar-almoco').addEventListener('click', cancelar_almoco);

// TODO: FIX ATUALIZACAO HORA
function atualizar_relogio(){
    document.getElementById("timer-hora").textContent = main.h;

}

document.addEventListener('DOMContentLoaded', () => {
    atualizar_relogio();
    setInterval(atualizar_relogio, 1000);
});