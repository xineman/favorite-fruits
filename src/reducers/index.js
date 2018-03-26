import {
  SET_FRUITS,
  SET_FRUITS_SUCCESS,
  SET_FRUITS_FAIL,
  SET_ACTIVE_FRUIT,
} from '../constants';

const store = {
  fruitsData: null,
  active: null,
  isLoaded: false,
  isLoading: false,
};

const fruits = (state = store, action) => {
  switch (action.type) {
    case SET_FRUITS:
      return { ...state, isLoaded: false, isLoading: true };
    case SET_FRUITS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        fruitsData: action.payload,
      };
    case SET_FRUITS_FAIL:
      return { ...state, isLoading: false };
    case SET_ACTIVE_FRUIT:
      return { ...state, active: action.payload.title };
    default:
      return state;
  }
};

export default fruits;
