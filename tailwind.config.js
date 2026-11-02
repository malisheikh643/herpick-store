export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { burgundy: '#570D29', ivory: '#FFF9F3', gold: '#D4B477', blush: '#F4E9E9', ink: '#282326' },
    fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] }
  } },
  plugins: []
}
