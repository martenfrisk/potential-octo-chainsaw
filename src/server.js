import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT } = process.env;

express() // You can also use Express
	.use(
		process.env.NODE_ENV === 'production' ? '/svelte' : '',
		compression({ threshold: 0 }),
		sirv('static'),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
