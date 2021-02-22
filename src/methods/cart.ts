import type { UserAuthenticated } from './types'

export const getCartMethod = (
	user: UserAuthenticated,
	APPID: string,
	MD5: string
) => ({
	user_data: user,
	data: {
		method: 'get_cart',
		appid: APPID,
		md: MD5,
	},
})

export const updateCartMethod = (
	user: UserAuthenticated,
	product_id: string,
	number: string,
	APPID: string,
	MD5: string
) => ({
	user_data: user,
	data: {
		method: 'update_cart',
		params: {
			product_id,
			number,
			extra: '',
			as_gift: '0',
			wished_length: '',
		},
		appid: APPID,
		md: MD5,
	},
})

export const update_cart_package_method = (
	params: {
		product_id: string
		number: string
		extra: string // e.g. "110-28-66948:1,110-28-98025:1,110-28-73500:2,110-28-73651:1"
		as_gift: string
		wished_length: string
	},
	APPID: string,
	MD5: string
) => `
{
	"user_data": {
		"id": "",
		"currency": "SEK",
		"vat": "inkl.",
		"language": "SV",
		"session_id": "APIicyfoshCKC1vYT21zH74TfFtToy"
	},
	"data": {
		"method": "update_cart",
		"params": ${params},
		"appid": "${APPID}",
		"md": "${MD5}"
	}
}
`

export const get_number_of_articles_in_cart_method = (
	APPID: string,
	MD5: string
) => `
{
	"user_data": {
		"session_id": "APIicyfoshCKC1vYT21zH74TfFtToy"
	},
	"data": {
		"method": "get_number_of_articles_in_cart",
		"appid": "${APPID}",
		"md": "${MD5}"
	}
}
`
