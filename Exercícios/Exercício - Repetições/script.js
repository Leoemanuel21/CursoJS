function verificar(){
    var inicio = window.document.getElementById('txtinicio');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var res = window.document.getElementById('res');
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!';
    }else{
        res.innerHTML = 'Contando: <br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo inválido Considerando PASSO 1')
            p = 1;
        }
        if(inicio < fim){
            // Contagem Crescente
            for(i; i<=f; i+=p){
            res.innerHTML += `${i} \u{1f449}`;
            }
        }else{
            // Contagem Regressiva
            for(i; i>=f; i-=p){
            res.innerHTML += `${i} \u{1f449}`;
            }
        }
        res.innerHTML += ` \u{1f3c1}`;
    }
}