function createMenu(){
  const main = document.getElementById('main');
  const menu = document.createElement('div');
  main.appendChild(menu);
  menu.classList.add('menu');

  menu.appendChild(createMenuCard('/Users/joeyweixel/repos/restaurant-page/src/chocolate_ice_cream.jpeg', 'Chocolate Scoop', '$3.99'));
  menu.appendChild(createMenuCard('/Users/joeyweixel/repos/restaurant-page/src/vanilla_ice_cream.jpg', 'Vanilla Scoop', '$3.99'));
  menu.appendChild(createMenuCard('/Users/joeyweixel/repos/restaurant-page/src/mintchoc_ice_cream.jpeg', 'Mint Chocolate Chip Scoop', '$3.99'));
  menu.appendChild(createMenuCard('/Users/joeyweixel/repos/restaurant-page/src/brownie_sundae.jpeg', 'Brownie Sundae', '$5.99'));
  
  return menu;
}

function createMenuCard(src, name, price){
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = src;
  image.alt = "Image of " + name;
  card.appendChild(image);

  const itemName = document.createElement('p');
  itemName.classList.add('title');
  itemName.textContent = name;
  card.appendChild(itemName);

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('price', 'aside');
  itemPrice.textContent = price;
  card.appendChild(itemPrice);

  return card;
}

export default createMenu;