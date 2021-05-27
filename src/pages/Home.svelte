<script>
    import GlobalWeather from '../components/GlobalWeather.svelte';
	import Header from '../components/Header.svelte';
</script>

<main>
<div class="my-16 mx-6">
	<div class='mx-14 mb-14'>
		<Header today={'Today, 21 May 2021'} statement={'Good Morning'}/>
	</div>	

	<div class="flex flex-wrap mx-8">
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
		<GlobalWeather city={'Bordeaux'} today={'27 May 2021'} src={'/images/sun/8.png'} temperature={'29°C'} />
	</div>
</div>
</main>
