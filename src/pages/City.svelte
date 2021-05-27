<script>
    import Header from '../components/Header.svelte';

	import Feature from '../components/Feature.svelte';
	import WeatherByHours from '../components/WeatherByHours.svelte';
</script>

<main>
	<div class="my-16 mx-6 flex flex-row justify-between">
		<div>
			<div class='mx-14 mb-14'>
				<Header today={'Today, 21 May 2021'} statement={'Paris'}/>
			</div>	
			
			
			<!-- <div>Image/temp/stormy</div> -->
	
			<div class="flex flex-row">
				<Feature text={'Wind'} src={'/images/wind/42.png'} number={'11km/h'}/>
				<Feature text={'Humidity'} src={'/images/cloud/7.png'} number={'53%'}/>
				<Feature text={'Feels like'} src={'/images/sun/26.png'} number={'27°C'}/>
			</div>
		</div>
		<div>
			<div class="flex flex-col">
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
