import dts from 'rollup-plugin-dts';
import { name } from './package.json';

const rollupConfigTypes = [
  {
    input: `_tmp/index.d.ts`,
    output: {
      file: `dist/${name}.d.ts`,
      format: 'es',
    },
    plugins: [dts()],
  },
];

export default rollupConfigTypes;
