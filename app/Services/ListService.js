import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

//Public
class ListService {
  constructor() {
    ProxyState.on("lists", saveState)
  }
  removeList(id) {
    // console.log("Remove list")
    let d = confirm("Are you sure you want to delete?")
    if (d) {
      let temp = ProxyState.lists
      let listIndex = temp.find(l => l.id == id)
      // @ts-ignore
      temp.splice(listIndex, 1)
      ProxyState.lists = temp
    }
  }
  createList(newList) {
    debugger
    let createdList = new List(newList)
    let lists = [...ProxyState.lists, createdList]
    ProxyState.lists = lists
    // console.log(createdList)
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const listService = new ListService();
