import './style.css';


function loadMenu() {
    
    
    
        const content = document.getElementById('content');
        content.innerHTML = '';
    
        const menuHeader = document.createElement('h1')
        menuHeader.innerText = 'Menu'
        menuHeader.classList.add('menu-header')
        content.appendChild(menuHeader)
    

}

export {loadMenu}
