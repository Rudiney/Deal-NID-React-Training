import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload,
        done: false
      }

      state.allTodos.push(newTodo)
    }
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer
