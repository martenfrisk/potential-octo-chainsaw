<script context="module">
	import { getCategory } from '../../utils/api'
	export async function preload({ params }) {
		const data = await getCategory(params.id)
		const platform = data.title
		let products = []
		data.article_list.articles.forEach(article => {
			const tempArticle = {
				productName: article.title,
				productId: article.id,
				cover: article.image.normal,
				price: article.price,
				description: article.short_description,
			}
			products.push(tempArticle)
		})
		return { products, platform }
	}
</script>

<script>
	import ProductCard from '../../components/ProductCard.svelte'
	export let products, platform
</script>

<h1 class="w-full mx-auto mt-8 text-3xl text-center font-quicksand">
	{platform}
</h1>
<div
	class="grid w-5/6 max-w-6xl grid-flow-row-dense grid-cols-2 gap-4 mx-auto my-4 sm:grid-cols-3 sm:gap-20 sm:my-20"
>
	{#each products as product}
		<ProductCard
			productName={product.productName}
			productId={product.productId}
			cover={product.cover}
			price={product.price}
		/>
	{/each}
</div>
