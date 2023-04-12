import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const appSettings = {
  databaseURL: "https://lista-compras-7b05f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
export const shoppingListInDB = ref(database, "shoppingList");
