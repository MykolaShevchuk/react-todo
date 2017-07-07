const sectionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SECTIONS_LOAD_FULFILLED':
      state = action.payload;
      break;
    case 'SECTION_ADD_FULFILLED':
      state = [...state, action.payload];
      break;
    case 'SECTION_DELETE_FULFILLED':
      state = state.filter(item => item.id !== action.payload);
      break;
    case 'SECTION_ATTACH_PROFILE':
      state = state.map((section) => {
        if (section.id === action.sectionId) {
          section.users = section.users || [];
          const alreadyInList = section.users.some((user) => user.id === action.profile.id);
          if (!alreadyInList) {
            section.users.push(action.profile);
          }
        }
        return section;
      });
      break;
    default:
      break;
  }
  return state;
};

export default sectionsReducer;