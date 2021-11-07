import typescript from 'rollup-plugin-typescript2';
import { dependencies, name } from './package.json';

const rollupConfigES = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/${name}.es.js`,
      format: 'es',
      indent: false,
    },
    external: [...Object.keys(dependencies || {})],
    plugins: [typescript()],
  },
];

export default rollupConfigES;
