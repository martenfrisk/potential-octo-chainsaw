<script>
	import PsCover from './PSCover.svelte'
	import StarEmpty from './icons/StarEmpty.svelte'
	import { user, cartOpen } from '../utils/store'
	import Basket from './icons/Basket.svelte'
	import { updateCart } from '../utils/api'
	// import { fly } from 'svelte/transition'
	// import { quintIn } from 'svelte/easing'
	export let cover, productName, price, productId, description
	const addToCart = async () => {
		$cartOpen = true
		if ($user) {
			updateCart(JSON.parse($user), productId, 1)
		} else {
			if (typeof window !== 'undefined') {
				const prevCart = JSON.parse(window.localStorage.getItem('sapper-cart'))
				let tempObj
				if (prevCart.some(i => i.productId === productId)) {
					const previousSame = prevCart.find(i => i.productId === productId)
					tempObj = {
						productName,
						price,
						productId,
						quantity: previousSame.quantity + 1,
					}
				} else {
					tempObj = { productName, price, productId, quantity: 1 }
				}
				if (prevCart) {
					const newCart = [...prevCart, tempObj]
					window.localStorage.setItem('sapper-cart', JSON.stringify(newCart))
				} else {
					window.localStorage.setItem('sapper-cart', JSON.stringify([tempObj]))
				}
			}
		}
	}
</script>

<div
	class="flex flex-wrap items-center justify-center w-full h-full border border-gray-200 shadow-md hover:shadow-lg rounded-2xl"
>
	<div class="relative flex flex-col items-center overflow-hidden">
		<a
			rel="prefetch"
			class="w-full p-3 m-px overflow-hidden group "
			href={`${
				process.env.NODE_ENV === 'production' ? '/svelte' : ''
			}/product/${productId}`}
		>
			<div
				class="absolute flex items-end p-3 text-xs text-white transition-all duration-300 ease-in-out transform bg-opacity-0 group-hover:translate-y-0 translate-y-110 group-hover:bg-opacity-100 rounded-2xl bg-gradient-to-t from-gray-700 to-transparent description"
			>
				<p>{description}</p>
			</div>
			<PsCover {cover} alt={productName} />
		</a>
		<div
			class="absolute top-0 right-0 p-1 mt-4 mr-4 text-white bg-gray-500 bg-opacity-75 rounded-full hover:text-yellow-200 sm:p-2"
		>
			<StarEmpty />
		</div>
	</div>
	<div class="flex items-center w-full px-3 mb-2">
		<div class="flex flex-col justify-between w-4/5">
			<a
				class="h-12 text-lg font-light leading-snug align-top line-clamp-2 font-quicksand"
				rel="prefetch"
				href={`${
					process.env.NODE_ENV === 'production' ? '/svelte' : ''
				}/product/${productId}`}
			>
				{productName}
			</a>
			<div class="text-base font-semibold font-quicksand">
				{price}:-
			</div>
		</div>
		<div class="flex justify-center w-1/5">
			<div
				class="p-1 text-white bg-blue-400 rounded-full cursor-pointer hover:bg-blue-500 hover:shadow-md sm:p-2"
				on:click={addToCart}
			>
				<Basket />
			</div>
		</div>
	</div>
</div>

<style>
	.description {
		width: 174px;
		height: 174px;
	}
</style>
