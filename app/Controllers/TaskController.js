import { ProxyState } from "../AppState.js"
// import { listService } from "../Services/ListService.js"
import { taskService } from "../Services/TaskService.js"


export default class TaskController {
  constructor() {
    // console.log("Task controller");
  }

  deleteTask(id) {
    taskService.deleteTask(id)
  }

  createTask(e, listId) {
    e.preventDefault();

    let form = e.target
    let newTask = {
      title: form.task.value,
      listId: listId,
      completed: false
    }
    taskService.createTask(newTask)
    form.reset()
  }
}
