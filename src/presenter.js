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

const tasa_descuento = document.querySelector("#tasa-descuento")
const descuento_resul = document.querySelector("#descuento-span")




form.addEventListener("submit", (event) => {
  event.preventDefault();

  let precioNeto = precio.value * items.value;
  precio_neto_resultado.innerHTML = precioNeto;
  let impuesto;
  let precioTotal;
  let tasaImpuesto;
  let tasaDescuento = 0;
  let descuento;

  switch (estado.value) {
    case "ut":
      impuesto = 6.65; 
      break;
    case "nv":
      impuesto = 8; 
      break;
    case "tx":
      impuesto = 6.25; 
      break;
    case "al":
      impuesto = 4; 
      break;
    case "ca":
      impuesto = 8.25; 
      break;
  }

  if(items.value >= 1000)
  {
    tasaDescuento = 3;
  }
  if(items.value >= 3000)
  {
    tasaDescuento = 5;
  }
  if(items.value >= 7000)
  {
    tasaDescuento = 7;
  }
  if(items.value >= 10000)
  {
    tasaDescuento = 10;
  }
  if(items.value >= 30000)
  {
    tasaDescuento = 15;
  }
  if(items.value >= 1000)
  {
    tasaDescuento = 3;
  }
  if(items.value >= 3000)
  {
    tasaDescuento = 5;
  }
  if(items.value >= 7000)
  {
    tasaDescuento = 7;
  }
  if(items.value >= 10000)
  {
    tasaDescuento = 10;
  }
  if(items.value >= 30000)
  {
    tasaDescuento = 15;
  }


  tasaImpuesto = (precioNeto * (impuesto / 100));
  estado_impuesto_resul.innerHTML = tasaImpuesto;
  estado_seleccionado.innerHTML = estado.value;
  impuesto_resul.innerHTML = impuesto;

  descuento = precioNeto * (tasaDescuento/100);
  tasa_descuento.innerHTML = tasaDescuento;
  descuento_resul.innerHTML = descuento;
  
  precioTotal = (precioNeto) + tasaImpuesto - descuento;


  precio_total_resul.innerHTML = precioTotal;
  
});

