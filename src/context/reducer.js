export const reducer= (state,action)=>{
    switch(action.type){
        case "GET_PRODUCT":
            return {...state,products:action.payload};
        case "ADD_TO_CART":
            const existedMeal = state.cart.find(item=>item.id === action.payload.id);
            if(existedMeal){
                return state;
            }
            return {...state,cart:[...state.cart,action.payload]};
        case "REMOVE_FROM_CART":
            const filteredCart = state.cart.filter((obj)=>obj.id!=action.payload.id);
            return {...state,cart:filteredCart};
        default:
            return state;
    }
}