import { ADD_TO_CART,REMOVE_FROM_CART,RESET_CART } from "./actionTypes";

const initailState = {
      cartCount : 0
}

function cartReducer(state = initailState,action){
      switch(action.type) {
            case ADD_TO_CART : return{
                  ...state,
                  cartCount:state.cartCount+1
            }

            case REMOVE_FROM_CART : return {
                  ...state,
                  cartCount : state.cartCount > 0 
                  ? state.cartCount-1
                  : 0

            }

             case RESET_CART : return {
                  ...state,
                  cartCount : 0
             }

             default : return state;
      }
}


export default cartReducer;