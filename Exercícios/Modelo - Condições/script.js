function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verfique os dados e tente novamente!');
    }else{
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/bebe-homem.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Imagens/jovem-homem.png');
            }else if(idade < 50){
                img.setAttribute('src', 'Imagens/homem.png');
            }else{
                img.setAttribute('src', 'Imagens/idoso.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/bebe-mulher.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Imagens/jovem-mulher.png');
            }else if(idade < 50){
                img.setAttribute('src', 'Imagens/mulher.png');
            }else{
                img.setAttribute('src', 'Imagens/idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}