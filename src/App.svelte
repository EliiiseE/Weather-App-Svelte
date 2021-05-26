<script>
	export let name;
	import Menu from './components/Menu.svelte';
	import './components/RequestCurrentData';

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Menu/>
	
</main>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>