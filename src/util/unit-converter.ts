export function calculateSizeInSquareFeet(length: number, width: number, unit: string): number {

    if (unit === 'ft') return length * width;


    if (unit === 'in') return (length / 12) * (width / 12);


    if (unit === 'cm') return (length / 30.48) * (width / 30.48);


    return 0;
}