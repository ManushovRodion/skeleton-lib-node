import { parseText } from './string';

export function main(): void {
  const text = parseText(1);

  console.error(`Ваша версия node ${process.version} ниже, чем необходимо ${text}!`);
}

export default main;

main();
