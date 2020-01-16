export class Retencion{
    constructor(public minimo:number,public maximo:number,public porcentaje:number){

    }

    calculaTasa(cantidad:number):number{
        return cantidad*(this.porcentaje/100)
    }
}