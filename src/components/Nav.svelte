<script lang="ts">
	import { user } from '../utils/store'
	import Cart from './icons/Cart.svelte'
	import Login from './Login.svelte'
	$: showLoginBox = false
	export const logout = () => {
		user.set(null)
		window.localStorage.removeItem('svelte-userdata')
	}
	const loginBoxButton = () => {
		if (window.localStorage.getItem('svelte-userdata')) {
			user.set('svelte-userdata')
		} else {
			showLoginBox = true
		}
	}
</script>

<nav class="relative z-10 bg-white border-b border-blue-400 border-opacity-50">
	<div class="flex items-center justify-between max-w-6xl mx-auto select-none">
		<div class="w-1/5">&nbsp;</div>
		<div
			class="text-2xl text-center text-blue-900 font-quicksand sm:text-4xl"
		>
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
				<Cart svgClass="w-6 h-6" />
			</div>
		</div>
	</div>
</nav>

