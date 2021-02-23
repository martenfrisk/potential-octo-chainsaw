<script context="module" lang="ts">
	import { getProductByArtnr, getCategory } from '../../utils/api'
	import type { APIArticle } from '../../methods/types'

	export async function preload({ params }) {
		const product: APIArticle = await getProductByArtnr(params.id)
		const tempArticle = {
			id: product.article.id,
			productName: product.article.title,
			productId: product.article.id,
			cover: product.article.image.normal
				.split('/')[3]
				.split('?')[0]
				.split('.')[0],
			price: product.article.price,
			shortDescription: product.article.short_description,
			description: product.article.description,
		}
		const res = await getCategory('9', '10')
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
		return { product: tempArticle, moreProducts: products }
	}
</script>

<script lang="typescript">
	import type { FilteredArticle, IndexProduct } from '../../methods/types'

	import PSCover from '../../components/PSCover.svelte'

	import Basket from '../../components/icons/Basket.svelte'
	import StarEmpty from '../../components/icons/StarEmpty.svelte'
	import MoreProducts from '../../components/MoreProducts.svelte'
	// import { fly } from 'svelte/transition'
	// import { quintIn } from 'svelte/easing'
	export let product: FilteredArticle, moreProducts: IndexProduct[]
	const filteredMore = moreProducts
		.filter(i => i.productId !== product.productId)
		.slice(0, 8)
	let readMore = false
</script>

<svelte:head>
	<title>Sapper e-commerce - {product.productName}</title>
</svelte:head>

<div class="relative z-10">
	<div
		class="flex flex-wrap justify-center w-5/6 max-w-5xl px-4 py-6 mx-auto my-4 text-white bg-gray-600 bg-opacity-25 border border-gray-500 sm:my-12 sm:px-20 font-quicksand rounded-3xl hero"
	>
		<div class="flex flex-col justify-center w-full sm:w-2/5">
			<p class="text-4xl font-semibold">
				{product.productName}<span class="ml-2 text-2xl font-normal"
					>({product.price}:-)</span
				>
			</p>
			<p
				class={`my-2 ${readMore ? 'line-clamp-none' : 'line-clamp-6'}`}
				on:click={() => (readMore = !readMore)}
			>
				{@html product.description}
			</p>
			{#if !readMore}
				<p
					class="w-full text-center pointer-cursor"
					on:click={() => (readMore = !readMore)}
				>
					Read more...
				</p>
			{/if}
			<div class="flex justify-center w-full mt-4 sm:justify-start">
				<div class="w-1/2 px-2">
					<div class="flex items-center px-2 py-px text-blue-500 bg-white border-2 border-blue-400 rounded-md shadow-md">
						<span>
							<StarEmpty />
						</span>
						<span class="ml-2">Add to wishlist</span>
					</div>
				</div>
				<div class="w-1/2 px-2">
					<div class="flex items-center px-2 py-px text-white border-2 border-blue-500 rounded-md shadow-md bg-gradient-to-r from-blue-600 to-blue-500">
						<span class="text-white hover:text-yellow-200">
							<Basket />
						</span>
						<span class="ml-2"> Buy </span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-end w-4/5 mt-4 sm:w-2/5">
			<PSCover cover={product.cover} alt={product.productName} />
		</div>
	</div>
	<MoreProducts moreProducts={filteredMore} />
</div>

<style>
	.hero {
		backdrop-filter: blur(10px);
	}
</style>
