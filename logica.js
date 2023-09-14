
















function generaNumeroCasuale() {
    const numeroCasuale = Math.floor(Math.random() * 76) + 1;
    console.log(numeroCasuale)
    return numeroCasuale;
  }
  document.getElementById('estrailButton').addEventListener('click', function () {
    const numero = generaNumeroCasuale();
    const divNumeroEstratto = document.getElementsByClassName('cell');
    divNumeroEstratto.innerHtml = numero;
  }); 
 






