// This file connects Vite and React together
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
import { resolve } from 'path'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sample: resolve(__dirname, 'sample/index.html'),
                tutorials: resolve(__dirname, 'tutorials/index.html'),
                login: resolve(__dirname, 'login/index.html'),
                access: resolve(__dirname, 'access/index.html'),
                howitworks: resolve(__dirname, 'howitworks/index.html'),
            },
        },
    },
})
