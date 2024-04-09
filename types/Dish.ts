import { Category } from "./Category";

interface IDishDto {
  name: string;
  description: string;
  imageURL: string;
  cost: number;
}

export interface GetDishDto extends IDishDto {
  id: number;
  category: Category;
}

export interface CreateDishDto extends IDishDto {
}

export interface UpdateDishDto extends IDishDto {
  id: number;
}
