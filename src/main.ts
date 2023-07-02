import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/myStyle.css";
import VueAnimateOnScroll from "vue3-animate-onscroll";

import "./assets/fonts/Arial/stylesheet.css";
import "./assets/fonts/MontserratAlternates/stylesheet.css";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css";

import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";

import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";

// import "./assets/lib/wow/wow.min.js";

import "./assets/lib/easing/easing.min.js";
import "./assets/lib/waypoints/waypoints.min.js";
import "./assets/lib/owlcarousel/owl.carousel.min.js";

import "./assets/js/main.js";

import "../node_modules/swiper/swiper-bundle.min.css";

import Swiper, { Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination],
});

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).use(VueAnimateOnScroll).mount("#app");
