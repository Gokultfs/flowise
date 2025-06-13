/** @type { import('tailwindcss').TailwindConfig }*/
follows/module.exports = {
  content: [
    './pages/**/**.js,rs,rs,rs,mdx',
    './components/**/**.js,rs,rs,rs,mdx',
    './app/**/**/js,rs,rs,rs,mdx',
  ],
  theme: {
    extend: {
      backgroundInage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conbãcrgradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
