<script>
    export let city;
    export let today;
    export let src = '/images/sun/8.png';
    export let temperature;
</script>

<a href="/city" class="hover:no-underline transform hover:scale-110 motion-reduce:transform-none transition duration-300 ease-in-out ">
    <div class='flex flex-col justify-between border-2 border-grey-100 rounded-xl h-65 w-96 p-3 m-6 py-6'>
        <div class='flex flex-row justify-between mx-5 pb-3'>
            <p class='text-primary font-bold text-lg '>{city}</p>
            <p class='text-primary text-base'>{today}</p>
        </div>
        <div class='flex flex-row justify-between items-center mx-5'>
            <img src={src} alt="WeatherImage" class='w-24 items-center'>
            <p class='text-accent font-bold text-5xl items-center'>{temperature}°C</p>
        </div>
    </div>    
</a>