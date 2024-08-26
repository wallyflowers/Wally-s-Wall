<script>
	import { onMount, onDestroy } from 'svelte';

	let canvas;
	let ctx;
	let lines = [];
	let intervalId;

	// Function to draw a line
	function drawLine(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}

	// Function to generate random coordinate within canvas
	function randomCoord(max) {
		return Math.floor(Math.random() * max);
	}

	// Function to draw a random line and update the lines array
	function drawRandomLine() {
		const x1 = randomCoord(200);
		const y1 = randomCoord(200);
		const x2 = randomCoord(200);
		const y2 = randomCoord(200);

		drawLine(x1, y1, x2, y2);
		lines = [...lines, `drawLine(${x1}, ${y1}, ${x2}, ${y2})`];

		// Keep only the last 5 lines for display
		if (lines.length > 4) {
			lines = lines.slice(-4);
		}
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 2;

		// Start drawing random lines every half second
		intervalId = setInterval(() => {
			ctx.clearRect(0, 0, 200, 200); // Clear the canvas
			drawRandomLine();
		}, 1000);
	});

	onDestroy(() => {
		// Clean up the interval when the component is destroyed
		clearInterval(intervalId);
	});
</script>

<div class="container">
	<canvas bind:this={canvas} width="200" height="200"></canvas>
	<div class="function-calls">
		{#if lines[0]}
			<p class="text-red-700">{lines[0]}</p>
		{/if}
		{#each lines.slice(1, 4).reverse() as line}
			<p>{line}</p>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: flex-start;
	}
	canvas {
		border: 1px solid #ccc;
		margin-right: 20px;
	}
	.function-calls {
		font-family: monospace;
	}
</style>
