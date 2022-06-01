const input1 = document.getElementById('input1')
const btnaccion1 = document.getElementById('accion1')

console.log(btnaccion1)

const input2 = document.getElementById('input2')
const btnaccion2 = document.getElementById('accion2')

const input3 = document.getElementById('input3') 
const btnaccion3 = document.getElementById('accion3')


const input4 = document.getElementById('input4')
const input41 = document.getElementById('input41') 
const btnaccion4 = document.getElementById('accion4') 

const input5 = document.getElementById('input5') 
const btnaccion5 = document.getElementById('accion5')


document.getElementById('solucion1').style.display = 'none'
document.getElementById('solucion2').style.display = 'none'
document.getElementById('solucion3').style.display = 'none'
document.getElementById('solucion4').style.display = 'none'
document.getElementById('solucion5').style.display = 'none'

//EJERCICIO 1 PARTE 1
const pares = (n) => {
  let resultado = []
  for (let i = 0; resultado.length <= n - 1 ; i += 2){
    resultado.push(i)
  }
  return resultado
}

btnaccion1.addEventListener('click', ()=> {
  document.getElementById('resultado1').innerHTML = pares(input1.value);
});



//EJERCICIO 1 PARTE 2

const pares2 = (n) => {
  let resultado = []

  for (let i = 2; resultado.length <= n - 1 ; i += 2){
    resultado.push(i)
  }

  return resultado
}

btnaccion2.addEventListener('click', ()=> {
  document.getElementById('resultado2').innerHTML = pares2(input2.value);
});



//EJERCICIO 2 PARTE 1


const sumaInpares = (n) =>{
  let resultado = []

  for(let i = 0 ; i <= n ; i++) {
    if(i%2 !== 0) {
      resultado.push(i)
    }
  }

  return resultado.reduce((acc, val) => 
    acc + val, 0)
}

btnaccion3.addEventListener('click', () => {
  document.getElementById('resultado3').innerHTML = sumaInpares(input3.value)
})


//EJERCICIO 2 PARTE 2

const sumaDesdeHasta = (n, m) => {
  let resultado = [];

  for(let i = +n ; i <= +m ; i++) {
    if(i%2 !== 0) {
      resultado.push(i)
    }
  }
  return resultado.reduce((acc, val) =>
  acc + val, 0)
}

btnaccion4.addEventListener('click', ()=> {
  document.getElementById('resultado4').innerHTML = sumaDesdeHasta(input4.value, input41.value);
})


//FIBONACCI

const seqFibonacci = (n) => {

  let fibonacci = [0 , 1]

  for ( let i = 2; i <= n ; i ++ ) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i -1]
  }

  

return fibonacci;
  };

  btnaccion5.addEventListener('click', ()=> {
    document.getElementById('resultado5').innerHTML = seqFibonacci(input5.value)
  } )




  //MOSTRAR/OCULTAR SOLUCIONES

  document.getElementById('btn-solucion1').addEventListener('click', () => {

    let solucion1 = document.getElementById('solucion1')
  
    if(solucion1.style.display == '') {
     solucion1.style.display = 'none'; 
    } else {
      solucion1.style.display = '';
    }
  })

  document.getElementById('btn-solucion2').addEventListener('click', ()=> {

    let solucion2 = document.getElementById('solucion2')
  
    if(solucion2.style.display == '') {
     solucion2.style.display = 'none'; 
    } else {
      solucion2.style.display = '';
    }
  })

  document.getElementById('btn-solucion3').addEventListener('click', ()=> {

    let solucion3 = document.getElementById('solucion3')
  
    if(solucion3.style.display == '') {
     solucion3.style.display = 'none'; 
    } else {
      solucion3.style.display = '';
    }
  })

  document.getElementById('btn-solucion4').addEventListener('click', ()=> {

    let solucion4 = document.getElementById('solucion4')
  
    if(solucion4.style.display == '') {
     solucion4.style.display = 'none'; 
    } else {
      solucion4.style.display = '';
    }
  })

  document.getElementById('btn-solucion5').addEventListener('click', ()=> {

    let solucion5 = document.getElementById('solucion5')
  
    if(solucion5.style.display == '') {
     solucion5.style.display = 'none'; 
    } else {
      solucion5.style.display = '';
    }
  })

  //LIMPIAR
  
  document.getElementById('limpiar1').addEventListener('click', (e) => {
    input1.value = 0;
    document.getElementById('resultado1').innerHTML = ''
  })

  document.getElementById('limpiar2').addEventListener('click', (e) => {
    input2.value = 0;
    document.getElementById('resultado2').innerHTML = ''
  })

  document.getElementById('limpiar3').addEventListener('click', (e) => {
    input3.value = 0;
    document.getElementById('resultado3').innerHTML = ''
  })

  document.getElementById('limpiar4').addEventListener('click', (e) => {
    input4.value = 0;
    input41.value = 0
    document.getElementById('resultado4').innerHTML = ''
  })

  document.getElementById('limpiar5').addEventListener('click', (e) => {
    input5.value = 0;
    document.getElementById('resultado5').innerHTML = ''
  })