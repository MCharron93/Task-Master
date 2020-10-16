import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { taskService } from "../Services/TaskService.js"


// function _drawTask() {
//   let tasks = ProxyState.tasks
//   let template = ""
//   tasks.forEach(t => template += t.Template)
//   document.
// }
export default class TaskController {
  constructor() {
    console.log("Task controller");
  }


  createTask(e, listId) {
    e.preventDefault();

    let form = e.target
    let newTask = {
      title: form.task.value,
      listId: listId
    }
    taskService.createTask(newTask)
    form.reset()
  }
}
