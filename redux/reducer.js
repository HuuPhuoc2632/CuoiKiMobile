const initialState = {
    users:[]
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MONEY_IN':{
            const content = action.payload.content;
            const amount = action.payload.amount;
        
            return {
                ...state,
                users: state.users.map((user) => {
                        return {
                            ...user,
                            money_in: [...user.money_in, {content,amount}]
                    }
                })
            }
        }
        case 'MONEY_OUT':{
            const content = action.payload.content;
            const amount = action.payload.amount;
        
            return {
                ...state,
                users: state.users.map((user) => {
                        return {
                            ...user,
                            money_out: [...user.money_out, {content,amount}]
                    }
                })
            }
        }
        case 'Add_User_To_State':{
            const {user} = action.payload;
            return {
                ...state,
                users: [...state.users, user]
            }
        }
            
        default:
            return state
    }
}
export default userReducer;