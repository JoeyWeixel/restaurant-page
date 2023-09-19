import vanillaImg from "/Users/joeyweixel/repos/restaurant-page/src/vanilla_ice_cream.jpg";
import chocolateImg from "/Users/joeyweixel/repos/restaurant-page/src/chocolate_ice_cream.jpeg";
import mintchocImg from '/Users/joeyweixel/repos/restaurant-page/src/mintchoc_ice_cream.jpeg';

function createHome() {
  const homeButton = document.getElementById('homeButton');
  homeButton.classList.add('active');

  const home = document.getElementById('main');
  //spotlight

  const spotlight = document.createElement('div');
  home.appendChild(spotlight);
  spotlight.classList.add('spotlight');
  spotlight.appendChild(createImg(vanillaImg, "Vanilla ice cream sundae"));
  spotlight.appendChild(createImg(chocolateImg, "Bowl of chocolate ice cream"));
  spotlight.appendChild(createImg(mintchocImg, "Bowl of mint chocolate chip ice cream"));

  //slogan

  const slogan = document.createElement('div');
  home.appendChild(slogan);
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

  return home;
}

function createImg (src, alt){
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

export default createHome;