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
	// import BigProductCard from '../components/BigProductCard.svelte'
	import type { CategoryType, IndexProduct } from './../methods/types'
	import HeroProduct from '../components/HeroProduct.svelte'
	export let categories: CategoryType[]
	export let products: IndexProduct[]
	const moreProducts = products.slice(1)
	const heroProduct = products[0]
</script>

<svelte:head>
	<title>Sapper e-commerce test</title>
	<meta name="description" content="Testbutik byggd med Sapper">
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
<div
	class="relative z-10 flex w-5/6 max-w-6xl py-12 mx-auto overflow-x-auto bg-white select-none px-14 justify-evenly rounded-3xl sm:flex-wrap scrolltouch flex-nowrap "
>
	{#each moreProducts as product}
		<div class="mx-2 sm:mb-12 sm:mx-4 product">
			<!-- {#if index % 7 === 0}
				<BigProductCard
					productName={product.productName}
					productId={product.productId}
					cover={product.cover}
					price={product.price}
					description={product.description}
				/>
			{:else} -->
			<ProductCard
				productName={product.productName}
				productId={product.productId}
				cover={product.cover}
				price={product.price}
			/>
			<!-- {/if} -->
		</div>
	{/each}
</div>

<style>
	/* .bgimg {
		filter: saturate(150%) blur(1px);
		transform: scale(1.1) scaleX(-1);
	} */

	.scrolltouch {
		-webkit-overflow-scrolling: touch;
		scroll-snap-align: center;
		scroll-snap-stop: always;
		scroll-snap-type: x mandatory;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.product {
		width: 200px;
		min-width: 200px;
	}
</style>
