export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export interface TopPageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updateAt: Date;
}

export interface TopPageModel {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages?: TopPageAdvantage[];
  createAt: Date;
  updatedAt: Date;
  hh?: HhData;
}
