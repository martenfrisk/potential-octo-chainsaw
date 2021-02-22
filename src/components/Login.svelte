<script lang="ts">
	import { loginUser } from '../utils/api'
	import { user } from '../utils/store'

	import { fly } from 'svelte/transition'
	let username = 'testuser2'
	let password = 'losen123'

	const login = async () => {
		if (window.localStorage.getItem('svelte-userdata')) {
			user.set(window.localStorage.getItem('svelte-userdata'))
		} else {
			const res = await loginUser(username, password)
			if (res.user_data.id === 0) {
				return Error('Wrong username or password. Try again!')
			} else {
				user.set(res.user_data)
				window.localStorage.setItem(
					'svelte-userdata',
					JSON.stringify(res.user_data)
				)
			}
		}

	}
</script>

{#if !$user}
	<form
		class="absolute z-20 flex flex-col px-4 py-2 mt-16 space-y-2 transform bg-white border border-blue-400 rounded-md shadow-lg -translate-x-1/3"
		on:submit|preventDefault={login}
		in:fly
	>
		<label for="username" class="text-sm"> username </label>
		<input
			id="username"
			type="text"
			bind:value={username}
			class="px-2 py-px border border-blue-400 rounded-md"
		/>
		<label for="password" class="text-sm"> password </label>
		<input
			id="password"
			type="password"
			bind:value={password}
			class="px-2 py-px border border-blue-400 rounded-md"
		/>
		<button
			type="submit"
			class="px-4 py-1 mx-auto mt-2 text-white bg-blue-400 border-2 border-white rounded-md hover:bg-white hover:text-blue-600 hover:border-blue-400"
			disabled={!username}>Log in</button
		>
	</form>
{/if}
