<script>
	import { user, cartOpen } from '../utils/store'
	// import type { CartType } from '../methods/cart-types'
	import { getCart, updateCart } from '../utils/api'
	import CartIcon from './icons/CartIcon.svelte'
	import { onMount } from 'svelte'

	let items

	$: if (typeof window !== 'undefined') $cartOpen, importCart()

	export const importCart = async () => {
		if ($user) {
			const { cartrows } = await getCart(JSON.parse($user))
			if (cartrows) items = cartrows
		} else {
			if (typeof window !== 'undefined') {
				items = JSON.parse(window.localStorage.getItem('sapper-cart'))
			}
		}
	}
	onMount(async () => {
		await $user
		importCart()
	})

	const removeProduct = async productId => {
		const res = await updateCart(JSON.parse($user), productId, 0)
		if (res) await importCart()
	}

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

	const handleOpenClick = async () => {
		$cartOpen = !$cartOpen
		await importCart()
	}
</script>

<div use:clickOutside on:click_outside={() => ($cartOpen = false)}>
	<span class="cursor-pointer" on:click={handleOpenClick}>
		<CartIcon svgClass="w-6 h-6 " />
	</span>
	{#if $cartOpen}
		<div
			class="absolute right-0 z-30 flex flex-col px-4 py-8 mt-4 transform bg-white border border-blue-400 rounded-md shadow-lg w-72"
		>
			{#await items then items}
				{#if items}
					{#each items as item}
						<div class="flex justify-between w-full mb-1">
							<div
								class="w-4/5 overflow-hidden overflow-ellipsis whitespace-nowrap"
							>
								<span
									class="cursor-pointer"
									on:click={removeProduct(item.article.id)}>x</span
								>
								<span class="">
									{item.article.title}
								</span>
							</div>
							<span class="w-1/5 pl-2 text-blue-500"
								>{item.article.price}:-</span
							>
						</div>
					{/each}
				{:else}
					<p>Empty cart.</p>
				{/if}
			{/await}
			<!-- {:else if $items}
				{#each items as item}
					<p class="whitespace-nowrap">{item.productName}</p>
				{/each} -->
		</div>
	{/if}
</div>
