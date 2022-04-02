import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;



//first I Will be filtring out the items based on type and then sorting using the hellper function SortMe
const pizza = (menuItems.filter((item) => item.type === "pizza")).
sort((a,b)=> a.menuOrder - b.menuOrder);
const starters = (menuItems.filter((item) => item.type === "starters")).
sort((a,b)=> a.menuOrder - b.menuOrder);
const pastas = (menuItems.filter((item) => item.type === "pasta")).
sort((a,b)=> a.menuOrder - b.menuOrder);


//Now I have Sorted the items based on the menuOrder,
// It is now Time to Render it on HTML PAGE 

//grabing the DOM FOR THE PIZZA
const pizzaContainer = document.getElementById('pizza');
var pizzaList = document.createElement('ul');
pizza.forEach((item) => {
  var pizzaItem = document.createElement('li');
  
  if(item.spicy){
    pizzaItem.innerHTML = `<h3 class="disclaimer spicy">  ${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
  }else{
    pizzaItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
  }
  pizzaList.appendChild(pizzaItem);
});
pizzaContainer.appendChild(pizzaList);

//Grabing the DOM FOR THE STARTER
const startersContainer = document.getElementById('starters');
var startersList = document.createElement('ul');
starters.forEach((item) => {
    var startersItem = document.createElement('li');
    if(item.spicy){
      startersItem.innerHTML = `<h3 class="disclaimer spicy">${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
    }
    else{
        startersItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
        }   
    startersList.appendChild(startersItem);
});
startersContainer.appendChild(startersList);

//grabbing the DOM FOR THE PASTA
const pastasContainer = document.getElementById('pasta');
var pastasList = document.createElement('ul');
pastas.forEach((item) => {
    var pastasItem = document.createElement('li');  
    if(item.spicy){
        pastasItem.innerHTML = `<h3 class="disclaimer spicy">${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
        }
    else{
        pastasItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;  
        }
    pastasList.appendChild(pastasItem);

    });
pastasContainer.appendChild(pastasList);

