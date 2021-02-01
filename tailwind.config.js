module.exports = {
  future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
  },
  purge: {
		mode: 'all',
		content: ['./src/**/*.svelte','./src/**/*.html'],
	},
  theme: {
		fontFamily: {
			'quicksand': ['Quicksand', 'ui-sans-serif', 'system-ui']
		},
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};