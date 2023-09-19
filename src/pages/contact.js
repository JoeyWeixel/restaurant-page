function createContact (){
  const main = document.getElementById('main');
  const contact = document.createElement('div');
  main.append(contact);
  contact.classList.add('contact');

  //location
  
  const location = document.createElement('div');
  location.classList.add('location');
  contact.appendChild(location);

  const greeting = document.createElement('p');
  greeting.textContent = "Come find us at:";
  greeting.classList.add('title', 'greeting');
  location.appendChild(greeting);

  const address = document.createElement('p');
  address.textContent = "123 N High St, Columbus OH, 43201";
  location.appendChild(address);

  const map = createImg('/Users/joeyweixel/repos/restaurant-page/src/map.avif', 'Map of 123 N High St');
  map.classList.add('map');
  location.appendChild(map);

  //Socials

  const socials = document.createElement('div');
  socials.classList.add('socials');
  contact.appendChild(socials);

  const followUs = document.createElement('p');
  followUs.classList.add('greeting', 'title');
  followUs.textContent = 'Follow us on social media!';
  socials.appendChild(followUs);

  const insta = createImg('/Users/joeyweixel/repos/restaurant-page/src/instagram_icon.png', 'Link to our instagram page');
  const facebook = createImg('/Users/joeyweixel/repos/restaurant-page/src/facebook_icon.png', 'Link to our facebook page');
  const twitter = createImg('/Users/joeyweixel/repos/restaurant-page/src/twitter_icon.png', 'Link to our twitter page');
  socials.appendChild(insta);
  socials.appendChild(facebook);
  socials.appendChild(twitter);
  
  return createContact;
}

function createImg (src, alt){
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

export default createContact;