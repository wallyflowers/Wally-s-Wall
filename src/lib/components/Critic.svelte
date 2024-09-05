<script>
	import { onMount, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let commentTexts = [];
	export let maxAttempts = 50;
	export let initialDelay = 8000; // 8 seconds
	export let finalDelay = 200; // 0.2 seconds

	let comments = [];
	let timeoutId;
	let currentIndex = 0;

	const globalOpacity = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	function calculateDelay(progress) {
		return initialDelay - (initialDelay - finalDelay) * Math.pow(progress, 2);
	}

	function createTweenedOpacity() {
		return tweened(0, {
			duration: 1000,
			easing: cubicOut
		});
	}

	function addComment() {
		if (currentIndex < commentTexts.length) {
			let newComment;
			let attempts = 0;
			do {
				newComment = {
					text: commentTexts[currentIndex],
					x: Math.random() * 80,
					y: Math.random() * 70 + 10,
					opacity: createTweenedOpacity()
				};
				attempts++;
				if (attempts >= maxAttempts) {
					console.warn('Max attempts reached. Adding the comment.');
					comments = [...comments, newComment];
					globalOpacity.set(Math.min((currentIndex + 1) * 0.05, 0.95));
					currentIndex++;
					newComment.opacity.set(1);
					scheduleNextComment();
					return;
				}
			} while (checkOverlap(newComment, comments));
			comments = [...comments, newComment];
			globalOpacity.set(Math.min((currentIndex + 1) * 0.05, 0.95));
			currentIndex++;
			newComment.opacity.set(1);
			scheduleNextComment();
		}
	}

	function scheduleNextComment() {
		if (currentIndex <= commentTexts.length) {
			const progress = currentIndex / commentTexts.length;
			const delay = calculateDelay(progress);
			timeoutId = setTimeout(addComment, delay);
		}
	}

	function checkOverlap(newComment, existingComments) {
		for (let comment of existingComments) {
			const xOverlap = Math.abs(newComment.x - comment.x) < 20;
			const yOverlap = Math.abs(newComment.y - comment.y) < 10;
			if (xOverlap && yOverlap) return true;
		}
		return false;
	}

	onMount(() => {
		if (commentTexts.length > 0) {
			timeoutId = setTimeout(addComment, initialDelay);
		}
	});

	onDestroy(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
	});
</script>

<div class="comment-overlay" style="opacity: {$globalOpacity}">
	{#each comments as comment}
		<div
			class="comment"
			style="left: {comment.x}%; top: {comment.y}%; opacity: {comment.$opacity};"
		>
			{comment.text}
		</div>
	{/each}
</div>

<style>
	.comment-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
	}
	.comment {
		position: absolute;
		background-color: rgba(255, 255, 255, 0.9);
		color: #333;
		padding: 8px 12px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: bold;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		max-width: 200px;
		word-wrap: break-word;
	}
</style>
