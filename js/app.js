// Query Selector
const heading = document.querySelector('.header__texto h2'); // Returns 0 or 1 element
console.log(heading);
heading.textContent = 'New Heading';

// Query Selector All
const links = docuement.querySelectorAll('.navegacion a');
console.log(links);
links[0].textContent = 'New Text for Link';

// Get Element By ID
const heading2 = document.getElementById('heading');
console.log(heading2);