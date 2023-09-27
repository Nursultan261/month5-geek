const initialState = {
    user: {
        name: '',
        age: 0,
        gender: ''
    }
}


 const reducer = (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_USER":
            return{
                ...state,
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            }
        default: return state
    }
}

export default reducer;