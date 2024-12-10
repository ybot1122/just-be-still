<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav/Nav.svelte';
	let { children } = $props();
</script>

<Nav />
{@render children()}
