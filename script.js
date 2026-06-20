// Typing Effect

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

// Navbar Scroll

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#0f172a";

}else{

header.style.background="#111827";

}

});

// Scroll Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));
const btn=document.getElementById("themeBtn");

btn.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

btn.innerHTML="🌞";

}else{

btn.innerHTML="🌙";

}

}
