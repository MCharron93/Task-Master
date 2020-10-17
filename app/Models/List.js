import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
  constructor({ title, color, id }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = title
    this.color = color
    this.id = id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/`
    <div class="col-4 p-4 card justify-content-around" style="background-color: ${this.color}">
    <div class="row justify-content-between"><h3>${this.title}</h3>
                <button class="align-self-center" onclick="app.listController.removeList('${this.id}')">Remove List</button></div>
                <div className="row">
                <form onsubmit="app.taskController.createTask(event,'${this.id}')">
                    <div class="row justify-content-between">
                        <input type="text" name="task" id="task" class="col-6" placeholder="Create Task"
                            aria-describedby="helpId">
                        <button class="col-3" type="submit">Add Task</button>
                    </div>
                </form>
                </div>
                <h4 class="py-3">Tasks:</h4>
                <div class="row">
                ${this.Tasks}
                </div>
            </div>
    `
  }

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}
