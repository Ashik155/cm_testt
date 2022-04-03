const renderHTML = (item) => {
  var listItem = document.createElement("li");
  if (item.spicy) {
    listItem.innerHTML = `<h3 class="disclaimer spicy">${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
  } else {
    listItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
  }
  return listItem;
};
const renderListOnly = (pizzaList, pizza, pizzaContainer) => {
  pizzaList.innerHTML = "";
  pizza.forEach((item) => {
    if (!item.spicy) {
      var pizzaItem = document.createElement("li");
      pizzaItem.innerHTML = `<h3>  ${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
      pizzaList.appendChild(pizzaItem);
    }
  });
   pizzaContainer.appendChild(pizzaList);
   return 
};

const renderSpicyList = (pizzaList, pizza, pizzaContainer)=>{
    pizzaList.innerHTML = "";
  pizza.forEach((item) => {
    pizzaList.appendChild(renderHTML(item));
  });
  pizzaContainer.appendChild(pizzaList);
    return 
}
module.exports = {
  renderHTML,
  renderListOnly,
  renderSpicyList
};
