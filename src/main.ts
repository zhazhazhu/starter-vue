import "./assets/main.css";
// import "uno.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";

createApp(App).use(createPinia()).use(router).mount("#app");
