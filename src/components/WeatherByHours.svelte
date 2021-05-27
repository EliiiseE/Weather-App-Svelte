<script>
    export let hour;
    export let src = '/images/sun/8.png';
    export let temperature;
</script>

<div class='relative flex flex-col justify-between border-2 border-grey-100 rounded-xl h-28 w-96 p-3 m-6'>
    <div class=' flex flex-row justify-between bg-secondary mx-6'>
        <img src={src} alt="WeatherImage" class='w-24 items-center'>
        <p class='text-accent font-bold text-5xl items-center'>{temperature}</p>    
    </div>
    <p class='absolute inset-x-36 -bottom-2 text-center text-secondary px-1 py-0 w-16 bg-accent rounded'>{hour}</p>
</div>    