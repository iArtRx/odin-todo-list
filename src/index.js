import './assets/style.css'
import initialDOM from './js/loadDOM';
import { menuNavigation, toggleMenu } from './js/DOMEvents';
import { fillTasks } from './js/task';


addEventListener("DOMContentLoaded", () => {
    initialDOM();
    menuNavigation();
    fillTasks();
})

