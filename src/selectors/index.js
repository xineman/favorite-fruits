/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect';


export const getData = state => state.fruitsData;

export const getActive = state => state.active;

export const makeGetDataByFruit = () => createSelector(getData, (data) => {
  const total = data.length;
  const grouped = data.reduce((p, val) => {
    if (p[val.favoriteFruit]) {
      p[val.favoriteFruit] += 1;
    } else {
      p[val.favoriteFruit] = 1;
    }
    return p;
  }, {});
  return Object.entries(grouped)
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return 1;
      }
      if (a[1] > b[1]) {
        return -1;
      }
      return 0;
    })
    .map(fruit => ({
      title: fruit[0],
      count: fruit[1],
      popularity: fruit[1] / total,
    }));
});

export const makeGetActiveFruitData = () => createSelector(
  [getData, getActive],
  (data, active) => (active ? data.filter(d => d.favoriteFruit === active) : data),
);
