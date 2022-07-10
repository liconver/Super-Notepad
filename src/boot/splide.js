import { boot } from "quasar/wrappers";
import VueSplide from "@splidejs/vue-splide";

export default boot(async ({ app }) => {
  app.use(VueSplide);
});
