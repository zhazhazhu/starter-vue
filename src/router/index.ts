//https://github.com/hannoeru/vite-plugin-pages
import routes from "~pages";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({ routes: routes, history: createWebHistory(import.meta.env.BASE_URL) });

export default router;
