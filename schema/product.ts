export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type SmallImage = {
  __typename?: 'SmallImage';
  url?: Maybe<Scalars['String']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  page_size?: Maybe<Scalars['Int']['output']>;
  total_pages?: Maybe<Scalars['Int']['output']>;
};

export type Reviews = {
  __typename?: 'Reviews';
  page_info?: Maybe<PageInfo>;
  items?: Maybe<Maybe<Scalars['String']['output']>[]>;
};

export type ProductLabel = {
  __typename?: 'ProductLabel';
  active_from?: Maybe<Scalars['String']['output']>;
  active_to?: Maybe<Scalars['String']['output']>;
  background_color?: Maybe<Scalars['String']['output']>;
  label_id?: Maybe<Scalars['String']['output']>;
  label_text?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text_color?: Maybe<Scalars['String']['output']>;
};

export type FinalPrice = {
  __typename?: 'FinalPrice';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type UsdPriceRange = {
  __typename?: 'UsdPriceRange';
  minimum_price?: Maybe<MinimumPrice>;
};

export type RegularPrice = {
  __typename?: 'RegularPrice';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type BasePriceRange = {
  __typename?: 'BasePriceRange';
  minimum_price?: Maybe<MinimumPrice>;
};

export type Discount = {
  __typename?: 'Discount';
  amount_off?: Maybe<Scalars['Float']['output']>;
  percent_off?: Maybe<Scalars['Int']['output']>;
};

export type MinimumPrice = {
  __typename?: 'MinimumPrice';
  regular_price?: Maybe<RegularPrice>;
  final_price?: Maybe<FinalPrice>;
  discount?: Maybe<Discount>;
};

export type PriceRange = {
  __typename?: 'PriceRange';
  minimum_price?: Maybe<MinimumPrice>;
};

export type Amount = {
  __typename?: 'Amount';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Price = {
  __typename?: 'Price';
  regularPrice?: Maybe<RegularPrice>;
};

export type MediaGalleryEntries = {
  __typename?: 'MediaGalleryEntries';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

export type MediaGallery = {
  __typename?: 'MediaGallery';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Description = {
  __typename?: 'Description';
  html?: Maybe<Scalars['String']['output']>;
};

export type CrossBorderProduct = {
  __typename?: 'CrossBorderProduct';
  is_allowed?: Maybe<Scalars['Boolean']['output']>;
  disallow_countries?: Maybe<Scalars['String']['output']>;
};

export type Categories = {
  __typename?: 'Categories';
  breadcrumbs?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url_path?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
};

export type BrandInfo = {
  __typename?: 'BrandInfo';
  img_src?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  language?: Maybe<Scalars['String']['output']>;
  redirect_code?: Maybe<Scalars['Int']['output']>;
  relative_url?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  amrma_default_resolution_period?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<Scalars['Int']['output']>;
  cautions?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pkgdimensions?: Maybe<Scalars['String']['output']>;
  rating_summary?: Maybe<Scalars['Int']['output']>;
  recom_age?: Maybe<Scalars['String']['output']>;
  review_count?: Maybe<Scalars['Int']['output']>;
  shipping_weight?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_status?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<SmallImage>;
  reviews?: Maybe<Reviews>;
  product_label?: Maybe<ProductLabel>;
  usd_price_range?: Maybe<UsdPriceRange>;
  base_price_range?: Maybe<BasePriceRange>;
  price_range?: Maybe<PriceRange>;
  price?: Maybe<Price>;
  media_gallery_entries?: Maybe<Maybe<MediaGalleryEntries>[]>;
  media_gallery?: Maybe<Maybe<MediaGallery>[]>;
  is_yalla?: Maybe<Maybe<Scalars['String']['output']>[]>;
  description?: Maybe<Description>;
  cross_border_product?: Maybe<CrossBorderProduct>;
  categories?: Maybe<Maybe<Categories>[]>;
  brand_info?: Maybe<BrandInfo>;
};

export type Data = {
  __typename?: 'Data';
  product?: Maybe<Maybe<Product>[]>;
};
