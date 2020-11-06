import iphone8Img from '../assets/iphone8.png';
import galaxyNote20Img from '../assets/galaxy-note20.png';
import samsungGalaxyGearFitSmartWatch from '../assets/samsung-galaxy-gear-fit-smart-watch.png';

interface ProductProps {
  name: string;
  image: string;
  description: string;
  price: number;
}

const productsInfo: ProductProps[] = [
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: iphone8Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: galaxyNote20Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: samsungGalaxyGearFitSmartWatch,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: galaxyNote20Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: iphone8Img,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  },
  {
    name: `Brooks Men's Ghost 13 - Brown`, 
    image: samsungGalaxyGearFitSmartWatch,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    price: 42.99
  }
]

export default productsInfo;