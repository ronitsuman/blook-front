export default {
    plugins: {
      'postcss-nesting': {},       // 👈 Nesting plugin first
      tailwindcss: {},             // 👈 Then Tailwind
      autoprefixer: {},
    },
  }
  