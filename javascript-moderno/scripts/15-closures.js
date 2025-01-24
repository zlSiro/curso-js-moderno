// Closure es una forma para crear una clase. es un tipo de funcion.

const automovil = (function() {
    let _marca, _velocidad = 0, _puertas;

    function setMarca(marca) {
        _marca = marca;

        return _marca;
    }

    function getMarca(){
        return _marca
    }

    function acelerar(){
        _velocidad++

        return _velocidad
    }

    function frenar(){
        _velocidad--

        return _velocidad
    }

    return {
        setMarca,
        getMarca,
        acelerar,
        frenar
    };

})();

automovil.setMarca("Toyota");
automovil.acelerar();
automovil.acelerar();
automovil.acelerar();
automovil.acelerar();
automovil.frenar();
automovil.frenar();

console.log("Marca: ", automovil.getMarca(), "Velocidad: ", automovil.acelerar() )