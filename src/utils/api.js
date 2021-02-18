/* eslint-disable no-console */
import fetch from 'node-fetch'
import md5 from 'blueimp-md5'
import {
	addGradeMethod,
	getArticleMethod,
	getAvgGradeMethod,
	getGradesMethod,
} from '../methods/articles'
import { getBrandMethod } from '../methods/brands'
import { getCategoryMethod } from '../methods/category'
import {
	getCustomerMethod,
	getOrderMethod,
	getOrdersMethod,
	loginMethod,
} from '../methods/customer'
import { getMenuMethod } from '../methods/menu'

const appKey = 'wyD4oDd3oyT6iT7N'
const appId = '1000'
const API_URL = 'http://martenf1.cdsuperstore.se/api/1/'

function getMd(dataMethod, ...input) {
	const md5string = `${appKey},${dataMethod}${
		input.length > 0 ? `,${input.join(',')}` : ''
	}`
	const md = md5(md5string)
	return md
}

async function fetchAPI(bodyData, proxy = true) {
	const url = proxy
		? 'http://martenf1.cdsuperstore.se/apiproxy/'
		: 'http://martenf1.cdsuperstore.se/apiproxy/'
	const headers = {
		Accept: 'application/json, text/javascript, */*',
		'Accept-Language': 'sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7,no;q=0.6',
		Authorization: 'Basic QWRtaW5pc3RyYXRvcjo0dUNAeUZHRnVz',
		'Cache-Control': 'no-cache',
		'Content-Type': 'application/x-www-form-urlencoded',
		Pragma: 'no-cache',
		Connection: 'keep-alive',
		Host: 'martenf1.cdsuperstore.se',
		'X-Requested-With': 'XMLHttpRequest',
		Origin: 'http://martenf1.cdsuperstore.se',
		Referer: 'http://martenf1.cdsuperstore.se/api_test/index.html',
		'Referrer-Policy': 'unsafe-url',
	}
	const res = await fetch(url, {
		method: 'POST',
		headers: headers,
		// mode: 'cors',
		body: `POSTDATA=${encodeURI(JSON.stringify(bodyData))}`,
		// redirect: 'follow',
		// credentials: 'include',
	})
	const json = await res.json()
	if (json.errors) {
		// eslint-disable-next-line no-console
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json
}

export async function getAllProducts(limit = '30') {
	const brandId = '1'
	const brandmd = getMd('get_brand', brandId, limit)
	const brandbody = getBrandMethod(brandId, limit, appId, brandmd)
	const data = await fetchAPI(brandbody, true)
	return data.brand.article_list
}

export async function getCategories() {
	const catMd = getMd('get_menu')
	const catBody = getMenuMethod(appId, catMd)
	const data = await fetchAPI(catBody)
	return data.menu.categories[0].children
}

export async function getCategory(category, limit = '8') {
	const catMd = getMd('get_category', category, limit, 0, 'BeskrFallande')
	const catBody = getCategoryMethod(category, limit, appId, catMd)
	const data = await fetchAPI(catBody, true)
	return data.category
}

export async function getProductByArtnr(artnr) {
	const prodmd = getMd('get_article', artnr)
	const prodbody = getArticleMethod(artnr, appId, prodmd)
	const data = await fetchAPI(prodbody)
	return data
}

export async function loginUser(username, password) {
	const loginMd = getMd('login', password, username)
	const loginBody = loginMethod(username, password, appId, loginMd)
	const data = await fetchAPI(loginBody, true)
	return data
}

export async function getCustomer(pass, session, user, id) {
	const customerMd = getMd('get_customer')
	const customerBody = getCustomerMethod(
		pass,
		session,
		user,
		id,
		appId,
		customerMd
	)
	const data = await fetchAPI(customerBody, true)
	return data
}

export async function getOrders(pass, session, user, id) {
	const ordersMd = getMd('get_orders')
	const ordersBody = getOrdersMethod(pass, session, user, id, appId, ordersMd)
	const data = await fetchAPI(ordersBody, true)
	return data
}

export async function getGradeFromId(productId) {
	const gradeMd = getMd('get_avg_grade', productId)
	const gradeBody = getAvgGradeMethod(productId, appId, gradeMd)
	const data = await fetchAPI(gradeBody)
	return data
}

export async function addNewReview(
	productId,
	grade,
	userName,
	email,
	comment,
	emailBoolean
) {
	const showEmail = emailBoolean ? 'yes' : 'no'
	const gradeMd = getMd(
		'add_grade',
		comment,
		email,
		grade,
		userName,
		productId,
		showEmail
	)
	const params = {
		product_id: productId,
		grade,
		name: userName,
		email,
		comment,
		show_email: showEmail,
	}
	const gradeBody = addGradeMethod(params, appId, gradeMd)
	const data = await fetchAPI(gradeBody, true)
	return data
}

export async function getReviewsByProductId(productId) {
	const reviewMd = getMd('get_grades', productId)
	const reviewBody = getGradesMethod(productId, appId, reviewMd)
	const data = await fetchAPI(reviewBody)
	return data
}

export async function getOrder(pass, session, user, id, orderId) {
	const ordersMd = getMd('get_order', orderId)
	const ordersBody = getOrderMethod(
		pass,
		session,
		user,
		id,
		orderId,
		appId,
		ordersMd
	)
	const data = await fetchAPI(ordersBody, true)
	return data
}



export async function updateCart(
	user,
	productId,
	quantity,
) {
	const cartMd = getMd('update_cart', 0, '', quantity, productId, '')
	const cartBody = updateCartMethod(user, productId, quantity, appId, cartMd)
	const data = await fetchAPI(cartBody, true)
	return data
}
export async function getCart(
	user,
) {
	const cartMd = getMd('get_cart')
	const cartBody = getCartMethod(user, appId, cartMd)
	const data = await fetchAPI(cartBody, true)
	return data
}
