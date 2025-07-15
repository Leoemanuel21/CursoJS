function verificar(){
    var inicio = window.document.getElementById('txtinicio');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var res = window.document.getElementById('res');
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(inicio.value) < 1){
        res.innerHTML = 'Impossível contar!';
    }else{
        res.innerHTML = 'Contando:';
        for(i; i<=f; i+=p){
        res.innerHTML += ` ${i}`;
        }
    }
}