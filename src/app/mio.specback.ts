// todo describe lleva al menos un it
// este it debe llevar una prueba expect que pueda dar un resultado falso o verdadero
describe("mi prueba porque si", () => {
    it("probando nada", () => {
        expect(false).toBeTruthy();
        // solo return false no va a hacer nada
        return false;
    })
})