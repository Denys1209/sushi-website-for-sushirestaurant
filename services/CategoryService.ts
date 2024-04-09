import axios from 'axios';
import { Category } from '@/types/Category';

const API_URL = process.env.BASE_URL+'Categories';

export const fetchCategories = async (): Promise<Category[]> => {
 const response = await axios.get<Category[]>(API_URL);
 return response.data;
};
``