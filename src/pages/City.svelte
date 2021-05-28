<script>
    import Header from '../components/Header.svelte';
	import CityOverview from '../components/CityOverview.svelte';
	import Feature from '../components/Feature.svelte';
	import WeatherByHours from '../components/WeatherByHours.svelte';
	import GetData from '../components/RequestCurrentData';
	import { months, today, city } from '../../store';

</script>

<main>
	{#await GetData(city)}
		<p>...waiting</p>
	{:then data}
		<div class="my-8 md:my-16 mx-6 flex flex-col md:flex-row justify-between">
			<div>
				<div class='mb-10 md:mx-14 md:mb-14'>
					<Header today={'Today, ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} statement={data.name}/>
				</div>	
				
				<div class='md:mx-14 md:mb-14'>
					<CityOverview src={'/images/cloud/17.png'} temperature={data.main.temp.toFixed(0)} state={data.weather[0].main}/>
				</div>
		
				<div class="flex flex-row md:mx-14 justify-between">
					<Feature text={'Wind'} src={'/images/wind/42.png'} number={data.wind.speed.toFixed(1) + 'km/h'}/>
					<Feature text={'Humidity'} src={'/images/cloud/7.png'} number={data.main.humidity + '%'}/>
					<Feature text={'Feels like'} src={'/images/sun/26.png'} number={data.main.feels_like.toFixed(0) + '°C'}/>
				</div>
			</div>
			<div>
				<div class="flex flex-row md:flex-col my-5 md:mr-10">
					<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
					<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
					<WeatherByHours src={'/images/sun/8.png'} temperature={'19°C'} hour={'11:00'} />
				</div>
			</div>
		</div>
	{:catch error}
		<p>An error occurred!</p>
	{/await}

</main>
