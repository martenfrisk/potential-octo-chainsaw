<script>
	import { user, cartOpen } from '../utils/store'
	// import type { CartType } from '../methods/cart-types'
	import { getCart } from '../utils/api'
	import CartIcon from './icons/CartIcon.svelte'
	import { onMount } from 'svelte'

	let items
	const importCart = async () => {
		if ($user) {
			items = await getCart(JSON.parse($user))
		} else {
			if (typeof window !== undefined)
				items = JSON.parse(window.localStorage.getItem('sapper-cart'))
		}
	}
	onMount(async () => {
		await $user
		if ($user) importCart()
	})

	function clickOutside(node) {
		const handleClick = event => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node))
			}
		}

		document.addEventListener('click', handleClick, true)

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true)
			},
		}
	}
</script>

<div use:clickOutside on:click_outside={() => ($cartOpen = false)}>
	<span class="cursor-pointer" on:click={() => ($cartOpen = !$cartOpen)}>
		<CartIcon svgClass="w-6 h-6 " />
	</span>
	{#if $cartOpen}
		<div
			class="absolute right-0 z-30 flex flex-col w-auto px-4 py-8 mt-4 transform bg-white border border-blue-400 rounded-md shadow-lg"
		>
			{#if items && items.cartrows}
				{#each items.cartrows as item}
					<p class="flex justify-between w-full mb-1">
						<span class="mr-2 whitespace-nowrap">
							{item.article.title}
						</span>
						<span class="text-blue-500">{item.article.price}:-</span>
					</p>
				{/each}
			{:else if items}
				{#each items as item}
					<p class="whitespace-nowrap">{item.productName}</p>
				{/each}
			{:else}
				<p>Empty cart.</p>
			{/if}
		</div>
	{/if}
</div>
