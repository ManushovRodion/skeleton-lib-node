import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { dependencies } from './package.json';

const rollupConfigLib = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/index.js`,
      format: 'es',
      indent: false,
    },
    external: [...Object.keys(dependencies || {})],
    plugins: [
      typescript(),
      terser({
        compress: true,
      }),
    ],
  },
];

export default rollupConfigLib;
