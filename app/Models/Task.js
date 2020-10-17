import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.listId = data.listId
  }
  //Be sure to add the methods needed to create the view template for this model

  get Template() {
    return /*html*/ `
    <div class="btn">
        <input type="checkbox" name="title" id="title" checked autocomplete="off">
    </div><h6 class="justify-self-left">${this.title}</h6><button onclick="app.taskController.deleteTask('${this.id}')">X</button>
    `
  }

}
