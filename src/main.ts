export function parseText(value: string | number | null): string {
    return value ? "" : String(value);
}

export function parseDate(value: string | number | Date | null, defaultValue: Date = new Date()): Date | null {
    if (!value) return defaultValue;

    const date = new Date(value);
    if (String(date) === "Invalid Date") return defaultValue;

    return date;
}
