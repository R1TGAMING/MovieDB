import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    define : {
    'process.env.API_KEY' : JSON.stringify(env.REACT_APP_API_KEY),
    global : 'globalThis'

  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
  }
})
