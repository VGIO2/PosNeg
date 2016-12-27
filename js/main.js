  
function calcular(){
    var a= document.getElementById("a");
    var b= document.getElementById("b");
    var psalida= document.getElementById("salida");
    
    var vara=a.value;
    var varb=b.value;
   
    
    
    if (vara>0 && varb>0){
        psalida.innerHTML="0";
        
    }
    else{
        psalida.innerHTML="1";
    }
}