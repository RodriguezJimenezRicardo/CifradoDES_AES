function cifraDes(){
    let txt = document.getElementById("txtDes").value;
    console.log("Texto en DES: "+txt);
    
    let claveDes = document.getElementById("clavedes").value;
    if(claveDes.length != 8){
        alert("Dije que la clave debe contener exactamente 8 caracteres >:c");
        return false;
    }

    let cifra =  CryptoJS.DES.encrypt(txt,claveDes);
    
    descargarArchivo(generarTexto(cifra), 'CifradoDES.txt');
}
function cifraAes(){
    let txt = document.getElementById("txtAes").value;
    console.log("Texto en AES: "+txt);

    let claveAes = document.getElementById("claveaes").value;
    if(claveAes == ""){
        alert("Como quieres cifrar si no pones una clave ._. Ingresa una clave");
        return false;
    }

    let cifra = CryptoJS.AES.encrypt(txt, claveAes);

    descargarArchivo(generarTexto(cifra), 'CifradoAES.txt');    
}

function descifraDes(){
    let cifrado = document.getElementById("txtDes").value;
    console.log("Cifrado en DES: "+cifrado);

    let claveDes = document.getElementById("clavedes").value;
    if(claveDes.length != 8){
        alert("Dije que la clave debe contener exactamente 8 caracteres >:c");
        return false;
    }

    let desci = CryptoJS.DES.decrypt(cifrado,claveDes);
    desci = desci.toString(CryptoJS.enc.Utf8);
    descargarArchivo(generarTexto(desci), 'DescifradoDES.txt');  
}

function descifraAes(){
    let cifrado = document.getElementById("txtAes").value;
    console.log("Cifrado en AES: "+cifrado);

    let claveAes = document.getElementById("claveaes").value;
    if(claveAes == ""){
        alert("Como quieres descifrar si no pones una clave ._. Ingresa una clave");
        return false;
    }

    let desci = CryptoJS.AES.decrypt(cifrado,claveAes);
    desci = desci.toString(CryptoJS.enc.Utf8);
    descargarArchivo(generarTexto(desci), 'DescifradoAES.txt');
}

function leerdes(){
    let archivodes = document.getElementById("archivodes").files[0];

    let readerDes = new FileReader();
    readerDes.onload = function(fileLoadedEvent){
        let txtDes = fileLoadedEvent.target.result;
        document.getElementById("txtDes").value = txtDes;
    };

    readerDes.readAsText(archivodes, "UTF-8");
    
}
function leeraes(){
    let archivodes = document.getElementById("archivoaes").files[0];

    let readerDes = new FileReader();
    readerDes.onload = function(fileLoadedEvent){
        let txtDes = fileLoadedEvent.target.result;
        document.getElementById("txtAes").value = txtDes;
    };

    readerDes.readAsText(archivodes, "UTF-8");
    
}

//Vamos a descargar el archivo yei

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    //creamos un FileReader para leer el Blob
    var reader = new FileReader();
    //Definimos la función que manejará el archivo
    //una vez haya terminado de leerlo
    reader.onload = function (event) {
      //Usaremos un link para iniciar la descarga
      var save = document.createElement('a');
      save.href = event.target.result;
      save.target = '_blank';
      //Truco: así le damos el nombre al archivo
      save.download = nombreArchivo || 'CifradoDes.txt';
      var clicEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      //Simulamos un clic del usuario
      //no es necesario agregar el link al DOM.
      save.dispatchEvent(clicEvent);
      //Y liberamos recursos...
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    //Leemos el blob y esperamos a que dispare el evento "load"
    reader.readAsDataURL(contenidoEnBlob);
  };

//Vamos a descargar el txt uwu



//Genera un objeto Blob con los datos en un archivo TXT
function generarTexto(datos) {
let texto = [];
texto.push(datos);

//El constructor de Blob requiere un Array en el primer
//parámetro así que no es necesario usar toString. El
//segundo parámetro es el tipo MIME del archivo
return new Blob(texto, {
    type: 'text/plain'
});
};
