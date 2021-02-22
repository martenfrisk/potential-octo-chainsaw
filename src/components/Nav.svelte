<script lang="ts">
	import type { CartType } from '../methods/cart-types'

	import { getCart } from '../utils/api'

	import { user } from '../utils/store'
	import Cart from './Cart.svelte'
	import CartIcon from './icons/CartIcon.svelte'
	import Login from './Login.svelte'
	$: showLoginBox = false
	export const logout = () => {
		user.set(null)
		window.localStorage.removeItem('svelte-userdata')
	}
	const loginBoxButton = () => {
		if (window.localStorage.getItem('svelte-userdata')) {
			user.set(window.localStorage.getItem('svelte-userdata'))
		} else {
			showLoginBox = true
		}
	}
	let items: CartType
	const importCart = async () => {
		if ($user) {
			items = await getCart(JSON.parse($user))
		} else {
			if (typeof window !== undefined) items = JSON.parse(window.localStorage.getItem('sapper-cart')) 
		}
	}
</script>

<nav style="top: -2rem" class="sticky z-30 flex items-center w-full h-24 bg-white border-b border-blue-400 border-opacity-50">
	<div class="sticky top-0 flex items-center justify-between w-full h-16 max-w-6xl mx-auto select-none">
		<div class="w-1/5">&nbsp;</div>
		<div class="text-2xl text-center text-blue-900 font-quicksand sm:text-4xl">
			<a href="."> gamebooth </a>
		</div>
		<div class="flex justify-end w-1/5">
			{#if $user}
				<a
					href="profile"
					class="border-b-2 text-blue-700 block border-transparent px-6 py-4 hover:border-blue-400 border-opacity-50;"
					>profile</a
				>
				<span
					on:click={logout}
					class="block px-6 py-4 text-blue-700 border-b-2 border-transparent border-opacity-50 cursor-pointer hover:border-blue-400"
					>logout</span
				>
			{:else}
				<span
					on:click={loginBoxButton}
					class="block px-6 py-4 text-blue-700 border-b-2 border-transparent border-opacity-50 cursor-pointer hover:border-blue-400"
					>login</span
				>
			{/if}
			{#if showLoginBox}
				<Login />
			{/if}
			<div class="flex items-center text-blue-700">
				<span class="cursor-pointer" on:click={importCart}>
					<CartIcon svgClass="w-6 h-6 " />
				</span>
				<Cart {items} />
			</div>
		</div>
	</div>
</nav>
