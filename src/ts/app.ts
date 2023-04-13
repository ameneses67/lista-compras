import { añadirArticulo } from "./funciones";

const button = document.querySelector("#add-button") as HTMLButtonElement;

button.addEventListener("click", añadirArticulo);
