export class MenuPage extends HTMLElement {
   constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });

      const styles = document.createElement('style');
      this.root.appendChild(styles);

      async function loadCss() {
         const result = await fetch('./components/MenuPage.css');
         const css = await result.text();
         styles.textContent = css;
      }
      loadCss();
   } 

   connectedCallback() {
      const template = document.getElementById('menu-page-template');
      const content = template.content.cloneNode(true);
      this.root.appendChild(content);

      window.addEventListener('appmenuchange', () => {
         this.render();
      });
      this.render();
   }

   render() {
      const menu = this.root.querySelector('#menu');
      menu.innerHTML = '';
      if (app.store.menu) {
         for (let category of app.store.menu) {
            const listCategory = document.createElement('li');
            listCategory.innerHTML = `
               <h3>${category.name}</h3>
               <ul class="category">
               </ul>
            `;
            menu.appendChild(listCategory);
            category.products.forEach(product => {
               const item = document.createElement('product-item');
               item.dataset.product = JSON.stringify(product);
               listCategory.querySelector('ul.category').appendChild(item);
            });
         }
      } else {
         menu.innerHTML = 'Loading...';
      }
   }
}

customElements.define('menu-page', MenuPage);
