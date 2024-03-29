import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Restaurants from "../views/Restaurants.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "root", redirect: "/signin" },
  { path: "/signin", name: "sign-in", component: SignIn },
  { path: "/signup", name: "sign-up", component: SignUp },
  { path: "/restaurants", name: "restaurants", component: Restaurants },
  {
    path: "/admin/restaurants",
    name: "admin-restaurants",
    component: () =>
      import(
        /* webpackChunkName: "admin-restaurants" */ "../views/AdminRestaurants.vue"
      ),
  },
  {
    path: "/restaurants/feeds",
    name: "restaurants-feeds",
    component: () =>
      import(
        /* webpackChunkName: "restaurants-feeds" */ "../views/RestaurantsFeeds.vue"
      ),
  },
  {
    path: "/restaurants/top",
    name: "restaurants-tops",
    component: () =>
      import(
        /* webpackChunkName: "restaurants-tops" */ "../views/RestaurantsTop.vue"
      ),
  },
  {
    path: "/restaurants/:id",
    name: "restaurant",
    component: () =>
      import(/* webpackChunkName: "restaurant" */ "../views/Restaurant.vue"),
  },
  {
    path: "/restaurants/:id/dashboard",
    name: "restaurant-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "restaurant-dashboard" */ "../views/RestaurantDashboard.vue"
      ),
  },
  { path: "/admin", exact: true, redirect: "/admin/restaurants" },
  {
    path: "/users/top",
    name: "users-top",
    component: () =>
      import(/* webpackChunkName: "users-top" */ "../views/UsersTop.vue"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import(/* webpackChunkName: "use" */ "../views/User.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
