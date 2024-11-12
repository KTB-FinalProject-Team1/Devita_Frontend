// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {},
    },
    server: {
        port: 3000,
        hmr: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 백엔드 서버 주소
                changeOrigin: true,
                secure: false,
            },
        },
    },
});