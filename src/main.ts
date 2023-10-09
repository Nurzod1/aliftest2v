import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";
import components from "@/plugins/components";
import directives from "@/directives";

// Global component registration
const app = createApp(App);

Object.entries(components).forEach(([name, component]) =>
  app.component(name, component)
);

app.use(router).use(directives).mount("#app");
