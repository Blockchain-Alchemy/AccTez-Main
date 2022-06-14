import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-import-css'
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: 'AccTez-Main',
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        redux: 'Redux',
        'react-dom': 'ReactDOM',
        '@taquito/taquito': 'taquito',
        '@taquito/beacon-wallet': 'beaconWallet',
        '@airgap/beacon-sdk': 'beacon'
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    // Allow to import CSS into JavaScript
    css(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
