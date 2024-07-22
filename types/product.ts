export interface FormattedSimpleProduct {
  id: number;
  name: string;
  brand: string;
  sku: string;
  finalPrice: number;
  regularPrice?: number;
  percentOff?: number;
  image: string;
  brandImage?: string;
  rating: string;
  reviews: string;
  sold: string;
}

export interface FormattedProductImage {
  position: number;
  url: string;
}

export interface FormattedProduct extends FormattedSimpleProduct {
  features: string;
  mediaGallery: FormattedProductImage[];
}
