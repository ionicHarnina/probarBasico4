import { Retencion } from "./retencion.model";

export class Impuesto {

    constructor(
      public retenciones:Retencion[]=[]
    ) { 
        //Creamos las retenciones
    }

     getRetencionDos(salBr: number): number {
        salBr = this.calcularTasaComun(salBr);
        let tramos = [900, 1500, 5000];
        let i = this.compruebaTramo(tramos, salBr);
        let porcent = [15, 19, 33, 55];
        return salBr - salBr * porcent[i];
    }

    private compruebaTramo(tramos: number[], salBr: number) {
        let i: 0;
        while (tramos[i] < salBr && i < tramos.length) {
            i++;
        }
        return i;
    }

    private calcularTasaComun(salBr: number) {
        salBr = salBr - this.gastoSS;
        salBr = salBr - (salBr * this.porcentajeSindicatos / 100);
        return salBr;
    }
}