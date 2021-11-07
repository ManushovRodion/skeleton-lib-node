import typescript from 'rollup-plugin-typescript2';
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
    plugins: [typescript()],
  },
];

export default rollupConfigCommonJS;
