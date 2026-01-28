import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/REACTJS-Entrega-de-ejercicios-1/",
  build: {
  rollupOptions: {
  input: {
  main: resolve(__dirname, "index.html"),
  ejercicio1: resolve(__dirname, "react_ejercicio_1.html"),
  ejercicio2: resolve(__dirname, "react_ejercicio_2.html"),
  ejercicio3: resolve(__dirname, "react_ejercicio_3.html"),
  ejercicio4: resolve(__dirname, "react_ejercicio_4.html"),
  ejercicio5: resolve(__dirname, "react_ejercicio_5.html"),
  ejercicio6: resolve(__dirname, "react_ejercicio_6.html"),
  ejercicio7: resolve(__dirname, "react_ejercicio_7.html"),
  ejercicio8: resolve(__dirname, "react_ejercicio_8.html"),
  ejercicio9: resolve(__dirname, "react_ejercicio_9.html"),
  }
  }
  }
})
