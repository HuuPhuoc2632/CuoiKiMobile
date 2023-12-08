export const money_in = (content,amount) => ({
    type: 'MONEY_IN',
    payload: {
        content,
        amount
    }
})
export const money_out = (content,amount) => ({
    type: 'MONEY_OUT',
    payload: {
        content,
        amount
    }
})
export const addUserToState = (user) => ({
    type: 'Add_User_To_State',
    payload: {
        user
    }
})
