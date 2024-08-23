import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "Demo",
      fileName: "demo"
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    }
  }
})
