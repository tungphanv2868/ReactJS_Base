let initialState = {
  soLuong : 10,
};

export let NumberReducer = (state = initialState, action) =>{
  switch(action.type){
    //Logic dung để thay đổi data của state tại đây
    case "TANG" : {
      state.soLuong = state.soLuong + 100;
      return { ...state};
    }
    case "GIAM" : {
      state.soLuong = state.soLuong - action.payload;
      return { ...state};
    }
    default:
      return state
  }
}