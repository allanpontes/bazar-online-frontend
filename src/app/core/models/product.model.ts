export type ProductSize = 'P' | 'M' | 'G';

export type ProductCondition =
  | 'Novo com etiqueta'
  | 'Gentilmente usado'
  | 'Vintage';

export interface Product {
  id: number;
  title: string;
  price: number;
  size: ProductSize;
  condition: ProductCondition;
  imageUrl: string;
  imageAlt: string;
}
