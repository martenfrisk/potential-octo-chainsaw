module.exports = {
  purge: ['./src/**/*.svelte','./src/**/*.html'],
  theme: {
		fontFamily: {
			'quicksand': ['Quicksand', 'ui-sans-serif', 'system-ui']
		},
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};