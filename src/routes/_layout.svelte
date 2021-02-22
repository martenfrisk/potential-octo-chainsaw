<script>
	import { fly } from 'svelte/transition'
	import GlobalStyle from '../components/GlobalStyle.svelte'
	import Nav from '../components/Nav.svelte'
</script>

<GlobalStyle />
<Nav />
<main>
	<div class={`absolute top-0 z-0 w-full h-screen ${process.env.NODE_ENV === 'production' ? 'wrapprod' : 'wrap'}`} />
	<div
		in:fly={{ x: -50, duration: 250, delay: 300, opacity: 1 }}
		out:fly={{ x: -50, duration: 250, opacity: 1 }}
	>

		<slot />
	</div>
</main>

<style>
	.wrap {
			transform: translateZ(0);
			overflow: hidden;
			background-image: url('/images/consoles.jpg');
			background-attachment: fixed;
			background-position: center;
			background-repeat: no-repeat;
			height: 100%;
			background-size: cover;
		}
		@supports (background-image: -webkit-image-set(url('/images/consoles.webp') 1x)) {
			.wrap {
				background-image: -webkit-image-set(url('/images/consoles.webp') 1x)
			}
		};
		@supports (background-image: -webkit-image-set(url('/images/consoles.avif') 1x)) {
			.wrap {
				background-image: -webkit-image-set(url('/images/consoles.avif') 1x)
			}
		};
	.wrapprod {
			transform: translateZ(0);
			overflow: hidden;
			background-image: url('/svelte/images/consoles.jpg');
			background-attachment: fixed;
			background-position: center;
			background-repeat: no-repeat;
			height: 100%;
			background-size: cover;
		}
		@supports (background-image: -webkit-image-set(url('/svelte/images/consoles.webp') 1x)) {
			.wrapprod {
				background-image: -webkit-image-set(url('/svelte/images/consoles.webp') 1x)
			}
		};
		@supports (background-image: -webkit-image-set(url('/svelte/images/consoles.avif') 1x)) {
			.wrapprod {
				background-image: -webkit-image-set(url('/svelte/images/consoles.avif') 1x)
			}
		};
</style>