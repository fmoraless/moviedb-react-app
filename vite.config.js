import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 3031,
  },
  build: {
    incremental: true,
    babel: {
      pressets: ['@babel/preset-env','@babel/preset-react'],
    },
    /* when project use Typescript */
    /* typescript: {
      tsconfig: './tsconfig.json',
    }, */
    cache: true,
    minify: true,
    mode: 'production',
    chunks: true,
    moduleBuildings: true,
    devCode: true,
    debug: true,
  }
})
