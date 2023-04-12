import { push } from "firebase/database";
import { shoppingListInDB } from "./db";

const input = document.querySelector("#input-field") as HTMLInputElement;
const button = document.querySelector("#add-button") as HTMLButtonElement;

button.addEventListener("click", añadirArticulo);

function añadirArticulo(e: Event) {
  push(shoppingListInDB, input.value);
}
