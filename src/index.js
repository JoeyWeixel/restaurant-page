const home = function(){
  const content = document.querySelector('.content');

  const background = document.createElement("div");
  background.classList.add("background");
  content.appendChild(background);

  const container = document.createElement("div");
  container.classList.add("container", "parallax");
  background.appendChild(container);

  document.create
  const logo = document.createElement("img");
  logo.src = "";
  logo.alt = "Restaraunt Logo";
  logo.classList.add("image", "logo");
  container.appendChild(logo);

  const dBlock = addFloatingBlock(container);
  const description = document.createElement("p");
  description.classList.add("description");
  dBlock.appendChild(description);

  const hBlock = addFloatingBlock(container);
  hBlock.appendChild(generateParagraph(""))

}

function generateParagraph(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function addFloatingBlock(container) {
  const block = document.createElement("div");
  block.classList.add("block", "container");
  container.add(block);
  return block;
}