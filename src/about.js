import './style.css';


function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const aboutHeader = document.createElement('h1');
    aboutHeader.innerText = 'About';
    aboutHeader.classList.add('about-header');

    const aboutContent = document.createElement('p')
    aboutContent.classList.add('about-content')
    aboutContent.innerHTML = 'At Andrew\'s, you pay to watch me eat.  And you watch in silence.  And you will enjoy it. Dont ask how long we\'ve been in operation, because I don\'t know.'
    
    content.appendChild(aboutHeader)
    content.appendChild(aboutContent)
}

export { loadAbout };