<script>
	import PsCover from './PSCover.svelte'
	import StarEmpty from './icons/StarEmpty.svelte'
	import Basket from './icons/Basket.svelte'
	export let cover, productName, price, productId
</script>

<div
	class="flex flex-wrap items-center justify-center border border-gray-200 rounded-md shadow-lg"
>
	<div class="flex flex-col items-center px-2 py-4">
		<a rel="prefetch" class="w-2/3 my-4" href={`/product/${productId}`}>
			<PsCover {cover} alt={productName} />
		</a>

	</div>
	<div class="w-full px-4 pt-2 pb-4 -mb-2 text-center bg-blue-100 rounded-t-md">
		<a
			class="text-xl font-light font-quicksand"
			rel="prefetch"
			href={`/product/${productId}`}>
			{productName}
		</a>
	</div>
	<div class="flex items-center justify-between w-full text-white bg-blue-600 rounded-t-lg rounded-b-md ">
		<div class="p-2">
			<StarEmpty />
		</div>
		<div class="text-lg font-normal font-quicksand">{price}:-</div>
		<div class="p-2">
			<Basket />
		</div>
	</div>
</div>
