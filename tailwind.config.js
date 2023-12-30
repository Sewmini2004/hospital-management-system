/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {  backgroundImage: {
        'hero-pattern': "url('jetbrains://idea/navigate/reference?project=hospital-management-system&path=src/assets/2832547_14090.jpg')",

      }
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],


}