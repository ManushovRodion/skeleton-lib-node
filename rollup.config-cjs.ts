import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { dependencies, name } from './package.json';

const rollupConfigCommonJS = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/${name}.cjs.js`,
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

export default rollupConfigCommonJS;
