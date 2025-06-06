
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This allows React Router to handle routes like /add or /books/new
    historyApiFallback: true,
  },
})
