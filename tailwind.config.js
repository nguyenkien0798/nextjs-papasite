const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xm: '340px',
      xs: '376px',
      sd: '400px',
      sm: '640px',
      md: '768px',
      ms: '840px',
      lg: '1024px',
      lx: '1280px',
      xl: '1366px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    extend: {
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
      fontSize: {
        80: ['80px', { lineHeight: '97.5px' }],
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        montserratRegular: ['Montserrat-fontwight4', ...defaultTheme.fontFamily.sans],
        montserratFontwight5: ['Montserrat-fontwight5', ...defaultTheme.fontFamily.sans],
        montserratFontwight6: ['Montserrat-fontwight6', ...defaultTheme.fontFamily.sans],
        montserratFontwight7: ['Montserrat-fontwight7', ...defaultTheme.fontFamily.sans],
        sansFrancisco: ['San Francisco Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#FFFFFF',
        active: '#1DE9B6',
        title: '#333333',
        dark: '#00122F',
        gray: '#B7B7C4',
        background: '#0F103C',
        'navy-1': '#5D70AB',
        'navy-2': '#26266E',
        'navy-4': '#151547',
        'navy-5': '#0F103C',
        'navy-gra': '#2a2a9580',
        'toast-sucess':
          'linear-gradient(90.02deg, rgba(29, 233, 182, 0.33) -0.33%, rgba(29, 233, 182, 0) 74.66%)',

        BodyTextColor: '#B7B7C4',
      },
      keyframes: {
        'pulse-linear': {
          to: {
            transform: 'scale(1.38)',
            opacity: '0',
          },
        },
      },
      animation: {
        'pulse-linear': 'pulse-linear 2s linear infinite',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(62.8% 62.8% at 50% 50%, rgba(53, 79, 169, 0.23) 1.34%, rgba(17, 39, 118, 0.335) 27.25%, rgba(15, 16, 60, 0) 100%);',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
}
