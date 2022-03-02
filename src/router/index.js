import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// Importing components from other files
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardDetails from "../views/DashboardDetails.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

// Defining routes
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  { path: "/login", component: Login, name: "Login" },
  {
    path: "/dashboard/date/:id",
    component: DashboardDetails,
    name: "DashboardDetails",
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

//  Creating the router instance and pass the `routes` option
const router = createRouter({
  //  Provide the history implementation to use. We are using the web history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
