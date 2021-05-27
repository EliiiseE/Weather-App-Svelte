<script>
    import Header from '../components/Header.svelte';
	import CityOverview from '../components/CityOverview.svelte';
	import Feature from '../components/Feature.svelte';
	import WeatherByHours from '../components/WeatherByHours.svelte';
</script>

<main>
	<div class="my-16 mx-6 flex flex-row justify-between">
		<div>
			<div class='mx-14 mb-14'>
				<Header today={'Today, 21 May 2021'} statement={'Paris'}/>
			</div>	
			
			<div class='mx-14 mb-14'>
				<CityOverview src={'/images/cloud/17.png'} temperature={'29°C'} state={'storm'}/>
			</div>
	
			<div class="flex flex-row mx-14 justify-between">
				<Feature text={'Wind'} src={'/images/wind/42.png'} number={'11km/h'}/>
				<Feature text={'Humidity'} src={'/images/cloud/7.png'} number={'53%'}/>
				<Feature text={'Feels like'} src={'/images/sun/26.png'} number={'27°C'}/>
			</div>
		</div>
		<div>
			<div class="flex flex-col mr-10">
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
			</div>
		</div>
	</div>

</main>
