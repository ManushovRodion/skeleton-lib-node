import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { name } from './package.json';

const rollupConfigUMD = [
  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/${name}.umd.js`,
      format: 'umd',
      name,
      indent: false,
    },
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true,
      }),
    ],
  },

  {
    input: 'src/index.ts',
    output: {
      file: `_tmp/${name}.umd.min.js`,
      format: 'umd',
      name,
      indent: false,
    },
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true,
      }),
      terser({
        compress: true,
      }),
    ],
  },
];

export default rollupConfigUMD;
