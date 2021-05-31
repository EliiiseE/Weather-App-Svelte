<script>
    import GlobalWeather from '../components/GlobalWeather.svelte';
	import Header from '../components/Header.svelte';
	import GetCurrentData from '../utils/RequestCurrentData';
	import { months, today, cities, statement } from '../../store';
</script>


<div class="my-8 mx-6 md:my-16">
	<div class='mb-10 md:mx-14 md:mb-14'>
		<Header today={'Today, ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} statement={statement}/>
	</div>	

	<div class="flex flex-wrap md:mx-8">
		{#each cities as city}
			{#await GetCurrentData(city)}
				<p>...waiting</p>
			{:then data}
				<GlobalWeather city={data.name} today={today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} temperature={data.main.temp.toFixed(0)} data={data} />
			{:catch error}
				<p>An error occurred!</p>
			{/await}
		{/each}
	</div>
</div>

