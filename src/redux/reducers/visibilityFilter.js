import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      console.log('1');
      return action.payload.filter;
    }
    default: {
      console.log('2:' + state);
      return state;
    }
  }
};

export default visibilityFilter;
