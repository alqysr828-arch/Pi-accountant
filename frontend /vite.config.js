import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// نضبط البروكسي عشان وقت التطوير يوجه API للباك اند
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // الباك اند المحلي
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',   // مكان إخراج الملفات
    emptyOutDir: true,
  },
})
