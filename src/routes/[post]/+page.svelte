<script>
	export let data;

	const { title, date } = data.metadata;

	const { PostContent } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<PostContent />
