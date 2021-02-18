const plugins =
	process.env.NODE_ENV === 'production'
		? [
				require('postcss-import')(),
				require('tailwindcss')(),
				require('postcss-preset-env')({
					stage: 1,
					features: {
						'nesting-rules': true,
					},
				}),
				require('cssnano')({
					preset: ['default', { discardComments: { removeAll: true } }],
				}),
		  ]
		: [
				require('postcss-import')(),
				require('tailwindcss')(),
				require('postcss-preset-env')({
					stage: 1,
					features: {
						'nesting-rules': true,
					},
				}),
		  ]

module.exports = { plugins }
