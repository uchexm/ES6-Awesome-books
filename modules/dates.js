import { DateTime } from "./luxon.js";

export const Date = () => {
  //const DateTime = DateTime.now();
  const output = DateTime.local();
  document.getElementById("date").innerHTML = output;
};
