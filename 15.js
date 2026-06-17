
function celsiusParaFahrenheitV1(c) {
    return (c * 1.8) + 32;
}
console.log(celsiusParaFahrenheitV1(0));


const celsiusParaFahrenheitV2 = (c) => {
    return (c * 1.8) + 32;
}
console.log(celsiusParaFahrenheitV2(25));


const celsiusParaFahrenheitV3 = (c) => (c * 1.8) + 32;
console.log(celsiusParaFahrenheitV3(100));
