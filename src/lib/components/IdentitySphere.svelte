<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container;
	let scene, camera, renderer, sphere, easternHemisphere, westernHemisphere;
	let animationId;

	onMount(() => {
		init();
		animate();

		return () => {
			cancelAnimationFrame(animationId);
			renderer.dispose();
		};
	});

	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setClearColor(0x000000, 0); // Set transparent background
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		// Create wireframe sphere
		const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
		const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true });
		sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
		scene.add(sphere);

		// Create eastern and western hemispheres
		const hemisphereMaterial = new THREE.MeshBasicMaterial({
			color: 0x3366cc,
			transparent: true,
			opacity: 0.3,
			side: THREE.DoubleSide
		});
		easternHemisphere = new THREE.Mesh(
			new THREE.SphereGeometry(1.99, 32, 32, 0, Math.PI),
			hemisphereMaterial
		);
		westernHemisphere = new THREE.Mesh(
			new THREE.SphereGeometry(1.99, 32, 32, Math.PI, Math.PI),
			hemisphereMaterial
		);
		scene.add(easternHemisphere, westernHemisphere);

		window.addEventListener('resize', onWindowResize, false);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);
		updateHemispheres();
		renderer.render(scene, camera);
	}

	function updateHemispheres() {
		const time = Date.now() * 0.001;
		const segments = 64;
		const easternPoints = [];
		const westernPoints = [];

		for (let i = 0; i <= segments; i++) {
			const theta = (i / segments) * Math.PI;
			const y = Math.cos(theta) * 2;
			let r = Math.sin(theta) * 2;
			const phi = Math.PI + 0.3 * Math.sin(theta * 5 + time);

			easternPoints.push(new THREE.Vector3(r * Math.cos(phi), y, r * Math.sin(phi)));
			westernPoints.push(new THREE.Vector3(-r * Math.cos(phi), y, -r * Math.sin(phi)));
		}

		easternHemisphere.geometry.dispose();
		westernHemisphere.geometry.dispose();

		easternHemisphere.geometry = new THREE.LatheGeometry(easternPoints, 32);
		westernHemisphere.geometry = new THREE.LatheGeometry(westernPoints, 32);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
</script>

<div bind:this={container}></div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
