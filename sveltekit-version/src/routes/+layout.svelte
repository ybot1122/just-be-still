<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<a href="/about">About</a>
	<a href="/services">Services</a>
</nav>
{@render children()}
