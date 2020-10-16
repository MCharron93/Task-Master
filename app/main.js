import ListController from "./Controllers/ListController.js"
import { loadState } from "./Utils/LocalStorage.js"

class App {
  listController = new ListController();

  // TODO load your controllers here
}

window["app"] = new App();
loadState()
