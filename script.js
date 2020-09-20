var form = document.querySelector('form');
var valorFinal = document.querySelector('#valorFinal');
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    var valorProjeto = parseInt(document.querySelector('#valor').value);
    var horasTrabDia = parseInt(document.querySelector('#horas').value);
    var diasTrab = parseInt(document.querySelector('#dias').value);
    var diasFerias = parseInt(document.querySelector('#ferias').value);
    
   var resultado = (valorProjeto / (diasTrab * 4 * horasTrabDia) ) + ( ( diasFerias * diasTrab * horasTrabDia ) );

   valorFinal.appendChild(document.createTextNode(resultado.toFixed(2)));
 
   document.querySelector('form').reset();
}

