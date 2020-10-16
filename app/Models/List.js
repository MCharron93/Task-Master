import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor({ title, id }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

    this.title = title
    this.id = id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/`
    <div class="col-4 card card-body">
                <h3>Title Here</h3>
                <div><button onclick="app.listController.removeList('${this.id}')">Remove Task</button></div>
                <form onsubmit="app.listController.createTask('${this.id}')">
                    <div class="form-group">
                        <input type="text" name="task" id="task" class="form-control" placeholder="create task"
                            aria-describedby="helpId">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </div>
    `
  }

  get Task() {
    return /*html*/ `
    
    `
  }
}
