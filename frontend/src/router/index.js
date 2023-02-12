import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import WaitingView from "../views/verify/waiting.vue";
import ProfileView from "../views/Profile/Profile.vue";
import Subscription from "../views/Subscription/Subscription.vue";
import VerificationInfos from "../views/Stepper/Main.vue";
import ErrorPage from "../views/ErrorPage.vue";
import OfferId from "../views/Offer/OfferId.vue";
import resetPassword from '../components/General/resetPassword.vue'
import resetForm from '../components/General/resetForm.vue'
import AdminRoutes from "./admin.js";
import OfferScrapperView from "../views/OfferScrapper/OfferScrapperView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/verify/waiting",
      name: "waiting",
      component: WaitingView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/error",
      name: "error",
      component: ErrorPage,
    },
    {
      path: "/subscription",
      name: "subscription",
      component: Subscription,
    },
    {
      path: "/verify/infos",
      name: "verify_user",
      component: VerificationInfos,
    },
    {
      path: "/offer/:id",
      name: "offerId",
      component: OfferId,
    },
    {
      path: '/reset/password',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/reset/password/form',
      name: 'resetForm',
      component: resetForm
    },
    {
      path: "/scrapper-create-offer",
      name: "scrapper-create-offer",
      component: OfferScrapperView,
    },
    ...AdminRoutes
  ]
});

export default router;
