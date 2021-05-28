<script>
    export let src = '/images/cloud/17.png';
    export let temperature;
    export let state;
</script>

<div class='flex flex-row'>
    <img src={src} alt="weatherImage" class='w-44 h-44 md:w-80 md:h-80 items-center'>
    <div class='flex flex-col items-center'>
        <p class='font-bold text-5xl md:text-9xl text-accent'>{temperature}°C</p>
        <p class='text-3xl md:text-5xl text-primary -py5'>{state}</p>
    </div>
</div>    

