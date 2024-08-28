<!-- This is an mdsvex layout. The frontmatter of the posts get passed to it as props. -->

<script>
	export let title;
	export let date;
	// export let preview;
</script>

<div class="flex flex-col gap-4 w-[500px] m-auto max-w-[90%] mb-24 mt-32">
	<div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
		<h1>{title}</h1>
		<p>{date}</p>
		<slot>
			<!-- the mdsvex content will be slotted in here -->
		</slot>
	</div>
</div>
