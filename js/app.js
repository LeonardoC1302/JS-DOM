console.log('Hello World');
// Query Selector
const heading = document.querySelector('.header__texto h2'); // Returns 0 or 1 element
console.log(heading);
heading.textContent = 'New Heading';

// Query Selector All
const links = document.querySelectorAll('.navegacion a');
console.log(links);
links[0].textContent = 'New Text for Link';

// Get Element By ID
const heading2 = document.getElementById('heading');
console.log(heading2);

// Generate HTML
const newLink = document.createElement('A'); // Create the link
newLink.href = 'new-link.html'; // Add href
newLink.textContent = 'New Link'; // Add text
newLink.classList.add('navegacion__enlace'); // Add class

// Add to HTML
const navegation = document.querySelector('.navegacion');
navegation.appendChild(newLink);
