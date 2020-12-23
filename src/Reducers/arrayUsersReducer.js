export default function arrayUsersReducer(state = { sortMixArr: [] }, action) {
  switch (action.type) {
    case "SORT_ARRAY":
      return {
        ...state,
        sortMixArr: [...action.payload]
      };

    default:
      return state;
  }
}
