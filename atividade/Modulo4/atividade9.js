const somarTodos = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(somarTodos(10, 20, 30, 40));