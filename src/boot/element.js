import { boot } from "quasar/wrappers";
import ElementPlus from "element-plus";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(ElementPlus);
});
