<!-- This is an mdsvex layout. The frontmatter of the posts get passed to it as props. -->

<script>
	export let title;
	export let date;
</script>

<h1 class="m-5">{title}</h1>
<p class="m-5">{date}</p>
<div class="m-5">
	<slot>
		<!-- the mdsvex content will be slotted in here -->
	</slot>
</div>
