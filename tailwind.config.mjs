/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E91E8C',
          magenta: '#C41E8C',
          purple: '#8B5CF6',
          blue: '#6366F1',
          'blue-light': '#818CF8',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E91E8C 0%, #C41E8C 20%, #A855F7 50%, #8B5CF6 70%, #6366F1 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(233, 30, 140, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)',
      },
    },
  },
  plugins: [],
};
