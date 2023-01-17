"use strict";

const cover = document.querySelector(".cover");
const loading = document.querySelector(".loading-bar");
const conteo = document.querySelector(".conteo");
const btn = document.querySelector(".btn");
const audio = document.querySelector(".audio");
const intro = document.querySelector(".introduction");
const galery = document.querySelector(".galery-1");
const msj = document.querySelector(".msj");

const br = document.querySelector(".br");
const espera = document.querySelector(".espera");

const npc = document.querySelector(".npc-1");
const npc2 = document.querySelector(".npc-2");
const npc3 = document.querySelector(".npc-3");
const npc4 = document.querySelector(".npc-4");

let suma = 0;

const carga = setInterval(function contar(){
 if(suma < 10){
    suma+=1;
    conteo.textContent = suma + "0%";
 } else {
 	clearInterval(carga);
 	listo();
 }
},500);

const listo = () => {
   btn.style.display = "block";
}

btn.addEventListener("click",()=>{
	cover.style.animation = "quitar 2s forwards";
	audio.play();
	setTimeout(function quitar(){
      cover.style.display = "none";
      intro.style.animation = "opacidad 1s forwards";

        const sigue = setTimeout(function seguimos(){
          const caracteristica = document.querySelector(".caracteristica");
            caracteristica.style.display = "block";
             caracteristica.style.animation = "opacidad 1s forwards";
         },2000)
	},2000);    
});

const mirar = entrada => {
  const entradas = entrada[0];
  if (entradas.isIntersecting){
  	  llamar();
  }
}

const observer = new IntersectionObserver(mirar);
observer.observe(galery);

const llamar = () => {

  npc.style.animation = "galery 2s forwards ease-in-out";
  npc2.style.animation = "galery 2.3s forwards ease-in-out";
  npc3.style.animation = "galery 2.6s forwards ease-in-out";
  npc4.style.animation = "galery 2.9s forwards ease-in-out";
  setTimeout(function galer(){
     br.style.display = "block";
  },1000);
}

npc.addEventListener("click",()=>{
  msj.style.display = "block";
  msj.style.animation = " msj 1s forwards";
  msj.textContent = "Cazador";
   setTimeout(function cansar(){
     msj.style.animation = "msj_off 1s forwards ease-in";
   },1500);
});
npc2.addEventListener("click",()=>{
  msj.style.display = "block";
  msj.style.animation = " msj 1s forwards";
  msj.textContent = "Valkir";
  setTimeout(function cansar2(){
     msj.style.animation = "msj_off 1s forwards ease-in";
  },1500);
})
npc3.addEventListener("click",()=>{
  msj.style.display = "block";
  msj.style.animation = " msj 1s forwards";
  msj.textContent = "Superviviente";
   setTimeout(function cansar3(){
     msj.style.animation = "msj_off 1s forwards ease-in";
   },1500);
})
npc4.addEventListener("click",()=>{
  msj.style.display = "block";
  msj.style.animation = " msj 1s forwards";
  msj.textContent = "Constructor";
   setTimeout(function cansar4(){
     msj.style.animation = "msj_off 1s forwards ease-in";
   },1500);
})

const ver = entrada => {
  const entries = entrada[0];
  if (entries.isIntersecting){
  	 aparece();
  }
}

const aparece = ()=>{
  setTimeout(function esper(){
  	  espera.style.display = "block";
      espera.style.animation = "galery 2s forwards";
	},2000)//1000);
  setTimeout(function dale(){
    const info = document.querySelector(".info");
     info.style.display = "block";
     info.style.animation = "opacidad 2s forwards";
  },4000)//2000);
}

const observador = new IntersectionObserver(ver);
observador.observe(br);


const link = document.querySelector(".b");
const urss = document.querySelector(".urss");


link.addEventListener("mouseenter",()=> {
  urss.style.display = "block";
  urss.style.animation = "urs_on 1s forwards";
});

link.addEventListener("mouseout",()=> {
  urss.style.animation = "urs_off 1s forwards";
  setTimeout(function nose(){
    urss.style.display = "none";
  },300);
});

const info = document.querySelector(".info");

const ojo = entra => {
  const entradaz = entra[0];
  if (entradaz.isIntersecting){
  	   mostrar();
  	}
}
const mostrar = ()=>{
    const containerGalery = document.querySelector(".container-galery");
  containerGalery.style.display = "block";
   setTimeout(function slader(){
     containerGalery.style.animation = "opacidad 3s forwards";
   },2000);
}
const observadol = new IntersectionObserver(ojo);

observadol.observe(info)


/*
Terminar de configurarlo en el local host
const cache = caches;
cache.open("seguridad").then(cache=>{
	cache.add("code.js");
    console.log(cache)
});
*/

