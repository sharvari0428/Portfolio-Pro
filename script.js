const text = "Aspiring Web Developer";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#0f172a";

}

else{

header.style.background="#111827";

}

});
