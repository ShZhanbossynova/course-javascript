import pages from './pages';
import('./styles.css');
import mainPage from './mainPage';
import loginPage from './loginPage';
import profilePage from './profilePage'; // в верхней части

// const pageNames = ['login', 'main', 'profile'];

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();


profilePage.handleEvents(); // в нижней части
