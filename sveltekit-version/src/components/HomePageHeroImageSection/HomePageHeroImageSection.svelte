<script lang="ts">
	let { children } = $props();
</script>

<section class="section">
	<div class="tall:h-[100vh] relative w-full items-center justify-between text-sm">
		<div
			class="before:bg-recipeHeroScrim flex h-full w-full items-center justify-center before:absolute before:z-10 before:block before:h-full before:w-full"
		>
			<img
				src="https://www.justbestilldesign.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.34a9cd0d.jpg&w=3840&q=75"
				alt="hi"
			/>
			{@render children?.()}
			<div class="absolute bottom-0 z-10 mb-5 animate-bounce">
				<button> Arrow Down </button>
			</div>
		</div>
	</div>
</section>
