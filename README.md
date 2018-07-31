Sample ReactJS application to implement CURD and routing

# Simple Redux Steps

 1. Create Reducer function as below
 
 const initialState = [];
 const reducer1 = (state = initialState, action) => {
    switch(actonType) {
      case splict_string: 
        // return new state using action1 payload
        // e.g. return {...state, action1.payload}
      case Action1: 
        // return new state using action1 payload
        // e.g. return [...state, action1.payload]
      case Action1: 
        // return new state using action1 payload
        // e.g. return {...state, action1.payload}
        .
        .
        .
        .
       default:
        return state
    }
 }
 
 2. Create Store using reducer function as below
 
    const store = Redux.createStore(reducer1)
     
    // to check store content call store.getState();
    
 3. Create action ( to tell reducer to change state)
  
  const action1 = {
    type: 'splict_string',
    payload: 'asdfg'
  }
  
  4. Dispatch action so that Reducer will execute and update state
  
  store.dispatch(action1)
  
  store.getState();
  
