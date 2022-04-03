import "./styles.css";
import menu from "./menu";
const { renderHTML, renderListOnly, renderSpicyList } = require("./renderHtml");
const sortingObject = require("./sortingObject");
const menuItems = menu.items;

//first I Will be filtring out the items based on type and then sorting using the hellper function SortMe
const pizza = menuItems
  .filter((item) => item.type === "pizza")
  .sort((a, b) => a.menuOrder - b.menuOrder);
const starters = menuItems
  .filter((item) => item.type === "starters")
  .sort((a, b) => a.menuOrder - b.menuOrder);
const pastas = menuItems
  .filter((item) => item.type === "pasta")
  .sort((a, b) => a.menuOrder - b.menuOrder);

//Grabing the DOM FOR THE STARTER
const startersContainer = document.getElementById("starters");
var startersList = document.createElement("ul");
starters.forEach((item) => {
  startersList.appendChild(renderHTML(item));
});
startersContainer.appendChild(startersList);

//grabbing the DOM FOR THE PASTA
const pastasContainer = document.getElementById("pasta");
var pastasList = document.createElement("ul");
pastas.forEach((item) => {
  pastasList.appendChild(renderHTML(item));
});
pastasContainer.appendChild(pastasList);

//grabbbing The DOM FOR THE PIZZA
const pizzaContainer = document.getElementById("pizza");
var pizzaList = document.createElement("ul");
//keeping eye on the checkbox
const checkbox = document.getElementById("spicy");
if (checkbox.checked) {
  renderSpicyList(pizzaList, pizza, pizzaContainer);
}
checkbox.addEventListener("change", (e) => {
  if (checkbox.checked) {
    renderSpicyList(pizza);
  } else {
    renderListOnly(pizzaList, pizza, pizzaContainer);
  }
});
