<script context="module" lang="ts">
	import { getCategory, getCategories } from '../utils/api'
	export async function preload() {
		const res = await getCategory('9', '13')
		const categories = await getCategories()
		let products = []
		res.article_list.articles.forEach((article: any, index: number) => {
			const tempArticle = {
				id: index,
				productName: article.title,
				productId: article.id,
				cover: article.image.normal.split('/')[3].split('?')[0].split('.')[0],
				price: article.price,
				description: article.short_description,
			}
			products.push(tempArticle)
		})
		return {
			products,
			categories,
		}
	}
</script>

<script lang="ts">
	import type { CategoryType, IndexProduct } from './../methods/types'
	import HeroProduct from '../components/HeroProduct.svelte'
	import MoreProducts from '../components/MoreProducts.svelte'
	export let categories: CategoryType[]
	export let products: IndexProduct[]
	const moreProducts = products.slice(1)
	const heroProduct = products[0]
</script>

<svelte:head>
	<title>Sapper e-commerce test</title>
	<meta name="description" content="Testbutik byggd med Sapper" />
</svelte:head>

<div class="relative flex justify-center py-3 bg-white">
	{#each categories as category}
		<a
			class="mx-2 text-lg border-b border-transparent sm:text-xl sm:mx-8 font-quicksand hover:border-black"
			href={`/spel/${category.id}/${category.title}`}
		>
			{category.title}
		</a>
	{/each}
</div>
<HeroProduct {heroProduct} />
<!-- <div
	class="grid w-5/6 max-w-6xl grid-flow-row-dense grid-cols-2 gap-4 mx-auto my-4 sm:grid-cols-4 sm:gap-20 sm:my-20"
> -->
<MoreProducts {moreProducts} />

<style>
	/* .bgimg {
		filter: saturate(150%) blur(1px);
		transform: scale(1.1) scaleX(-1);
	} */
</style>
