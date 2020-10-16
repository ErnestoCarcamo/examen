/*
El interés compuesto, es un sistema que
capitaliza los intereses que hace que el valor que se paga por concepto de intereses se
incrementa mes a mes, puesto que la base para el cálculo del interés se incrementa
cada vez que se liquidan los respectivos intereses.
El cálculo del interés compuesto se realiza con la siguiente fórmula:
○ 𝐶𝑛 = 𝐶𝑜 ∗ (1 + 𝑖) ^ 𝑛
■ Cn es el capital final.
■ Co es el capital inicial.
■ i es la tasa de interés.
■ n es el período de tiempo (en meses).
*/
exports.calculoInteresCompuesto = (capital, tasaInteres, plazo)=>{
    let meses = 0;
    let capitalInicial = 0;
    let interes = 0;
    let cuotas = [];
    let capitalFinal = 0;
    meses
    plazo = Math.round(plazo * 12);

    capitalFinal = capital*(1+(tasaInteres/100))^plazo;
    cuotas = cuotas.toFixed(2);

 /*   while (mes != plazo) {
        interes = ;
    }
    return capitalFinal;
*/
};