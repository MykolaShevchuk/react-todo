const itemsReducer = (state = [], action) => {
  let index;

  switch (action.type) {
    case 'ITEMS_LOAD_FULFILLED':
      state = action.payload;
      break;
    case 'ITEM_ADD_FULFILLED':
      state = [...state, action.payload];
      break;
    case 'ITEM_DELETE_FULFILLED':
      state = state.filter(item => item.id !== action.payload);
      break;
    case 'ITEM_CHANGE_STATUS_FULFILLED':
      index = state.findIndex(item => item.id === action.payload.id);
      state[index] = action.payload;
      state = [...state];
      break;
    case 'ITEM_CHANGE_SECTION_FULFILLED' :
      index = state.findIndex(item => item.id === action.payload.id);
      state[index] = action.payload;
      state = [...state];
      break;
    case 'ITEMS_LOAD_REJECTED' :
      break;
    default:
      break;
  }
  return state;
};

export default itemsReducer;