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

export type Product = {
  __typename?: 'Product';
  language?: Maybe<Scalars['String']['output']>;
  redirect_code?: Maybe<Scalars['Int']['output']>;
  relative_url?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  amrma_default_resolution_period?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<Scalars['Int']['output']>;
  brand_info?: Maybe<BrandInfo>;
  categories?: Maybe<Maybe<CategoryTree>[]>;
  cautions?: Maybe<Scalars['String']['output']>;
  cross_border_product?: Maybe<CrossBorderProduct>;
  description?: Maybe<ComplexTextValue>;
  dimensions?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_yalla?: Maybe<Maybe<Scalars['String']['output']>[]>;
  media_gallery?: Maybe<Maybe<ProductImage>[]>;
};

export type BrandInfo = {
  __typename?: 'BrandInfo';
  img_src?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CategoryTree = {
  __typename?: 'CategoryTree';
  breadcrumbs?: Maybe<Maybe<Breadcrumb>[]>;
  level?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url_path?: Maybe<Scalars['String']['output']>;
  url_key?: Maybe<Scalars['String']['output']>;
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  category_id?: Maybe<Scalars['Int']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  category_url_key?: Maybe<Scalars['String']['output']>;
  category_url_path?: Maybe<Scalars['String']['output']>;
};

export type CrossBorderProduct = {
  __typename?: 'CrossBorderProduct';
  is_allowed?: Maybe<Scalars['Boolean']['output']>;
  disallow_countries?: Maybe<Scalars['String']['output']>;
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  html?: Maybe<Scalars['String']['output']>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};
