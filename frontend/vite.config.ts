import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 8000,
  },
  plugins: [react(), svgr()], // vite pkg or plugin
  resolve: {
    // define alias for vite
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
