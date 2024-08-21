<script>
	export let post;
</script>

<div class="m-auto max-w-full w-[500px]">
	<div class="flex flex-row gap-2 items-start">
		<!-- <img alt="Post" src="" /> -->
		<a href="/{post.filename}">
			<h2 class="font-medium text-lg">{post.title}</h2>
		</a>
	</div>
	<div class="bg-gray-100 rounded-xl">
		<div class="flex flex-col gap-3 m-auto p-5">
			<p>{post.preview}</p>
		</div>
	</div>
</div>
