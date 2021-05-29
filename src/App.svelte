<script> 
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import City from "./pages/City.svelte";
	export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router url="{url}">
	<div>
	<Route path="/city"><City/></Route>
	<Route path="/"><Home/></Route>
	</div>
</Router>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>