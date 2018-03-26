/* eslint-disable import/prefer-default-export */
export function getRandomColor() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}
