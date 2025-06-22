//Adding content

let playground = document.getElementById("playground");
playground.append(" Good evening");

// Creating an element

let myWorld = document.createElement("div");
myWorld.textContent = "I love to travel";
playground.append(myWorld);

/*
The key difference between innerHtml and textContent is textContent shows the text of the element which is hidden by display property in CSS and innerHtml does not.
*/

//Modifying text content using innerText property

let fact = document.createElement("p");
playground.append(fact);

fact.innerText = "Elephant is a large animal";

//Working with HTML content

let spellBook = document.createElement("div");
spellBook.innerHTML = "<p>Name: <strong>Amey</strong>, cgpa: <strong>8.55</strong></p>";

playground.append(spellBook);

//Comparing innerHtml and textContent

console.log(spellBook.textContent);
console.log(spellBook.innerHTML);

//Removing elements

let strangerThings = document.createElement("p");
strangerThings.textContent = "Steve Harrington is the best babysitter!!";

playground.append(strangerThings);
playground.removeChild(strangerThings);

//Removing elements using loops

let computer = document.createElement("div");
computer.innerHTML = 
  `<p>GPU</p>
  <p>RAM</p>
  <p>Graphic card</p>`;

playground.append(computer);
  
while (computer.firstChild) {
  computer.removeChild(computer.firstChild);
}

//Working with attributes(using getters and setters)

let city = document.createElement("div");
city.textContent = "Mumbai";
playground.append(city);

city.setAttribute("id","famousCity");
city.setAttribute("class","worldFamousCities");

console.log(city.getAttribute("id"));     
console.log(city.getAttribute("class"));      

//Working with attributes(doing it directly)

city.id = "hello";
city.className = "myFavourite";

console.log(city.id);                     
console.log(city.className);


//Manipulating classes

const shapeshifter = document.createElement("div");
shapeshifter.textContent = "Shapeshifter";
playground.append(shapeshifter);

shapeshifter.classList.add("magical","creature");
console.log("Initial class: ",shapeshifter.className);

shapeshifter.classList.remove("creature");
shapeshifter.classList.add("Humanoid");

console.log("Updated classes: ",shapeshifter.className);

shapeshifter.classList.toggle("invisible",Math.random() > 0.5);
shapeshifter.classList.replace("Humanoid","beast");
console.log("Third class: ",shapeshifter.classList.item(2));

//Inline style
/* By this method we can also use animations */

const enchantedGem = document.createElement("div");
enchantedGem.textContent = "Diamond";
enchantedGem.style.fontSize = "50px";
enchantedGem.style.color = "red";
enchantedGem.style.transition = "all 2s";
playground.append(enchantedGem);

//Event handling

const magicButton = document.createElement("button");
magicButton.textContent = "cast spell";
playground.append(magicButton);

magicButton.addEventListener("click", () => {
  alert("A fireball finishes off the Demogorgen")
});

magicButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "orange";
});

//Creating and removing elements dynamically

const spellList = document.createElement("ul");
playground.append(spellList);

function addSpell(spellName){
  const spell = document.createElement("li");
  spell.textContent = spellName;
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => spell.remove());
  spell.append(removeButton);
  spellList.append(spell);
}

addSpell("Fireball");
addSpell("Frost Nova");

//Traversing the DOM

const parentElement = document.createElement("div");
const childElement1 = document.createElement("p");
const childElement2 = document.createElement("span");
parentElement.append(childElement1,childElement2);
playground.append(parentElement);

console.log(parentElement.firstChild);
console.log(parentElement.lastChild);
console.log(childElement1.nextSibling);
console.log(childElement2.previousSibling);
console.log(childElement1.parentNode);


//Creating document fragment

const fragment = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
  const magicalItem = document.createElement("li");
  magicalItem.textContent = `Magical Item ${i + 1}`;
  fragment.append(magicalItem);
}

const spell_list = document.createElement("ul");
playground.append(spell_list);

spell_list.append(fragment);