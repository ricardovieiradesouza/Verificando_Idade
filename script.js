function verificar () {

   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
          window.alert('[ERRO] Verifique os dados e tente novamente!')
 } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
            img.setAttribute('src', 'menino.png')    
           } else if (idade < 30) {
                //Jovem
            img.setAttribute('src', 'jovem.jpeg')
            } else if (idade < 50) {
                //aduto
            img.setAttribute('src', 'homem.png')
            } else  {
               //Idoso
           img.setAttribute('src', 'idoso1.png')
           }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //Crianca
        img.setAttribute('src', 'menina.png')    
       } else if (idade < 30) {
            //Jovem
        img.setAttribute('src', 'jovem_mulher.png')
        } else if (idade < 50) {
            //aduta
        img.setAttribute('src', 'coroa.png')
        } else  {
           //Idoso
       img.setAttribute('src', 'idosa.png')
       }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Foi detectado sendo  ${genero} com ${idade} anos`
    res.appendChild(img)
 }

}