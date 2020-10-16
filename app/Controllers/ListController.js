import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js";



//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = ProxyState.lists
  let template = ""
  lists.forEach(l => template += l.Template)
  document.getElementById("list").innerHTML = template

}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    ProxyState.on("lists", _drawLists)
    _drawLists();
  }

  removeList(id) {
    listService.removeList(id)
    // console.log("Remove List")
  }
  createList(e) {
    e.preventDefault();
    let form = e.target
    let newList = {
      // @ts-ignore
      title: form.title.value
    }
    listService.createList(newList)
    form.reset()
    // console.log("Creating list")
  }

  //TODO: Your app will need the ability to create, and delete lists
}
