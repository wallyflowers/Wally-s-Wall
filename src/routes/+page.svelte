<script>
	//import wally from '$lib/assets/wally.png';
	import bricks from '$lib/assets/bricks.png';
	import PostPreview from '$lib/components/PostPreview.svelte';
	import { posts } from '$lib/posts.js';
</script>

<!-- <img class="h-20 rounded-full" alt="Wally" src={wally} /> -->

<!-- Hero -->
<div class="flex flex-col gap-9 py-32">
	<div class="m-auto max-w-full w-[500px]">
		<div class="flex flex-col text-center items-center gap-3 m-auto">
			<img src={bricks} alt="Background Bricks" class="w-40" />
			<h1 class="font-bold text-2xl">Where the Wall Falls</h1>
			<p class="italic">
				Somewhere between <br /> The formal machine <br />and the people that toggle its bits
				<br />is a spirit that knows <br />that mathematics and prose <br />are forever espoused to
				our wits
			</p>
		</div>
		<!-- Posts -->
		<div class="flex flex-col gap-6 mt-10 px-5">
			{#each posts as post}
				<PostPreview {post} />
			{/each}
		</div>
	</div>
</div>
