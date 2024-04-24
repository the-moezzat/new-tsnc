export interface UpholsteryService {
    title: string;
    subcategories: {
        id: number;
        name: string;
        description: string;
        price: number;
        addons: { name: string, price: number, description: string }[]

    }[]
}