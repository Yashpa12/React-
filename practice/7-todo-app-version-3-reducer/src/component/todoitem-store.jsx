
const NewTodoitemReducer = (currentvalue,action)=>{
    let NewtodoItems = currentvalue
    if  (action.type === 'NEW_ITEM') {
      NewtodoItems = [
        ...currentvalue,
        { naam : action.payload.itemname , dueDate : action.payload.itemdate}
      ]
    }
    else if (action.type === 'DEL_ITEM'){
      NewtodoItems = currentvalue.filter ((item)=> item.naam !== action.payload.itemname)
    }
  return NewtodoItems;
  }

const NewTodoitemProvider = ({children})=>{
            // const [todoitem, setTodoitem] = useState([]);
const [todoitem, DisptchTodoItem] = useReducer(NewTodoitemReducer , []);

  const handleChange = (itemname, itemdate) => {
    // console.log(`new item added : ${itemname} Date : ${itemdate}`);
   let Addnewaction = {
    type : 'NEW_ITEM',
    payload : {
      itemname,
      itemdate
    }
   }
   DisptchTodoItem(Addnewaction)
  };
  const handleDeleteItem = (todoitemName) => {
   let DeleteAction = {
    type : "DEL_ITEM",
    payload : {
      itemname : todoitemName
    }
   }
   DisptchTodoItem (DeleteAction)
  };
        
    return
}
export default NewTodoitemProvider ;