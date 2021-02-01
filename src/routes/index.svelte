<script context="module">
	import { getCategory, getCategories } from '../utils/api'
	export async function preload() {
		const res = await getCategory('9', '12')
		const { articles } = await res
		const categories = await getCategories()
		let products = []
		articles.forEach((article, index) => {
			const tempArticle = {
				id: index,
				productName: article.title,
				productId: article.id,
				cover: article.image.normal,
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
	import ProductCard from '../components/ProductCard.svelte'
	import BigProductCard from '../components/BigProductCard.svelte'
	import type { CategoryType, IndexProduct } from './../methods/types';

	export let categories: CategoryType[]
	export let products: IndexProduct[]
</script>

<svelte:head>
	<title>Sapper e-commerce test</title>
</svelte:head>

<!-- <pre>{JSON.stringify(products, null, 2)}</pre> -->

<div class="flex justify-center my-2 sm:my-8">
	{#each categories as category}
		<a
			class="mx-2 text-lg border-b border-transparent sm:text-2xl sm:mx-8 font-quicksand hover:border-black"
			href={`/spel/${category.id}`}>
			{category.title}
		</a>
	{/each}
</div>

<div
	class="grid w-5/6 max-w-6xl grid-flow-row-dense grid-cols-2 gap-4 mx-auto my-4 sm:grid-cols-3 sm:gap-20 sm:my-20"
>
	{#each products as product, index}
		<div class="product">
			{#if index % 7 === 0}
				<BigProductCard
					productName={product.productName}
					productId={product.productId}
					cover={product.cover}
					price={product.price}
					description={product.description}
				/>
			{:else}
				<ProductCard
					productName={product.productName}
					productId={product.productId}
					cover={product.cover}
					price={product.price}
				/>
			{/if}
		</div>
	{/each}
</div>

<style>
	.product:nth-child(7n + 1) {
		grid-column: 1 / 3;
	}
</style>
