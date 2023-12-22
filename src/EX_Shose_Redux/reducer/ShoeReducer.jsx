import { ADD_TO_CART, VIEW_DETAIL } from "../constant/shoeConstant";
import { shoeArr } from "../data"

const initialState = {
    shoeArr : shoeArr,
    card : [],
    detail : shoeArr[0],
}

export let ShoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL : {
      state.detail = payload;
      return { ...state};
    }
    case ADD_TO_CART : {
      let cloneCard = [...state.card]
    }

  default:
    return state
  }
}
