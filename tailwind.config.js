/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#050605', // page
          alt: '#070907', // alternate section
          card: '#090B08',
          control: '#0A0C09', // input / control
          panel: '#0B1008', // green panel
        },
        line: {
          section: '#161A14',
          card: '#1C2118',
          input: '#232A1E',
          tile: '#26321C',
          panel: '#2A3A1B',
          hover: '#3E5226',
        },
        ink: {
          DEFAULT: '#F2F4EF',
          strong: '#C9CFC3',
          body: '#A3AB9C',
          muted: '#8A9383',
          subtle: '#6E7768',
          faint: '#5D6656',
        },
        accent: {
          DEFAULT: '#8CC63F',
          hover: '#A1D85A',
          text: '#A8D46A',
          soft: '#B9D98F',
          on: '#0A0D07',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1240px',
      },
    },
  },
  plugins: [],
}
