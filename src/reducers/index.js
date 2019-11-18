export const initialTodo = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, 
        {item: action.payload,
        completed: false,
        id: new Date()
      }]
    case "TOGGLE_COMPLETED":
      return(state.map(name => {
        if(name.item === action.payload) {
          return {
            ...name,
            completed: !name.completed
          }
        }
        return name;
      }))
    case "CLEAR_COMPLETED":
      return(
        state.filter(todoItem => {
          return !todoItem.completed;
        })
      )
    default:
        return state;
  }
};
