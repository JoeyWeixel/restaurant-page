function createHome() {
  const home = document.getElementById('content');
  //header
  const header = document.createElement('div');
  content.appendChild(header);
  header.classList.add('header');
  content.appendChild(header);

  const headerSelections = document.createElement('div');
  headerSelections.classList.add('selections');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'The Creamery';
  headerSelections.appendChild(title);

  appendMenuToElement(headerSelections)

  header.appendChild(headerSelections);

  //spotlight

  const spotlight = document.createElement('div');
  content.appendChild(spotlight);
  spotlight.classList.add('spotlight');
  spotlight.appendChild(createImg("../src/vanilla_ice_cream.jpg", "Vanilla ice cream sundae"));
  spotlight.appendChild(createImg("../src/chocolate_ice_cream.jpeg", "Bowl of chocolate ice cream"));
  spotlight.appendChild(createImg("../src/mintchoc_ice_cream.jpeg", "Bowl of mint chocolate chip ice cream"));

  //slogan

  const slogan = document.createElement('div');
  content.appendChild(slogan);
  slogan.classList.add('slogan');

  const icon = createImg('', 'scooper icon');
  icon.classList.add('icon');
  slogan.appendChild

  const sloganStatement = document.createElement('p');
  sloganStatement.textContent = "Lorem ipsum dolor sit amet";
  sloganStatement.classList.add('statement', 'slogan');
  slogan.appendChild(sloganStatement)

  const aside = document.createElement('p');
  aside.textContent = 'Consectetur adipiscing elit';
  aside.classList.add('statement', 'aside');
  slogan.appendChild(aside);

  //footer
  
  const footer = document.createElement('div');
  content.appendChild(footer);
  footer.classList.add('footer');
  
  const footerLogo = createImg('../src/ice-bowl.svg', 'company logo');
  footerLogo.classList.add('logo');
  footer.appendChild(footerLogo);

  // const footerSelections = document.createElement('div');
  // footerSelections.classList.add('selections');
  // appendMenuToElement(footerSelections)
  // footer.appendChild(footerSelections);

  const disclosures = document.createElement('p');
  disclosures.classList.add('disclosures');
  disclosures.textContent = "Trademark 2023 Joey Weixel";
  footer.appendChild(disclosures);

  return home;
}

function createImg (src, alt){
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

function appendMenuToElement(element){
  const homeButton = document.createElement('p');
  homeButton.textContent = "Home";
  const menuButton = document.createElement('p');
  menuButton.textContent = "Menu";
  const contactButton = document.createElement('p');
  contactButton.textContent = "Contact";
  element.appendChild(homeButton);
  element.appendChild(menuButton);
  element.appendChild(contactButton);
}

export default createHome;