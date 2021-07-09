let on = document.getElementById('on')
let off = document.getElementById('off')
let lamp = document.getElementById('lamp')



function isLampBroken(){ //verifica se a lampada esta quebrada
return lamp.src.indexOf ('quebrada') > -1
}



function ligar(){
    if( !isLampBroken() ){
     lamp.src='./img/ligada.jpg'
   
}
}
function desligar(){
    if( !isLampBroken() ){
    lamp.src='./img/desligada.jpg'
    }
}
function quebrada(){
    lamp.src='./img/quebrada.jpg'
}


on.addEventListener('click', ligar)
off.addEventListener('click', desligar)
lamp.addEventListener ('mouseover',ligar)
lamp.addEventListener ('mouseleave',desligar)
lamp.addEventListener('dblclick', quebrada)

