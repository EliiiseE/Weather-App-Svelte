<script>
    import Header from '../components/Header.svelte';
	import CityOverview from '../components/CityOverview.svelte';
	import Feature from '../components/Feature.svelte';
	import WeatherByHours from '../components/WeatherByHours.svelte';
	import GetCurrentData from '../utils/RequestCurrentData';
	import GetNextData from '../utils/RequestThreeHoursData';
	import { months, today, city } from '../../store';
</script>

<main>
	<div class="my-8 md:my-16 mx-6 flex flex-col md:flex-row justify-between">
		{#await GetCurrentData(city)}
			<p>...waiting</p>
		{:then data}
			<div>
				<div class='mb-10 md:mx-14 md:mb-14'>
					<Header today={'Today, ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} statement={data.name}/>
				</div>	
				
				<div class='md:mx-14 md:mb-14'>
					<CityOverview temperature={data.main.temp.toFixed(0)} state={data.weather[0].main} data={data}/>
				</div>
		
				<div class="flex flex-row md:mx-14 justify-between">
					<Feature text={'Wind'} src={'/images/wind/42.png'} number={data.wind.speed.toFixed(1) + 'km/h'}/>
					<Feature text={'Humidity'} src={'/images/cloud/7.png'} number={data.main.humidity + '%'}/>
					<Feature text={'Feels like'} src={'/images/sun/26.png'} number={data.main.feels_like.toFixed(0) + '°C'}/>
				</div>
			</div>
			{:catch error}
			<p>An error occurred!</p>
		{/await}
		<div>
			<div class="flex flex-row md:flex-col my-5 md:mr-10 overflow-y-hidden">
				{#await GetNextData(city)}
					<p>...waiting</p>
				{:then data}
					{#each Array(6) as _, i}
						<WeatherByHours temperature={data.list[i].main.temp.toFixed(0)} hour={data.list[i].dt_txt} data={data.list[i]} />
					{/each}
				{:catch error}
					<p>An error occurred!</p>
				{/await}
			</div>
		</div>
	</div>

</main>
