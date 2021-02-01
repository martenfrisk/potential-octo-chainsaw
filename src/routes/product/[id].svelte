<script context="module">
	import { getProductByArtnr } from '../../utils/api'
	export async function preload({ params }) {
		const product = await getProductByArtnr(params.id)
		return { product }
	}
</script>

<script lang="typescript">
	export let product
	import PSCover from '../../components/PSCover.svelte'
</script>

<details>
	<summary>Details</summary>
	<pre>{JSON.stringify(product, null, 4)}</pre>
</details>
{#await product then product}
	<PSCover cover={product.article.image.normal} />
{/await}
