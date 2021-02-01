<script>
	import PsCover from './PSCover.svelte'
	import StarEmpty from './icons/StarEmpty.svelte'
	import Basket from './icons/Basket.svelte'
	export let cover, productName, price, productId, description
</script>

<div
	class="flex flex-wrap items-center justify-center bg-white border border-gray-200 rounded-md shadow-lg"
>
	<div class="flex justify-between w-full px-16 pt-6 text-2xl font-quicksand">
		<p>{price}:-</p>
		<a
			rel="prefetch"
			href={`/product/${productId}`}>
			{productName}
		</a>
	</div>
	<div class="flex items-center justify-center w-full px-8 py-2 mt-4 space-x-4 ">
		<a rel="prefetch" class="w-1/3 " href={`/product/${productId}`}>
			<PsCover {cover} alt={productName} />
		</a>
		<p class="w-1/2 px-6">{description}</p>
	</div>
	<div class="flex justify-end w-full -mt-6">
		<div class="p-4 text-gray-600">
			<StarEmpty />
		</div>
		<div class="p-4 text-gray-600">
			<Basket />
		</div>
	</div>
</div>
