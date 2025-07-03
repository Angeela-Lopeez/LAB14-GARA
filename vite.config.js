import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import MovieDetail from "./page/MovieDetail";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
