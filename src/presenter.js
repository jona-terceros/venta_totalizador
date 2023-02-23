import sumar from "./sumador";


const items = document.querySelector("#cantidad_items");
const precio = document.querySelector("#precio_item");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form")
const precio_neto_resultado = document.querySelector("#precio-neto-span")
const estado_impuesto_resul = document.querySelector("#estado-impuesto-span")
const estado_seleccionado = document.querySelector("#estado-seleccionado")
const impuesto_resul = document.querySelector("#impuesto-seleccionado")
const precio_total_resul = document.querySelector("#precio-total-span") 



form.addEventListener("submit", (event) => {
  event.preventDefault();


  let precioNeto = precio.value * items.value;
  precio_neto_resultado.innerHTML = precioNeto;

  let precioTotal;
  let tasaImpuesto;
  let impuesto;

  let descuento;

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

  tasaImpuesto = (precioNeto * (impuesto / 100));
  estado_impuesto_resul.innerHTML = tasaImpuesto;
  estado_seleccionado.innerHTML = estado.value;
  impuesto_resul.innerHTML = impuesto;

  
  precioTotal = (precioNeto) + tasaImpuesto;


  precio_total_resul.innerHTML = precioTotal;
});
