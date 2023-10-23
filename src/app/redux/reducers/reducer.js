const initialState = {
  // 초기 상태를 정의합니다.
  filename: "https://image.idus.com/image/files/65910e17b8eb4e5e88986ad260a1124f.gif",
  popfile: "https://image.idus.com/image/files/65910e17b8eb4e5e88986ad260a1124f.gif",
  loading: false,
};

function reducer(state = initialState, action) {
  let { type, payload } = action

  switch (type) {
    case "GET_REQUEST":
      return { ...state, loading: true };
    case "GET_DATA":
      return {
        ...state,
        test: payload.test,
        loading: false,
      }
    case "GET_ANIMAL_DATA":
      return {
        ...state,
        animal: payload.animal,
        loading: false,
      }
    case "GET_ANIMAL_DETAIL_DATA":
      return {
        ...state,
        animal_detail: payload.animal_detail,
        loading: false,
      }
    case "GET_ANIMAL_LIST":
      return {
        ...state, 
        animal_list : payload.animal_list,
        loading: false,
      }
    case "GET_FAILURE":
      return {
        ...state, loading: false
      }
    default:
      return { ...state }
  }
}


export default reducer;