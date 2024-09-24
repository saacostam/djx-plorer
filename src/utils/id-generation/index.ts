import { v4 as uuid } from 'uuid';

export function generateRandomId(): string {
    return uuid();
}
