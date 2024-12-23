import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		// 👋 add the line below to add jsdom to vite
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.js',
		coverage: {
			provider: 'istanbul', // or 'istanbul'
			reporter: ['text', 'html'], // Generates text and HTML reports
			reportsDirectory: './coverage', // Directory for reports
			exclude: [
				'node_modules',
				'vite.config.*',
				'dist',
				'tests',
				'setupTests*',
			], // Exclude patterns
		},
	},
});
