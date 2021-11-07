import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
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
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      terser({
        compress: true,
      }),
    ],
  },
];

export default rollupConfigES;
