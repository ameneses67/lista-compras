import { push, ref, remove } from "firebase/database";
import { database, shoppingListInDB } from "./db";

export const input = document.querySelector("#input-field") as HTMLInputElement;
export const lista = document.querySelector("#lista") as HTMLUListElement;

export function validarInput(e: Event) {
  e.preventDefault();

  if (input.value === "") {
    alerta("Escribe un artículo primero...", "temporal");
    return;
  } else {
    push(shoppingListInDB, input.value);
    reset(input);
  }
}

// function añadirArticulo(e: Event) {

//   const { value } = input;

//   // añadir artículo a la base de datos
//   push(shoppingListInDB, value);

//   // resetear el input
//   reset(input);
// }

export function imprimirArticulo(articulo: string[]) {
  const listaLI = document.createElement("li");
  listaLI.classList.add(
    "text-lg",
    "bg-orange-200",
    "hover:bg-orange-300",
    "transition",
    "p-4",
    "shadow-md",
    "cursor-pointer",
    "text-orange-950",
    "rounded-lg",
    "min-w-fit",
    "text-center",
    "grow"
  );
  listaLI.textContent = articulo[1];

  lista.appendChild(listaLI);

  listaLI.onclick = () => {
    eliminarArticulo(articulo[0]);
  };
}

function reset(campo: HTMLInputElement) {
  campo.value = "";
}

export function limpiarHTML(html: HTMLElement) {
  while (html.firstChild) {
    html.removeChild(html.firstChild);
  }
}

function eliminarArticulo(id: string) {
  const idLocation = ref(database, `shoppingList/${id}`);
  remove(idLocation);
}

export function alerta(mensaje: string, tipo?: string) {
  const alertaParrafo = document.createElement("li");
  alertaParrafo.classList.add(
    "text-center",
    "text-orange-900",
    "font-extrabold",
    "text-2xl",
    "w-full",
    "mb-8"
  );

  alertaParrafo.textContent = mensaje;

  if (tipo !== "temporal") {
    limpiarHTML(lista);
    lista.insertBefore(alertaParrafo, lista.firstChild);
  } else {
    lista.insertBefore(alertaParrafo, lista.firstChild);
    setTimeout(() => {
      alertaParrafo.remove();
    }, 3000);
  }
}
