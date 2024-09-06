export function getRandomIntegerBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomFloatBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
