import { createApp } from "vue";
import App from "./App.vue";

import "index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
