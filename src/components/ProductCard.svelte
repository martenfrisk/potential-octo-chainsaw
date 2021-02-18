<script>
	import PsCover from './PSCover.svelte'
	import StarEmpty from './icons/StarEmpty.svelte'
	import Basket from './icons/Basket.svelte'
	export let cover, productName, price, productId
</script>

<div
	class="flex flex-wrap items-center justify-center w-full h-full border border-gray-200 shadow-md hover:shadow-lg rounded-2xl"
>
	<div class="relative flex flex-col items-center p-3">
		<a rel="prefetch" class="w-full" href={`/product/${productId}`}>
			<PsCover {cover} alt={productName} />
		</a>
		<div class="absolute top-0 right-0 p-1 mt-4 mr-4 text-white bg-gray-500 bg-opacity-75 rounded-full hover:text-yellow-200 sm:p-2">
			<StarEmpty />
		</div>
	</div>
	<div class="flex items-center w-full px-3 mb-2">
		<div class="flex flex-col justify-between w-4/5">
			<a
				class="h-12 text-lg font-light leading-snug align-top line-clamp-2 font-quicksand"
				rel="prefetch"
				href={`/product/${productId}`}
			>
				{productName}
			</a>
			<div class="text-base font-semibold font-quicksand">
				{price}:-
			</div>
		</div>
		<div class="flex justify-center w-1/5">
			<div class="p-1 text-white bg-blue-400 rounded-full hover:bg-blue-500 hover:shadow-md sm:p-2">

				<Basket />
			</div>
		</div>
	</div>
</div>

