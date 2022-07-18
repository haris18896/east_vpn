export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TEST_INITIATED': {
      return {
        ...state,
        fetchPlansInProcess: true,
      }
    }
    case 'FETCH_SUCCESS_INITIATED': {
      return {
        ...state,
        fetchPlansInProcess: false,
      }
    }

    default:
      return state
  }
}
