import ListController from "./Controllers/ListController.js"
import TaskController from "./Controllers/TaskController.js"
import { loadState } from "./Utils/LocalStorage.js"

class App {
  listController = new ListController();

  taskController = new TaskController()
  // TODO load your controllers here
}

window["app"] = new App();
loadState()
