import {settings} from "./settings";
import {progressScroll} from "./progress";



const app = {

  init() {
    progressScroll();
    this.enabled();
  },

  enabled() {
    document.documentElement.classList.add(settings.jsEnabled);
    document.documentElement.classList.remove(settings.disabled);
  },

}
app.init();



