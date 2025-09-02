
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// إعدادات البناء + بروكسي لتجريب محلي
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // الرابط المحلي للBackend أثناء التطوير
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',      // مجلد الإخراج لـ Vercel
    emptyOutDir: true
  }
})