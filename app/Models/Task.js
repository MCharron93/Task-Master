import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.listId = data.listId
    this.completed = data.completed || false
  }
  //Be sure to add the methods needed to create the view template for this model

  get Template() {
    return /*html*/ `
    <div class="col-12 d-flex justify-content-between">
        <input type="checkbox" ${this.completed ? "checked" : ""} name="checkbox" id="checkbox" class="align-self-center">
    <h5 class="text-left align-self-center">${this.title}</h5><button type="button" onclick="app.taskController.deleteTask('${this.id}')" class="btn">
    <span aria-hidden="true"><i class="fas fa-minus-circle"></i></span>
  </button></div>
    `
  }

}
