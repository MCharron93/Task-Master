import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"


class TaskService {
  constructor() {
    // console.log("Task Service")
    ProxyState.on("tasks", saveState)
  }

  deleteTask(id) {
    debugger
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log(ProxyState.tasks)
  }

  createTask(newTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks)
  }

}



export const taskService = new TaskService();