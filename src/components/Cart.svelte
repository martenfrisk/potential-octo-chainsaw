<script>
	export let items
</script>

{#if items}
	<div
		class="fixed z-30 flex flex-col px-4 py-8 transform translate-y-1/2 bg-white border border-blue-400 rounded-md shadow-lg -translate-x-1/3"
	>
		{#if items.cartrows}
			{#each items.cartrows as item}
				<p>{item.article.title}</p>
			{/each}
		{:else}
			{#each items as item}
				<p>{item.productName}</p>
			{/each}
		{/if}
	</div>
{/if}
