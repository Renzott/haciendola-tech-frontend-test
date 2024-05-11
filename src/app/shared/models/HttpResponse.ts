import { Product } from "./Product";

export interface HttpProductResponse {
    data: Product[];
    status: number;
}

export interface HttpTokenResponse {
    message: string;
    token: string;
}

export interface HttpResetPasswordResponse {
    message: string;
}