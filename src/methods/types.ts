/* eslint-disable camelcase */
export type UserAuthenticated = {
	currency: string
	vat: string
	pass: string
	category_id: string
	contact_id: number
	session_id: string
	type: string
	id: string
	user: string
	language: string
}

export type IndexProduct = {
	id: number
	productName: string
	productId: string
	cover: string
	price: string
	description: string
}
export type CategoryType = {
	level: string
	title: string
	children: any
	id: string
	is_active: number
	url: string
	has_active_child: number
	has_children: number
	images: any[]
}

export type UserDetails = {
	user_name: string
	pno_extra: string
	mobile_phone: string
	type: string
	register_date: string
	pricelist: string
	fax: string
	vat_no: string
	email: string
	fb_id: string
	evening_phone: string
	delivery_address: {
		country_code: string
		country: string
		day_phone: string
		street_no: string
		city: string
		id: string
		first_name: string
		idx: string
		zip: string
		street_extra: string
		street: string
		last_name: string
		company: string
		state: string
		street_ext: string
	}
	invoice_address: {
		day_phone: string
		country_code: string
		country: string
		id: string
		city: string
		street_no: string
		street_extra: string
		street: string
		last_name: string
		zip: string
		first_name: string
		idx: string
		street_ext: string
		state: string
		company: string
	}
	ext_id: string
	customer_account: string
	subscribed: string
	card_no: string
	pno: string
	id: string
}

export type UserOrder = {
	freight_price_incl_vat: string
	estimated_delivery_time: string
	customer: string
	currency: {
		rate: string
		code: string
	}
	internal_currency: {
		rate: string
		code: string
	}
	notification: {
		price: string
		price_incl_vat: string
		vat: string
		title: string
		id: string
		price_excl_vat: string
	}
	freight: {
		vat: string
		category: string
		title: string
		price_excl_vat: string
		id: string
		price: string
		price_incl_vat: string
	}
	time: string
	vat_amount: string
	payment_vat: string
	payment: {
		price: string
		internal_code: string
		price_excl_vat: string
		id: string
		title: string
		vat: string
		price_incl_vat: string
		psp_name: null
	}
	freight_vat: string
	payment_price_excl_vat: string
	id: string
	extra: string
	total_amount: string
	freight_tracking_number: string
	comment: string
	payment_time: string
	notification_price_excl_vat: string
	total_amount_excl_vat: string
	orderrows: string
	server: string
	payment_price_incl_vat: string
	expected_delivery_time: string
	customer_account: string
	exported: string
	temporary_id: string
	notification_price_incl_vat: string
	language: {
		name: string
		id: string
	}
	orderstatus: {
		id: string
		title: string
	}
	freight_price_excl_vat: string
	notification_vat: string
	days_since_last_order: string
	total_amount_incl_vat: string
	details: any
}

export interface UserData {
	pass: string
	type: number
	currency: string
	language: string
	vat: string
	user: string
	category_id: string
	id: string
	session_id: string
	contact_id: string
}

export interface Availibility {
	max_days: string
	id: string
	min_days: string
	title: string
	info_title: string
	dynamic: number
	visible: number
	requestable: number
	product_page: number
	info_text: string
	bookable: number
	monitoring: number
	orderable: number
}

export interface Brand {
	name: string
	id: string
	brands?: any
	article_list?: any
}

export interface ExtraImages {
	1: string
}

export interface Image {
	small: string
	normal: string
	extra_images: ExtraImages
	large: string
}

export interface Vat {
	vat: string
	description: string
	id: string
	rate?: any
}

export interface Campaign {
	id: string
	name?: any
}

export interface Supplier {
	id: string
	name: string
}

export interface AirArticle {
	short_description_owner?: any
	variation_options: any[]
	availibility_out_of_stock?: any
	hierarchy_artgrps?: any
	availibility: Availibility
	availibility_in_stock?: any
	package_price_type?: any
	number_of_grades: number
	avg_grade?: any
	variation_groups: any[]
	brand: Brand
	create_time: string
	campaign_stop_time?: any
	friendly_url: string
	type: string
	rsk?: any
	hierarchy_category_names?: any
	category?: any
	parent: string
	category_id_default?: any
	price_recommended: number
	variation_articles: any[]
	order_quantity?: any
	title: string
	properties?: any
	stock: string
	campaign_start_time?: any
	image: Image
	categories: string[]
	description_owner?: any
	short_description: string
	description: string
	active: number
	more_info: string
	url?: any
	ean?: any
	id: string
	update_time: string
	price_disccount: number
	vat: Vat
	price: number
	campaign: Campaign
	supplier: Supplier
	product_supplier_id?: any
	package_groups: any[]
	article_prices?: any
}

export interface APIArticle {
	user_data: UserData;
	article: AirArticle;
}

export interface FilteredArticle {
	id: string;
	productName: string;
	productId: string;
	cover: string;
	price: number;
	shortDescription: string;
	description: string;
}