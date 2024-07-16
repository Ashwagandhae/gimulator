import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/generate.ts'],
  format: ['esm'],
  clean: true,
});
