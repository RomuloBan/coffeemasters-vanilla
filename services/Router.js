const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const url = e.target.getAttribute('href');
                Router.go(url);
            });
        });
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch(route) {
            case '/':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break;
            case '/order':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Your Order';
                break;
        }
        if (pageElement) {
            const main = document.querySelector('main');
            main.innerHTML = '';
            main.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }

    }
};

export default Router;
