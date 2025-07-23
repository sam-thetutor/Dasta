import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      crypto: 'crypto-js',
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['@creit.tech/stellar-wallets-kit', 'buffer'],
  },
  build: {
    rollupOptions: {
      external: ['crypto'],
    },
  },
})
