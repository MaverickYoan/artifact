import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                destination: "destination.html",
                contact: "contact.html",
            }
        }
    }
})