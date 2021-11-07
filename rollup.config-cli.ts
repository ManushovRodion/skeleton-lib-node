import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { dependencies } from './package.json';

const rollupConfigLib = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/index.js`,
      format: 'cjs',
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

export default rollupConfigLib;
