import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import adonis from '@91codes/adonis-vite/build/plugins/adonis'

export default defineConfig({
	plugins: [
		vue(),
		adonis({ input: 'resources/frontend/entrypoints/main.js' }),
	],
})
