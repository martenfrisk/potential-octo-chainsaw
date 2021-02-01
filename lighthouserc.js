module.exports = {
	ci: {
		collect: {
			startServerCommand: 'npx serve __sapper__/export',
			url: ['http://localhost:5000/'],
			settings: {
				skipAudits: ['uses-http2', 'is-on-https'],
			},
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
}
