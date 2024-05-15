export interface ValidatableClass {
    [key: string]: number | string | boolean | object | any[] | null | undefined;
}

export interface Product extends ValidatableClass {
    sku: string;
    image?: string;
    handle: string;
    title: string;
    description: string;
    grams: number;
    stock: number;
    price: number;
    comparePrice: number;
    barcode: string;
}