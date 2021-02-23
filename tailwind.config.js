module.exports = {
  purge: ['./src/**/*.svelte','./src/**/*.html'],
  theme: {
		fontFamily: {
			'quicksand': ['Quicksand', 'ui-sans-serif', 'system-ui']
		},
    extend: {
			translate: {
				'110': '110%'
			}
		},
  },
  variants: {
		extend: {
			margin: ['group-hover'],
			transitionDelay: ['group-hover'],
			translate: ['group-hover']
		}
	},
  plugins: [require('@tailwindcss/line-clamp')],
};