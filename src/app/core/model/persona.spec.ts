import { Persona } from './persona';

// podemos usar solamente describe si usamos elementos no angular como en este caso
// cada describe es un grupo de pruebas sobre un concepto
// En este caso el primero es sobre la clase persona

describe('Test for persona', () => {

    // Un describe puede estar formado por otros para probar diferentes cuestiones
    // es una forma de agruparlos

    describe('Test for person.getFullName', () => {

        // it sera la prueba unitaria (aunque es solo por convencion)
        it('should return an string with name + lastname', () => {
            let person = new Persona('Nicolas', 'Molina', 24);
            expect(person.getFullName()).toEqual('Nicolas Molina');
        });
    });

    describe('Test for person.getAgeInYears', () => {

        // una vez definidas las clases de equivalencia de la prueba
        // cada it se utilizaria como una caso de prueba
        // una vez hecha la prueba debemos ejecutar ng test 
        // le he cambiado el nombre de app...spec por specback para que no se haga 
        // cada it aparece como una spec probada en el runner, si comento la ultima, que da fallo
        // desparece el fallo y solo cuentan tres pruebas
        // mirar mio.spec.ts

        it('should return "34" years', () => {
            let person = new Persona('Nicolas', 'Molina', 24);
            let age = person.getAgeInYears(10);
            expect(age).toEqual(33);
        });

        it('should return "35" years', () => {
            let person = new Persona('Nicolas', 'Molina', 20);
            let age = person.getAgeInYears(15);
            expect(age).toEqual(35);
        });

        it('should return "18" years with negative number', () => {
            let person = new Persona('Nicolas', 'Molina', 28);
            let age = person.getAgeInYears(-10);
            expect(age).toEqual(18);
        });
    });
});
