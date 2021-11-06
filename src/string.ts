function parseText(value: string | number | null): string {
  return value ? '' : String(value);
}

export default parseText;
