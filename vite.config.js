import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), //habilita el jsx sin importar React de forma individual
    tailwindcss(), // habilita t- v 4
  ],
})