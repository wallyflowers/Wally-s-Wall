<script>
	export let timelineStart; // Approximate year of earliest writing systems
	export let ageStart; // Approximate year of scientific method formalization
	export let color;
	export let currentYear = 2024;

	const totalYears = currentYear - timelineStart;
	const scientificMethodYears = currentYear - ageStart;

	const scientificMethodPercentage = (scientificMethodYears / totalYears) * 100;
</script>

<div class="timeline">
	<div
		class="scientific-method"
		style="width: {scientificMethodPercentage}%; background-color: {color};"
	></div>
</div>

<style>
	.timeline {
		width: 90%;
		margin-top: 50px;
		margin-bottom: 50px;
		height: 20px;
		background-color: #e0e0e0;
		position: relative;
		border-radius: 3px;
		overflow: hidden;
	}

	.scientific-method {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>
