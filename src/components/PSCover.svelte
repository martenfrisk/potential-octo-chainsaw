<script lang="typescript">
	export let cover: string, alt: string
	const imgsrc = cover.split('/')[3].split('?')[0].split('.')[0]
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
	<source srcSet={`/images/${imgsrc}.avif`} type="image/avif" />
	<source srcSet={`/images/${imgsrc}.webp`} type="image/webp" />
	<img
		src={`/images/${imgsrc}.jpg`}
		alt={`Cover for ${alt}`}
		loading="lazy"
		class="shadow-lg rounded-xl"
		width="300"
		height="300"
	/>
</picture>
