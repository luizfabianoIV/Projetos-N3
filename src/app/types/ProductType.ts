export type ProductType = {
    cartItemId?: string;
    id: string;
    price: number | null;
    name: string;
    quantity?: number | 1;
    description: string | null;
    image: string;
    currency?: string,
};