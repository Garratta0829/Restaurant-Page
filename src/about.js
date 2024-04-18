import './style.css';


function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const aboutHeader = document.createElement('h1');
    aboutHeader.innerText = 'About';
    aboutHeader.classList.add('about-header');

    content.appendChild(aboutHeader)
}

export { loadAbout };