import {getRandomInteger, getRandomFixed} from "../utils";
import {Product} from "../types/product";

const TITLES = ['Apple BYZ S852I', 'Apple EarPods', 'Apple BYZ S8I', 'Apple AirPods', 'GERLAX GH-04', 'BOROFONE BO4'];
const IMAGES = ['img/image.png', 'img/image-1.png', 'img/image-2.png', 'img/image-3.png', 'img/image-4.png', 'img/image-5.png'];

const productCreator = ():Product => (
  {
  id: 1,
  title: TITLES[getRandomInteger(0, (TITLES.length-1))],
  image: IMAGES[getRandomInteger(0, (IMAGES.length-1))],
  price: getRandomInteger(500, 5000),
  oldPrice: getRandomInteger(100, 5000),
  ratig: getRandomFixed(1, 5),
  count: 0,
});

const setId = (array: Product[]) => {
  array.forEach((element: Product, index: number) => {
    element.id = index;
  });
  return array;
};

export const products = setId(Array.from({length: 9} , productCreator));