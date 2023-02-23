import sumar from "./sumador";


const items = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador-form")
const div = document.querySelector("#resultado-div")
const precio_resultado = document.querySelector("#precio-span")
const items_resultado = document.querySelector("#items-span")
const estado = document.querySelector("#estado");
const estado_resul = document.querySelector("#estado-span")
const estado_impuesto_resul = document.querySelector("#estado-impuesto-span")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);

  //div.innerHTML = items.value;
  items_resultado.innerHTML = items.value;
  precio_resultado.innerHTML = precio.value;
  estado_resul.innerHTML = estado.value;

  let impuesto;
  switch (estado.value) {
    case "ut":
      impuesto = 6.65; 
      break;
    case "nv":
      impuesto = 8.00; 
      break;
    case "tx":
      impuesto = 6.25; 
      break;
    case "al":
      impuesto = 4.00; 
      break;
    case "ca":
      impuesto = 8.25; 
      break;
  }
  estado_impuesto_resul.innerHTML = impuesto;
});
