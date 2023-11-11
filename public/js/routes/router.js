const router = async () => {
    const routes = [
        {path : "/", view : () => console.log("Viewing Dashboard")},
        {path : "/post", view : () => console.log("Viewing Posts")},
        {path : "/setting", view : () => console.log("Viewing seetting")},
    ]

    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatch: location.pathname === route.path
        };
    });
    console.log(potentialMatches)
}

document.addEventListener('DOMContentLoaded',  () => {
    router();
});