export const getRandomInteger = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomFixed = (min:number, max:number) => {
  return Number((Math.random() * (max - min) + min).toFixed(1));
}