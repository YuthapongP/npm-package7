// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'components/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
    ],
  },
  {
    input: 'components/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
]
