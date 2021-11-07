import { parseText } from './string';

const text = parseText(1);

console.error(`Ваша версия node ${process.version} ниже, чем необходимо ${text}!`);
