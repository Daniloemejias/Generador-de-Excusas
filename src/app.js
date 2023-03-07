/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#La-excusa").innerHTML = generarExcusa();
  });
  console.log("Hello Rigo from the console! ");
};

let generarExcusa = () => {
  let pronombre = ["Un", "El"];
  let sujeto = ["Mapache", "Perro", "mono", "gato"];
  let verbo = ["se llevo", "se comio", "se robo", "me borro"];
  let objecto = ["la tarea", "el taller", " el examen"];

  let proIndx = Math.floor(Math.random() * pronombre.length);
  let subIndx = Math.floor(Math.random() * pronombre.length);
  let verIndx = Math.floor(Math.random() * pronombre.length);
  let objIndx = Math.floor(Math.random() * pronombre.length);

  return (
    pronombre[proIndx] +
    " " +
    sujeto[subIndx] +
    " " +
    verbo[verIndx] +
    " " +
    objecto[objIndx]
  );
};
