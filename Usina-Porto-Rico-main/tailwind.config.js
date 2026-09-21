/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'usina-green': '#ff2a33',     // O verde principal da marca
        'usina-gold': '#ff2a33',      // O dourado para acentos e detalhes
        'usina-dark': '#121212',      // Cinza super escuro para textos principais
        'usina-text': '#333333',      // Cinza mais suave para textos secundários
        'usina-light': '#F4F4F4',     // Cinza claro para fundos de seção
        'usina-white': '#FFFFFF',     // Branco puro
        'usina-primary': '#EF233C',   // Cor primária (azul suave)
        'usina-secondary': '#D32234', // Cor secundária (azul claro)
        'usina-vermelho': '#B00020',  // Cor de alerta vermelho
      },
      fontFamily: {
        'sans': ['Poppins','Helvetica', 'Montserrat', 'sans-serif'],
        'display': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

