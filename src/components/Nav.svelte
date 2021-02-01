<script lang="ts">
	export let segment: string
</script>

<nav class="border-b border-blue-400 border-opacity-50">
	<div class="flex justify-between max-w-6xl mx-auto">

		<div>
			<a aria-current={segment === undefined ? 'page' : undefined} href="."
			>home</a
			>
		</div>
		
		<div class="flex">
			<a aria-current={segment === 'about' ? 'page' : undefined} href="about"
			>about</a
			>
			<a
			rel="prefetch"
			aria-current={segment === 'blog' ? 'page' : undefined}
			href="blog">blog</a
			>
		</div>
	</div>
</nav>

<style>
	a {
		@apply border-b-2 text-blue-700 block border-transparent px-6 py-4 hover:border-blue-400 border-opacity-50;
	}

	[aria-current] {
		@apply border-b-2 border-blue-600;
	}
</style>
