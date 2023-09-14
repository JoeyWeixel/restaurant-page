function createContact (){
  const main = document.getElementById('main');
  const contact = document.createElement('div');
  main.append(contact);
  contact.classList.add('contact');
  
  const test = document.createElement('p');
  test.textContent = 'test contact';
  contact.appendChild(test);
  
  return createContact;
}

export default createContact;