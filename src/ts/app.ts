import { input, validarInput } from "./funciones";

// const button = document.querySelector("#add-button") as HTMLButtonElement;
const formulario = document.querySelector("#formulario") as HTMLFormElement;

formulario.addEventListener("submit", validarInput);
