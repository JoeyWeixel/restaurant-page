function createMenu(){
  const main = document.getElementById('main');
  const menu = document.createElement('div');
  main.appendChild(menu);
  menu.classList.add('menu');
  
  const test = document.createElement('p');
  test.textContent = 'test menu';
  menu.appendChild(test);
  
  return menu;
}

export default createMenu;