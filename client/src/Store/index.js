
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'




const toggleNavImage =  createSlice({ 
    name: 'toggle',
    initialState: { 
      counter: 0
    }, 
    reducers: { 
      increment(state) { 
        state.counter++
      },
      decrement(state) { 
        state.counter--
      }, 
      increase(state, action) { 
        state.counter = state.counter + action.value
      }, 
      toggleCounter(state) { 
        state.showCounter = !state.showCounter
      }
    }
})

const store = configureStore({
  reducer: { 
    counter: toggleNavImage.reducer
  }
})

export const counterActions = toggleNavImage.actions
export default store