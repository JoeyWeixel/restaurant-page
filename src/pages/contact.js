import instagramImg from '/Users/joeyweixel/repos/restaurant-page/src/instagram_icon.png';
import facebookImg from '/Users/joeyweixel/repos/restaurant-page/src/facebook_icon.png';
import twitterImg from '/Users/joeyweixel/repos/restaurant-page/src/twitter_icon.png';
import mapImg from '/Users/joeyweixel/repos/restaurant-page/src/map.avif';

function createContact (){
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.add('active');

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

  const map = createImg(mapImg, 'Map of 123 N High St');
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

  const insta = createImg(instagramImg, 'Link to our instagram page');
  const facebook = createImg(facebookImg, 'Link to our facebook page');
  const twitter = createImg(twitterImg, 'Link to our twitter page');
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