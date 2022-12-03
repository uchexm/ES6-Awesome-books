import { Date } from "./dates.js";
import * as sec from "./events.js";
import * as scrip from "./script.js";

// eslint-disable-next-line max-classes-per-file
const bookstore = new scrip.Books();

if (localStorage.getItem("books")) {
  bookstore.printfn();
}
const addBtn = document.getElementById("btn");
const title = document.getElementById("title");
const author = document.getElementById("author");

addBtn.addEventListener("click", () => {
  if (title.value !== "" && author.value !== "") {
    bookstore.addbooks(title.value, author.value);
    document.forms[0].reset();
  }
});

document.addEventListener("click", (removed) => {
  const { id } = removed.target;
  if (id.substr(0, 4) === "book") {
    bookstore.deletebook(id);
  }
});
sec.listener();
Date();
