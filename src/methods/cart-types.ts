export interface Campaign {
	name?: any
	id: string
}

export interface Availibility {
	visible: number
	orderable: number
	max_days: string
	id: string
	product_page: number
	requestable: number
	dynamic: number
	bookable: number
	monitoring: number
	title: string
	info_text: string
	min_days: string
	info_title: string
}

export interface ExtraImages {
	1: string
	2: string
}

export interface Image {
	extra_images: ExtraImages
	small: string
	normal: string
	large: string
}

export interface Vat {
	id: string
	description: string
	vat: string
	rate?: any
}

export interface Supplier {
	name: string
	id: string
}

export interface Brand {
	name: string
	article_list?: any
	id: string
	brands?: any
}

export interface Article {
	campaign: Campaign
	variation_articles: any[]
	id: string
	availibility: Availibility
	friendly_url: string
	price_disccount: number
	price: number
	category?: any
	short_description: string
	active: number
	avg_grade?: any
	rsk?: any
	ean?: any
	order_quantity?: any
	url?: any
	package_groups: any[]
	type: string
	categories: string[]
	update_time: string
	variation_options: any[]
	parent: string
	price_recommended: number
	hierarchy_category_names?: any
	description_owner?: any
	image: Image
	number_of_grades: number
	product_supplier_id?: any
	vat: Vat
	article_prices?: any
	supplier: Supplier
	hierarchy_artgrps?: any
	title: string
	availibility_out_of_stock?: any
	brand: Brand
	description: string
	category_id_default: string
	availibility_in_stock?: any
	package_price_type?: any
	variation_groups: any[]
	stock: string
	more_info: string
	create_time: string
	campaign_stop_time?: any
	campaign_start_time?: any
	short_description_owner?: any
	properties?: any
}

export interface Cartrow {
	as_gift: string
	sub_discount_id: string
	time: string
	id: string
	customer_id: string
	article: Article
	number: string
	session_id: string
	ab_contacted: string
	reserved?: any
	extra: string
	wished_length: string
	sub_session_id: string
	discount_id: string
}

export interface UserData {
	user: string
	vat: string
	session_id: string
	type: string
	pass: string
	currency: string
	language: string
	category_id: string
	contact_id: string
	id: string
}

export interface CartType {
	cartrows: Cartrow[]
	user_data: UserData
}
