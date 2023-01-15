import './assets/style.css'
import initialDOM from './js/loadDOM';
import { menuNavigation, toggleMenu } from './js/navigation';


addEventListener("DOMContentLoaded", () => {
    initialDOM();
    menuNavigation();
    toggleMenu(); 
})

