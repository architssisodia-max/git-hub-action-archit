const text = "DevOps Engineer | AWS | Kubernetes | Terraform";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();