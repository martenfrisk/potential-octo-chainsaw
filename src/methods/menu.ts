export const getMenuMethod = (
  APPID: string,
  MD5: string
) => ({
	data: {
		method: "get_menu",
		appid: APPID,
		md: MD5,
	},
})

export const getMenuCategoriesMethod = (
	id: number,
  APPID: string,
  MD5: string
) => ({
	data: {
		method: "get_menu_categories",
		params: {
			category_id: id
		},
		appid: APPID,
		md: MD5,
	}
})

export const getMenuPagesMethod = (
	id: number,
  APPID: string,
  MD5: string
) => ({
	data: {
		method: "get_menu_pages",
		params: {
			menu_id: id
		},
		appid: APPID,
		md: MD5,
	}
})
