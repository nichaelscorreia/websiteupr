import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'alphonso-effortful-emmalee.ngrok-free.dev',
      'www.grupoolivaltenorio.com.br',
      'grupoolivaltenorio.com.br'
    ],
  },
})