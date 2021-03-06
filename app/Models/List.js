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
    <div class="col-4 p-2 card justify-content-around shadow-lg" style="background-color: ${this.color}">
    <div class="row p-2 justify-content-between"><h3>${this.title}</h3>
                <button class="btn" onclick="app.listController.removeList('${this.id}')"><span aria-hidden="true"><i class="fas fa-minus-circle"></i></span></button></div>
                <div className="row p-4">
                <form onsubmit="app.taskController.createTask(event,'${this.id}')" class="p-2">
                    <div class="row justify-content-between">
                        <input type="text" name="task" id="${this.id}" class="col-6 input-clear" placeholder="Create Task">
                        <button class="btn" type="submit"><i class="fas fa-plus"></i></button>
                    </div>
                </form>
                </div>
                <h4 class="py-3">Tasks:</h4>
                <div class="row p-2">
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
