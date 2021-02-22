<script lang="ts">
	export let heroProduct: IndexProduct

	import PsCover from '../components/PSCover.svelte'
	import Basket from '../components/icons/Basket.svelte'
	import StarEmpty from '../components/icons/StarEmpty.svelte'
	import type { IndexProduct } from '../methods/types'
</script>

<div
	class="flex flex-wrap justify-center w-5/6 max-w-5xl px-4 py-6 mx-auto my-4 text-white bg-gray-600 bg-opacity-50 border border-gray-500 sm:my-16 sm:px-20 font-quicksand rounded-3xl hero"
>
	<div class="flex flex-col justify-center w-full sm:w-2/5">
		<p class="text-4xl font-semibold">
			<a rel="prefetch" class="hover:underline" href={`/product/${heroProduct.productId}`}>
			{heroProduct.productName}
			</a>
			<span class="ml-2 text-2xl font-normal"
				>({heroProduct.price}:-)</span
			>
		</p>
		<p class="p-4 my-4 bg-gray-700 bg-opacity-25 rounded-md">{heroProduct.description}</p>
		<div class="flex">
			<div class="text-white hover:text-yellow-200">
				<StarEmpty />
			</div>
			<div class="ml-2 text-white hover:text-yellow-200">
				<Basket />
			</div>
		</div>
	</div>
	<div class="flex justify-end w-2/5">
		<PsCover cover={heroProduct.cover} alt={heroProduct.productName} />
	</div>
</div>

<style>
	.hero {
		backdrop-filter: blur(10px);
	}
</style>
