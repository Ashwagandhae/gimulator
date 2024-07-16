import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/index.ts',
  name: 'Gimbuilder',
  description: 'Creates gimbuild builds in-game',
  author: 'Ashwagandhae',
  version: pkg.version,
  isLibrary: true,
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      target: 'esnext',
    }),
  ],
};
