
// 1 - a <p> with red text that says “Hey I’m red!”
const content = document.querySelector('.content');

const paragraph = document.createElement('p');
paragraph.classList.add('first-para');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
content.appendChild(paragraph);

// 2 - an <h3> with blue text that says “I’m a blue h3!”
const headerThree = document.createElement('h3');
headerThree.classList.add('header-three');
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";
content.appendChild(headerThree);

// 3 - a <div> with a black border and pink background color with the following elements inside of it:
    
    
    // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const newDiv = document.createElement("div");
newDiv.classList.add('new-div');
newDiv.style.borderColor = "black";
newDiv.style.backgroundColor = "pink";


// 3a - another <h1> that says “I’m in a div”
const headerOne = document.createElement("h1");
headerOne.classList.add("header-one");
headerOne.textContent = "I'm in a div";
newDiv.appendChild(headerOne);

// 3b - a <p> that says “ME TOO!”
const newParagraph = document.createElement("p");
newParagraph.classList.add("new-paragraph");
newParagraph.textContent = "ME TOO!";
newDiv.appendChild(newParagraph);

content.appendChild(newDiv);
