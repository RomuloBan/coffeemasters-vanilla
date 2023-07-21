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
    }
};

export default Router;
