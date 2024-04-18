console.log('Time to eat!')
import './style.css';

function loadInitialPage() {
    const content = document.getElementById('content')

    const header = document.createElement('h1')
    header.innerHTML = 'Andrews wonderful restaurant'
    header.classList.add('home-header')
    
    const body = document.createElement('h2')
    body.innerHTML = 'At Andrews wonderful restaurant there is no food for you'

    const blurb = document.createElement('h3')
    blurb.innerHTML = 'Does this work?'
    
    content.appendChild(header)
    content.appendChild(body)
    content.appendChild(blurb)
    // content.append(blurb)
};

function loadpage() {
    const content = document.getElementById('content')
    content.innerHTML = ''

    const header = document.createElement('h1')
    header.innerHTML = 'Andrews wonderful restaurant'
    header.classList.add('home-header')
    
    const body = document.createElement('h2')
    body.innerHTML = 'At Andrews wonderful restaurant there is no food for you'

    const blurb = document.createElement('h3')
    blurb.innerHTML = 'Does this work?'
    
    content.appendChild(header)
    content.appendChild(body)
    content.appendChild(blurb)
    // content.append(blurb)
};

export { loadpage, loadInitialPage};