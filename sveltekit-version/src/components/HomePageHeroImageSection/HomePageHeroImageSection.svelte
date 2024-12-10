<script lang="ts">
	import bg from '$lib/images/home/1.jpg';
	let { children } = $props();
</script>

<section class="section">
	<div class="tall:h-[100vh] relative w-full items-center justify-between text-sm">
		<div
			class="before:bg-recipeHeroScrim flex h-full w-full items-center justify-center before:absolute before:z-10 before:block before:h-full before:w-full"
		>
			<img
				src={bg}
				alt="JustBeStillDesign"
				class="absolute h-full w-full object-cover"
			/>
			{@render children?.()}
			<div class="absolute bottom-0 z-10 mb-5 animate-bounce">
				<button> Arrow Down </button>
			</div>
		</div>
	</div>
</section>
