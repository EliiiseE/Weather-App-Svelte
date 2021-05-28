<script>
    export let hour;
    export let src = '/images/sun/8.png';
    export let temperature;
</script>

<div class='relative flex flex-col md:justify-between border-2 border-grey-100 rounded-lg h-40 w-20 m-2 md:rounded-xl md:h-28 md:w-96 md:p-3 md:m-6 overflow-hidden md:overflow-visible'>
    <div class=' flex flex-col items-center my-4 md:my-0 md:flex-row justify-between bg-secondary md:mx-6'>
        <img src={src} alt="WeatherImage" class='w-16 md:w-24 items-center'>
        <p class='text-accent font-bold text-2xl md:text-5xl items-center'>{temperature}</p>    
    </div>
    <div>
        <p class='md:absolute inset-x-36 -bottom-2 text-sm md:text-base text-center text-primary md:text-secondary px-1 py-0 w-16 md:bg-accent rounded'>{hour}</p>
    </div>
</div>    