<script lang="ts">
import { onMount } from 'svelte';

	import { user } from '../utils/store'

	import Cart from './Cart.svelte'
	import Login from './Login.svelte'
	$: showLoginBox = false
	export const logout = () => {
		user.set(null)
		typeof window !== 'undefined' && window.localStorage.removeItem('svelte-userdata')
	}
	const loginBoxButton = () => {
		if (window.localStorage.getItem('svelte-userdata')) {
			user.set(window.localStorage.getItem('svelte-userdata'))
		} else {
			showLoginBox = true
		}
	}

	onMount(async () => {
		if (typeof window !== 'undefined' && window.localStorage.getItem('svelte-userdata')) {
			user.set(window.localStorage.getItem('svelte-userdata'))
		}
		console.log($user)
	})
	$: console.log($user)
</script>

<nav style="top: -2rem" class="sticky z-30 flex items-center w-full h-24 bg-white border-b border-blue-400 border-opacity-50">
	<div class="sticky top-0 flex flex-wrap items-center justify-between w-full h-16 max-w-6xl mx-auto select-none">
		<div class="w-0 sm:w-1/5">&nbsp;</div>
		<div class="w-full text-2xl text-center text-blue-700 sm:w-3/5 font-quicksand sm:text-4xl">
			<a href="."> gamebooth </a>
		</div>
		<div class="flex justify-center w-full sm:justify-end sm:w-1/5">
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
				<Cart />
			</div>
		</div>
	</div>
</nav>
