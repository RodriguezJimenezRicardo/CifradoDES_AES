document.body.oncopy = function(){ return false; };
document.body.oncut = function(){ return false; };
document.body.onpaste = function(){ return false; };
document.body.oncontextmenu = function(){ return false};

function letras(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var exp =/[a-z]/;
    var tec = String.fromCharCode(teclado);
    return exp.test(tec);
}