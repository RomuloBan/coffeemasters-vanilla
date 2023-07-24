import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
   console.log("DOM is ready");
   loadData();
   app.router.init();
});;
