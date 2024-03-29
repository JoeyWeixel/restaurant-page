import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import bowlImg from '/Users/joeyweixel/repos/restaurant-page/src/ice-bowl.svg';

let curPage = 0;

function createHeader(){
  const header = document.createElement('div');
  content.appendChild(header);
  header.classList.add('header');
  content.appendChild(header);

  const headerSelections = document.createElement('div');
  headerSelections.classList.add('selections');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Ice Cream Parlor';
  headerSelections.appendChild(title);

  headerSelections.appendChild(createHomeButton());
  headerSelections.appendChild(createMenuButton());
  headerSelections.appendChild(createContactButton());

  header.appendChild(headerSelections);

  return header;
}

function createMainContent(){
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter(){
  const footer = document.createElement('div');
  content.appendChild(footer);
  footer.classList.add('footer');
  
  const footerLogo = createImg(bowlImg, 'company logo');
  footerLogo.classList.add('logo');
  footer.appendChild(footerLogo);

  const disclosures = document.createElement('p');
  disclosures.classList.add('disclosures');
  disclosures.textContent = "Trademark 2023 Joey Weixel";
  footer.appendChild(disclosures);

  return footer;
}

function createImg (src, alt){
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

function createHomeButton(){
  const homeButton = document.createElement('p');
  homeButton.id = "homeButton";
  homeButton.textContent = "Home";
  homeButton.addEventListener('click', (e) => updatePage(createHome))
  return homeButton;
}

function createMenuButton(){
  const menuButton = document.createElement('p');
  menuButton.id = "menuButton";
  menuButton.textContent = "Menu";
  menuButton.addEventListener('click', (e) => updatePage(createMenu))
  return menuButton;
}

function createContactButton(){
  const contactButton = document.createElement('p');
  contactButton.id = "contactButton";
  contactButton.textContent = "Contact";
  contactButton.addEventListener('click', (e) => updatePage(createContact))
  return contactButton;
}

function initializePage(){
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMainContent());
  content.appendChild(createFooter());

  updatePage(createHome);
}

function resetButtons(){
  const homeButton = document.getElementById('homeButton');
  homeButton.classList.remove('active');
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.remove('active');
  const menuButton = document.getElementById('menuButton');
  menuButton.classList.remove('active');
}

function updatePage(newPage){
   const main = document.getElementById('main');
   main.innerHTML = '';
   resetButtons();
   newPage();
}

export default initializePage;