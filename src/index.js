import { loadInitialPage } from './home';
import { loadpage } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';
import './style.css';

loadInitialPage()


const menuBtn = document.getElementById('menu-btn');
menuBtn.innerText = "Menu";

const homeBtn = document.getElementById('home-btn');
homeBtn.innerHTML = 'Home';

const aboutBtn = document.getElementById('about-btn');
aboutBtn.innerHTML = 'About';


homeBtn.addEventListener('click', () => {
    loadpage()
});

menuBtn.addEventListener('click', () => { 
    loadMenu() 
});

aboutBtn.addEventListener('click', () => {
    loadAbout()
});



const buttons = document.querySelectorAll('button')

