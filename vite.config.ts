import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/1.app/app.scss";`,
			},
		},
	},
	server: {
		port: 5173,
	},
});
