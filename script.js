let principalVisible= false;
//function hidden
function mostrarOcultarPrincipal(){
    if(principalVisible){
        document.getElementById("nav").classList="";
        principalVisible= false;
    }else{   
        document.getElementById("nav").classList="responsive";
        principalVisible= true; 
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    principalVisible=false;
}  







