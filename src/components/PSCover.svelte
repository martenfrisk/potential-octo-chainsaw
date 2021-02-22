<script lang="typescript">
	export let cover: string, alt: string
</script>

<!-- <div class="container">
	<div
		class="imageholder"
		>
		{#if rotate}
		<img src="/images/psx-cover-side.png" alt="" class="side" />
		{/if}
		<img src="/images/psx-cover.png" alt="" class="front" />
	</div>
</div> -->
<picture>
	<source srcSet={`/images/${cover}.avif`} type="image/avif" />
	<source srcSet={`/images/${cover}.webp`} type="image/webp" />
	<img
		src={`/images/${cover}.jpg`}
		alt={`Cover for ${alt}`}
		class="rounded-2xl"
		loading="lazy"
		width="300"
		height="300"
	/>
</picture>
