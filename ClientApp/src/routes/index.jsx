import Dashboard from 'layouts/Dashboard/Dashboard.jsx';
import BlankPage from 'layouts/Dashboard/BlankPage.jsx';
import LoginPage from 'layouts/Dashboard/LoginPage.jsx';

var indexRoutes = [
    { path: "/login", name: "Login", component: LoginPage },
    { path: "/register", name: "Register", component: LoginPage },
                        
    { path: "/lockscreen", name: "Lockscreen", component: BlankPage },
	{ path: "/403", name: "403", component: BlankPage },
    { path: "/404", name: "404", component: BlankPage },
    { path: "/405", name: "405", component: BlankPage },
    { path: "/408", name: "408", component: BlankPage },
    { path: "/500", name: "500", component: BlankPage },
    { path: "/503", name: "503", component: BlankPage },
    { path: "/offline", name: "Offline", component: BlankPage },

    { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
