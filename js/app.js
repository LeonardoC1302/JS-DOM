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

// Event Listeners
window.addEventListener('load', () => console.log('Page Loaded')); // Load waits for JS and files that depend on HTML to load
document.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded')); // DOMContentLoaded waits for HTML to load
window.onScroll = () => console.log('Scrolling...'); // Scroll

// Event Listeners for HTML Elements
// const btnSend = document.querySelector('.boton--primario');
// btnSend.addEventListener('click', (e) => {
//     console.log(e);
//     e.preventDefault(); // Prevents default action
//     // Form Validation

//     console.log('Form Sent');
// });

// Events for Inputs and Text Areas
const data = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nameInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#mensaje');
const form = document.querySelector('.formulario');

nameInput.addEventListener('input', readText);
emailInput.addEventListener('input', readText);
msgInput.addEventListener('input', readText);

// Submit Event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate Form
    const { nombre, email, mensaje } = data;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if (nombre === '' || email === '' || mensaje === '') {
        showAlert('All fields are required', true);
        return;
    }

    // Send Form
    showAlert('Form Sent');
});

function readText(e) {
    console.log(e.target.value);
    data[e.target.id] = e.target.value; // Add value to data object
    console.log(data);
}

function showAlert(msg, error=null){
    const alert = document.createElement('P');
    alert.textContent = msg;
    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('correcto');
    }
    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}