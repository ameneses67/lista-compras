import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { imprimirArticulo, limpiarHTML, lista } from "./funciones";

const appSettings = {
  databaseURL: "https://lista-compras-7b05f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
export const shoppingListInDB = ref(database, "shoppingList");

// fetching database
onValue(shoppingListInDB, function (snapshot) {
  const articulos: string[][] = Object.entries(snapshot.val());
  limpiarHTML(lista);
  articulos.forEach((articulo) => imprimirArticulo(articulo));
});
