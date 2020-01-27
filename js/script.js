var is2005=true;

function platsbyte(){
    if(is2005 ){
        document.getElementById("platsbyte").src = "/dragonslair2020.jpg";
is2005=false;
    } else{
        document.getElementById("platsbyte").src = "/dragonslair2005.png";
        is2005=true

    }
       
}

document.getElementById("platsbyte").onclick = platsbyte;

