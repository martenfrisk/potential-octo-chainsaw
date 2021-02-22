<script>
	import PsCover from './PSCover.svelte'
	import StarEmpty from './icons/StarEmpty.svelte'
	import Basket from './icons/Basket.svelte'
	export let cover, productName, price, productId, description
</script>

<div
	class="flex flex-wrap items-center justify-center bg-white border border-gray-200 rounded-md shadow-lg"
>
	<div class="flex flex-col items-center w-full px-2 pt-6 text-2xl sm:justify-between sm:flex-row sm:px-16 font-quicksand">
		<p class="order-last text-lg sm:order-first sm:text-2xl">{price}:-</p>
		<a
			rel="prefetch"
			href={`${process.env.NODE_ENV === 'production' ? '/svelte' : ''}/product/${productId}`}>
			{productName}
		</a>
	</div>
	<div class="flex flex-col items-center justify-center w-full px-2 py-2 mt-4 space-x-4 sm:px-8 sm:flex-row ">
		<a rel="prefetch" class="w-4/5 sm:w-1/3 " href={`${process.env.NODE_ENV === 'production' ? '/svelte' : ''}/product/${productId}`}>
			<PsCover {cover} alt={productName} />
		</a>
		<p class="w-full px-6 pt-4 sm:w-1/2 sm:pt-0">{description}</p>
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
