import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

//Public
class ListService {
  constructor() {
    ProxyState.on("lists", saveState)
  }
  removeList(id) {
    debugger
    // console.log("Remove list")
    let d = Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let temp = ProxyState.lists
        let listIndex = temp.findIndex(l => l.id == id)
        // @ts-ignore
        temp.splice(listIndex, 1)
        ProxyState.lists = temp
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    if (d) {
    }
  }
  createList(newList) {
    let createdList = new List(newList)
    let lists = [...ProxyState.lists, createdList]
    ProxyState.lists = lists
    // @ts-ignore
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You made a new list!',
      showConfirmButton: false,
      timer: 1500
    })
    // console.log(createdList)
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const listService = new ListService();
