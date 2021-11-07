import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { name, dependencies } from './package.json';

const rollupConfigUMD = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/${name}.umd.js`,
      format: 'umd',
      name,
      indent: false,
    },
    external: [...Object.keys(dependencies || {})],
    plugins: [
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser({
        compress: true,
      }),
    ],
  },
];

export default rollupConfigUMD;
