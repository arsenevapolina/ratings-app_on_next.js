export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface reviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updateAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: reviewModel[];
  reviewCount: number;
  reviewAvg?: number;
  advantages: string;
}