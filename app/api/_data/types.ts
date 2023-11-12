export type ColUidParamsType = { params: { uid: string; col: string } };

export type LinkType = {
  name: string;
  slug: string;
};
export type ColIdParamsType = { params: { id: string; col: string } };
export type RateType = 0 | 1 | 2 | 3 | 4 | 6 | 5 | 7 | 8 | 9 | 10;
export type QuantityType = 0 | 1 | 2 | 3;
export interface IItem {
  title: string;
  tags: string;
  parent_name: string;
  parent_uid: string;
  name: string;
  uid: string;
  meta_description: string;
  description: string;
  quantity: QuantityType;
  rate: RateType;
  images: string[];
  price: number;
  created: number;
  updated: number;
}
