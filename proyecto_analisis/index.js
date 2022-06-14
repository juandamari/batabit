function capacidadDeuda (ingreso, egreso,porcentaje) {
    const capacidad = (ingreso - egreso) * porcentaje;
    return capacidad;
};

function clickboton() {
    const inputprice = document.getElementById("input1");
    const enteringreso = inputprice.value;

    const inputdiscount = document.getElementById ("input2");
    const enteregreso = inputdiscount.value;

    const inputporcentaje = document.getElementById ("opciones");
    const enterporcentaje = inputporcentaje.value

    const resultCoupon = document.getElementById("resultp")
    
    let capacidad = capacidadDeuda (enteringreso,enteregreso,enterporcentaje)
    resultCoupon.innerText =`capacidad de endeudamiento es de: $${capacidad} pesos`
};