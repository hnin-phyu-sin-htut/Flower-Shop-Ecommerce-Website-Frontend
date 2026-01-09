import axios from "axios";
import type {HomeFlower} from "../model/HomeFlower.ts";
import type {CategoryDto} from "../model/CategoryDto.ts";
import type {ProductDto} from "../model/ProductDto.ts";

const HOME_FLOWER_BACKEND_URL = "http://localhost:3000/home-flowers";
const CATEGORY_BACKEND_URL = "http://localhost:2024/Flower-Shop-Ecommerce-Website-Backend/api/category";
const PRODUCTS_BACKEND_URL = "http://localhost:2024/Flower-Shop-Ecommerce-Website-Backend/api/products";
const API_URL = "http://localhost:2024/Flower-Shop-Ecommerce-Website-Backend/api/cart";

export const listAllHomeProducts = () =>
    axios.get<HomeFlower[]>(HOME_FLOWER_BACKEND_URL);

export const fetchAllProducts = () =>
    axios.get<ProductDto[]>(`${PRODUCTS_BACKEND_URL}/products-list.php`);

export const createProduct = (product: FormData) =>
    axios.post<string>(`${PRODUCTS_BACKEND_URL}/create-product.php`, product, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

export const createCategory= (categoryDto: CategoryDto) =>
    axios.post<string>(`${CATEGORY_BACKEND_URL}/create-category.php`, categoryDto, {
        headers: {
            "Content-Type": "application/json"
        }
    });

export const getAllCategories = () =>
    axios.get<CategoryDto[]>(`${CATEGORY_BACKEND_URL}/category-list.php`);

export const editProduct = (formData: FormData, id: number) =>
    axios.post<ProductDto>(`${PRODUCTS_BACKEND_URL}/edit.php?id=${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });

export const deleteProductById = (id: number) =>
    axios.delete(`${PRODUCTS_BACKEND_URL}/delete.php?id=${id}`);

export const checkout = (items: { id: number; quantity: number; price: number; }[], role: string) =>
    axios.post(
        API_URL + "/checkout.php",
        items.map(item => ({
            id: item.id,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity
        })),
        { headers: { "X-Role": role } }
    );


