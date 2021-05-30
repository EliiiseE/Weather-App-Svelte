<script>
    export let data;
    export let temperature;
    export let state;
    import Image from './Image.svelte';
</script>

<div class='flex flex-row items-center'>
    <Image data={data} alt="weatherImage" imageClass="w-44 h-44 md:w-80 md:h-80 items-center object-contain" />
    <div class='flex flex-col items-center'>
        <p class='font-bold text-5xl md:text-9xl text-accent'>{temperature}°C</p>
        <p class='text-3xl md:text-5xl text-primary -py5'>{state}</p>
    </div>
</div>    

