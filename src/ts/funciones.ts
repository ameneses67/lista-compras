import { push } from "firebase/database";
import { shoppingListInDB } from "./db";

const input = document.querySelector("#input-field") as HTMLInputElement;
export const lista = document.querySelector("#lista") as HTMLUListElement;

export function añadirArticulo(e: Event) {
  const { value } = input;

  // añadir artículo a la base de datos
  push(shoppingListInDB, value);

  // resetear el input
  reset(input);
}

export function imprimirArticulo(articulo: string[]) {
  const listaLI = document.createElement("li");
  listaLI.classList.add(
    "text-lg",
    "bg-orange-200",
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

function eliminarArticulo(id: string) {}
