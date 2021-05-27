<script> 
	import Feature from './components/Feature.svelte';
	import WeatherByHours from './components/WeatherByHours.svelte';
	import GlobalWeather from './components/GlobalWeather.svelte';
	import Header from './components/Header.svelte';
	import './components/RequestCurrentData';
</script>

<main>
	<div class="flex flex-row">
		<Feature text={'Wind'} src={'/images/wind/42.png'} number={'11km/h'}/>
		<Feature text={'Humidity'} src={'/images/cloud/7.png'} number={'53%'}/>
		<Feature text={'Feels like'} src={'/images/sun/26.png'} number={'27°C'}/>
	</div>

	<div class="flex flex-col">
		<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
	</div>

	<div class="flex flex-wrap">
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
	</div>

	<div>
		<Header today={'27 May 2021'} statement={'Good Morning'}/>
	</div>	
	
</main>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>