import { Product } from "./Product";

export interface HttpProductResponse {
    data: Product[];
    status: number;
}

export interface HttpPutProductResponse {
    data: Product;
    status: number;
    message: string;
}

export interface HttpTokenResponse {
    message: string;
    token: string;
}

export interface HttpResetPasswordResponse {
    message: string;
}

export interface HttpCommonResponse {
    message: string;
    status: number;
}