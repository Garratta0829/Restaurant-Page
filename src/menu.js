import './style.css';


function loadMenu() {
    
    
    
        const content = document.getElementById('content');
        content.innerHTML = '';
    
        const menuHeader = document.createElement('h1')
        menuHeader.innerText = 'Menu'
        menuHeader.classList.add('menu-header')
        content.appendChild(menuHeader)
        const menuItems = ['Sloppy Steaks', 'Milk Steaks']

        for (let i=0; i <= 1; i++) {
        const menuCard = document.createElement('div')
        menuCard.classList.add('card')
        const menuItem = document.createElement('h2')
        menuItem.innerText = menuItems[i];
        menuCard.appendChild(menuItem)
        content.appendChild(menuCard)
        }
        

        
        
        
    

}

export {loadMenu}
