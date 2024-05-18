import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";
import { formatarData } from "../utils/formatters.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
function rederizarData() {
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar() {
        rederizarData();
    }
};
export default DataComponent;