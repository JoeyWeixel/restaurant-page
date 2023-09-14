function createHome() {
  const home = document.getElementById('main');
  //spotlight

  const spotlight = document.createElement('div');
  home.appendChild(spotlight);
  spotlight.classList.add('spotlight');
  spotlight.appendChild(createImg("../src/vanilla_ice_cream.jpg", "Vanilla ice cream sundae"));
  spotlight.appendChild(createImg("../src/chocolate_ice_cream.jpeg", "Bowl of chocolate ice cream"));
  spotlight.appendChild(createImg("../src/mintchoc_ice_cream.jpeg", "Bowl of mint chocolate chip ice cream"));

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