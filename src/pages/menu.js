function createMenu(){
  const menu = document.createElement('div');
  menu.classList.add('menu');
  
  const test = document.createElement('p');
  test.textContent('test');
  menu.appendChild(test);
  
  return menu;
}

export default menu;