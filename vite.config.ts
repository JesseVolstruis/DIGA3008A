import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env.VITE_STEAM_API_KEY': JSON.stringify(process.env.VITE_STEAM_API_KEY),
    'process.env.VITE_STEAM_ID64': JSON.stringify(process.env.VITE_STEAM_ID64),
  },
});
