<script>
    export let hour;
    export let data;
    export let temperature;
    import Image from './Image.svelte';

    hour = hour.replace(' ', 'T') // To work on safari
    let formatHour = new Date(hour).getHours()
</script>

<div class='relative flex flex-col md:justify-between border-2 border-grey-100 bg-secondary rounded-lg h-40 w-24 m-2 md:rounded-xl md:h-28 md:w-96 md:p-3 md:m-6 md:overflow-visible'>
    <div class=' flex flex-col items-center my-4 md:my-0 md:flex-row justify-between md:mx-6'>
        <Image data={data} alt="WeatherImage" imageClass="w-16 md:w-24 items-center" />
        <p class='text-accent font-bold text-2xl md:text-5xl items-center'>{temperature}°C</p>    
    </div>
    <div>
        <p class='absolute transform left-1/2 md:bottom-0 bottom-4 -translate-x-1/2 md:translate-y-1/2 text-sm md:text-base text-center text-primary md:text-secondary px-1 py-0 w-16 md:bg-accent rounded'>{formatHour}:00</p>
    </div>
</div>    