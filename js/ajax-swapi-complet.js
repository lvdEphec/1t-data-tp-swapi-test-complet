"use strict";!function(){const e={listeFilms:"choixFilm",listePersonnages:"listePersonnages"},s={};function t(e){return document.getElementById(e)}function n(){let n=JSON.parse(this.responseText),o="";s.filmsLiensPersonnages={};for(let e of n.sort((e,s)=>e.episode_id-s.episode_id))o+=`<option value="${e.episode_id}">${e.title}</option>\n`,s.filmsLiensPersonnages[e.episode_id]=e.characters;t(e.listeFilms).innerHTML=o}function o(){t(e.listePersonnages).innerHTML=`${s.messageErreur} status: ${this.status}, readyState: ${this.readyState}`}function r(){t(e.listePersonnages).innerHTML="";let n=function(){let n=0,o=[],r=s.filmsLiensPersonnages[t(e.listeFilms).value].length;return function(){let s=JSON.parse(this.responseText);if(o.push(s.name),++n>=r){let s=o.sort((e,s)=>e.localeCompare(s)).map(e=>`<li>${e}</li>`).join("");t(e.listePersonnages).innerHTML=s,function(){let e=document.querySelectorAll("li");for(let s=0;s<e.length;s++)e[s].style.fontStyle="italic"}()}}}();for(let e of s.filmsLiensPersonnages[this.value]){let s=new XMLHttpRequest;s.open("get",e,!0),s.onload=n,s.onerror=o,s.send()}}s.filmsLiensPersonnages={},s.mesures=[],s.messageErreur="Erreur, désolé!",document.addEventListener("DOMContentLoaded",function(){t(e.listeFilms).addEventListener("change",r),function(){let e=new XMLHttpRequest;console.log(`status: ${e.status}, readyState: ${e.readyState}`),e.open("get","https://devweb.ephec.be/swapi/films/",!0),e.onload=n,e.onerror=o,e.onreadystatechange=function(){s.mesures.push(performance.now()),console.log("délai : "+(s.mesures[s.mesures.length-1]-s.mesures[s.mesures.length-2])+" ms"),console.log(`status: ${e.status}, readyState: ${e.readyState}`)},console.log(`status: ${e.status}, readyState: ${e.readyState}`),e.send(),s.mesures.push(performance.now())}()})}();