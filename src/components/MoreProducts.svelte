<script>
	import ProductCard from './ProductCard.svelte'
	export let moreProducts
</script>
<div
class="relative z-10 flex w-5/6 max-w-6xl py-12 mx-auto overflow-x-auto bg-white select-none px-14 justify-evenly rounded-3xl sm:flex-wrap scrolltouch flex-nowrap "
>
{#each moreProducts as product}
	<div class="mx-2 sm:mb-12 sm:mx-4 product">
		<ProductCard
			productName={product.productName}
			productId={product.productId}
			cover={product.cover}
			price={product.price}
		/>

	</div>
{/each}
</div>

<style>
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