export interface ModalProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
  element: React.ReactNode;
}

export interface CityData {
  id: number;
  city: string;
  arr2: string[];
  desc: string;
  bg: string;
  title1: string;
  desc1: string;
  img1: string;
  desc2: string;
  video: string;
  desc3: string;
  giftDesc: string;
  giftImage: string[];
  kitchenText: string;
  kitchenImage: string[];
  images: {
    img: string;
    title: string;
  }[];
  history: string;
  map: [number, number];
}