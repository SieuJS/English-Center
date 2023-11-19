const routes = [
    {path : "/", view : () => Home()}
]

const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}

const router = async () => {
    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch: location.pathname === route.path
        };
    });
    let match = potentialMatches.find(route => route.isMatch);
    if (!match) {
        match = {
            route : routes[0],
            isMatch : true,
        }
    }
    return match.view();
}

document.addEventListener('DOMContentLoaded',  () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches = ("[data-link") ){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
});

export function MyRouters (props) {
    props.children.forEach(page => {
        let p = {
            path : page.path,

        }
    })
}

export function MyRoute (props)  {
    let p 
}