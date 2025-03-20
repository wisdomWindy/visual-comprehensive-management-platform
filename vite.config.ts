import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueComponents from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VueComponents({ resolvers: [ElementPlusResolver()] }),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      //  '/api': {
      //   target: 'https://api.imooc-web.lgdsunday.club',
      //   changeOrigin:true,
      //   // rewrite:(path)=> path.replace(/^\/api/, '')
      // },
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
