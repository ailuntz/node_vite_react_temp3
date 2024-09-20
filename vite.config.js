import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/nodevitereacttemp3/', // 设置 `base` 路径
  plugins: [react()],
})
