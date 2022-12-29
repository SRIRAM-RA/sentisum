// import { combineReducers } from "@reduxjs/toolkit";

const initState = {
    filterTags : [
        {id:'1', tag: 'Sentisum Tags'},
        {id:'2', tag: 'DIY Tags'},
        {id:'3', tag: 'Ticket ID'},
        {id:'4', tag: 'Article Type'},
        {id:'5', tag: 'Channel'},
    ],
    values: [
        {id:'11', value: 'Value A'},
        {id:'12', value: 'Value B'},
        {id:'13', value: 'Value C'},
        {id:'14', value: 'Value D'},
        {id:'15', value: 'Value E'},
        {id:'16', value: 'Value F'},
        {id:'17', value: 'Value G'},
        {id:'18', value: 'Value H'},
        {id:'19', value: 'Value I'},
        {id:'20', value: 'Value J'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}  

// const allReducers = combineReducers({
//     filters
// })

export default rootReducer;