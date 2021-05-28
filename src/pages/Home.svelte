<script>
    import GlobalWeather from '../components/GlobalWeather.svelte';
	import Header from '../components/Header.svelte';
	import GetData from '../components/RequestCurrentData';

	const cities = [
		'Paris',
		'New York',
		'Londres',
		'San Francisco',
		'Tokyo',
		'Moscow'
	]

	// Pour récupèrer le mois en fonction de today.getMonths()
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Septembre', 'Octubre', 'Nevember', 'December']

	const today = new Date()
</script>

<main>
<div class="my-16 mx-6">
	<div class='mx-14 mb-14'>
		<Header today={'Today, ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} statement={'Good Morning'}/>
	</div>	

	<div class="flex flex-wrap mx-8">
		{#each cities as city}
			{#await GetData(city)}
				<p>...waiting</p>
			{:then data}
			<GlobalWeather city={data.name} today={today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} src={'/images/sun/8.png'} temperature={data.main.temp} />
			{:catch error}
				<p>An error occurred!</p>
			{/await}
		{/each}
	</div>
</div>
</main>
