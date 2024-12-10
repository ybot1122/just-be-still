<script lang="ts">
	import HomePageHeroImageSection from '../components/HomePageHeroImageSection/HomePageHeroImageSection.svelte';
	import logo from '$lib/images/logo.jpg';
</script>

	<HomePageHeroImageSection>
    <div class="text-white z-20 my-[150px] tall:my-0">
      <a href="/">
        <img src={logo} alt="JustBeStillDesign logo" width={250} height={250} />
      </a>
    </div>
  </HomePageHeroImageSection>
