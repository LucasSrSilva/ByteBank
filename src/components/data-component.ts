import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
import { formatarData } from "../utils/formatters.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

function rederizarData(): void {
    if(elementoDataAcesso != null){
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}

const DataComponent = {
    atualizar(){
        rederizarData();
    }
}

export default DataComponent;