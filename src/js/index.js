import Dashboard from '../pages/Dashboard.js'
import About from '../pages/About.js'
import Posts from '../pages/Posts.js'
import Contact from '../pages/Contact.js'

/**
 * Navigation
 * 브라우저 API 를 이용하여
 * 뒤로가기, 앞으로가기 활성화
 */
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

/**
 * Configuration Router
 */
const router = async () => {
    // Routes Array
    const routes = [
        { path: '/', view: Dashboard },
        { path: '/about', view: About },
        { path: '/posts', view: Posts },
        { path: '/contact', view: Contact }
    ]

    // Make isMatch: boolean
    const routerMatchs = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    })

    // Find True Match
    let match = routerMatchs.find(routerMatch => routerMatch.isMatch)

    // Not Match : 매치된 Route가 없으면 '/' Route로 지정
    if(!match) { 
        match = { route: routes[0], isMatch: true }
    }

    const view = new match.route.view()
    document.querySelector('#app').innerHTML = await view.getHtml()
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })

    router() 
})