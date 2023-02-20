
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'




const toggleNavImage =  createSlice({ 
    name: 'toggle',
    initialState: { 
      counter: true
    }, 
    reducers: { 
      increment(state) { 
        console.log('state', state.counter)
        if (state.counter === true) { 
        state.counter = false
        console.log('state', state.counter)
           }
      },
      decrement(state) { 
        console.log('state', state.counter)
        if(state.counter === false) { 
        state.counter = true
        console.log('state', state.counter)
      }
      }, 
      useCounter(state) { 
        console.log('state', state.counter)
        if(state.counter === true) { 
          state.counter = true
        }
        if(state.counter === false) { 
          state.counter  = false
        }
      }, 
      toggleCounter(state) { 
        console.log('state', state.counter)
        state.showCounter = !state.showCounter
        console.log('state', state.counter)
        
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