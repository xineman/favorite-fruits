import {
  SET_FRUITS,
  SET_FRUITS_SUCCESS,
  SET_ACTIVE_FRUIT,
} from '../constants';


export const getData = () => (dispatch) => {
  dispatch({ type: SET_FRUITS });
  window.FruitasticApi.get((payload) => {
    dispatch({ type: SET_FRUITS_SUCCESS, payload });
  });
};

export const selectFruit = fruit => (dispatch) => {
  console.log(`Fruit selected: ${fruit.title}, ${fruit.count}`); // eslint-disable-line
  dispatch({
    type: SET_ACTIVE_FRUIT,
    payload: {
      title: fruit.title,
    },
  });
};
