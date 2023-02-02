
import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
document.addEventListener("DOMContentLoaded" , ()=>{
  const getTodos = JSON.parse(localStorage.getItem("todos"));
   if(getTodos)return initialState=getTodos
  
  })

const TodoContext = createContext();
const TodoContextDispatcher = createContext();
let  initialState= [
    
  ];

const ADD_TODO=(state , action)=>{
  const updatedTodos = [...state]  ;
  const newTodo = {...action.payload , dateFa:new Date().toLocaleDateString("fa") ,dateEn:new Date().toLocaleDateString() }
updatedTodos.push(newTodo);
return updatedTodos

}
const EDIT_TODO=(state , action)=>{
  const updatedTodos = [...state]  ;
  const selectedTodoIndex=updatedTodos.findIndex(todo=>todo.id===action.payload.id)
updatedTodos[selectedTodoIndex].name=action.payload.name;
updatedTodos[selectedTodoIndex].dis=action.payload.dis;
return updatedTodos

}
const COMPELET_TODO=(state , action)=>{
  const updatedTodos = [...state]  ;
  const selectedTodoIndex=updatedTodos.findIndex(todo=>todo.id===action.payload);
  updatedTodos[selectedTodoIndex].com=!updatedTodos[selectedTodoIndex].com;
return updatedTodos

}


const SHOW_EDIT =(state , action)=>{
  const updatedTodos = [...state]  ;
  const selectedTodoIndex=updatedTodos.findIndex(todo=>todo.id===action.payload);
  updatedTodos.forEach((todo)=>{
    if(todo.id!==action.payload){return todo.edit=false}
  })
  updatedTodos[selectedTodoIndex].edit=!updatedTodos[selectedTodoIndex].edit;
return updatedTodos
}

const REMOVE_TODO =(state , action)=>{
  const updatedTodos = [...state]  ;
  const updatedTodo=updatedTodos.filter(todo=>todo.id!==action.payload);
return updatedTodo
}

const rducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": return ADD_TODO(state, action)
    case "COMPELET_TODO":return COMPELET_TODO(state , action)
    case "SHOW_EDIT":return SHOW_EDIT(state , action)

    case "REMOVE_TODO": return REMOVE_TODO(state , action)
    case "EDIT_TODO": return EDIT_TODO(state , action)
    // case "SH": return REMOVE_TODO(state , action)

    default:
      return state;
    }
  };
  const TodoProvider = ({ children }) => {
    const [todo, dispatch] = useReducer(rducer, initialState);
    useEffect(()=>{
     
    
      localStorage.setItem("todos" ,JSON.stringify(todo))
      },[todo])
 
  return (
    <TodoContext.Provider value={todo}>
      <TodoContextDispatcher.Provider value={dispatch}>
        {children}
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatcher = () => useContext(TodoContextDispatcher);
