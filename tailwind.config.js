module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'sans-serif'],
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        display: 'display',
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: ['dracula', 'dark', 'black'],
  },
  plugins: [require('daisyui')],
};
