module.exports = {
	ci: {
		collect: {
			startServerCommand: 'serve __sapper__/export',
			startServerReadyPattern: 'Serving!',
			url: ['http://localhost:5000/'],
			settings: {
				skipAudits: ['uses-http2', 'is-on-https', 'redirects-http'],
			},
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
}
