/* tslint:disable */
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

export type PageInfo = {
  __typename?: 'PageInfo';
  total_pages?: Maybe<Scalars['Int']['output']>;
};

export type SmallImage = {
  __typename?: 'SmallImage';
  url?: Maybe<Scalars['String']['output']>;
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
  value?: Maybe<Scalars['Float']['output']>;
};

export type BasePriceRange = {
  __typename?: 'BasePriceRange';
  minimum_price?: Maybe<MinimumPrice>;
};

export type Discount = {
  __typename?: 'Discount';
  amount_off?: Maybe<Scalars['Float']['output']>;
  percent_off?: Maybe<Scalars['Float']['output']>;
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

export type Categories = {
  __typename?: 'Categories';
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandInfo = {
  __typename?: 'BrandInfo';
  title?: Maybe<Scalars['String']['output']>;
};

export type SimpleProduct = {
  __typename?: 'SimpleProduct';
  brand?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  low_stock_qty?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_status?: Maybe<Scalars['String']['output']>;
  type_id?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
  url_suffix?: Maybe<Scalars['String']['output']>;
  small_image?: Maybe<SmallImage>;
  product_label?: Maybe<ProductLabel>;
  usd_price_range?: Maybe<UsdPriceRange>;
  base_price_range?: Maybe<BasePriceRange>;
  price_range?: Maybe<PriceRange>;
  price?: Maybe<Price>;
  is_yalla?: Maybe<Maybe<Scalars['String']['output']>[]>;
  categories?: Maybe<Maybe<Categories>[]>;
  brand_info?: Maybe<BrandInfo>;
};

export type Products = {
  __typename?: 'Products';
  total_count?: Maybe<Scalars['Int']['output']>;
  yalla_total_count?: Maybe<Scalars['Int']['output']>;
  page_info?: Maybe<PageInfo>;
  items?: Maybe<Maybe<SimpleProduct>[]>;
};

export type Data = {
  __typename?: 'Data';
  products?: Maybe<Products>;
};
