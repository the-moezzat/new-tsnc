export type RugType = {
    id: number;
    name: string;
    width: number;
    length: number;
    unit: string;
    sizeInFt: string;
    price: number;
    addOns: { name: string; price: number }[]
}