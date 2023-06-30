//Funciones

let suma = (x, y = 0) => {
    
    let resultado = x + y;

    console.log(resultado);
  };

  let resta = (x, y = 0) =>{
    
    let resultado = x - y;
    console.log(resultado);
  };

  let mult = (x, y = 0) =>{
  
    let resultado = x * y;
    console.log(resultado);
  };

  let div = (x, y = 0) =>{
  
    let resultado = x / y;
    console.log(resultado);
  };
  
  let cuadrado = (x) =>{
    let resultado= Math.pow(x,2);
    console.log(resultado)
  }

  module.exports = {suma, resta, mult, div, cuadrado};