<script>
    export let today;
    export let statement;

    import { name, greeting } from '../../store';
</script>


<div class='flex flex-col'>
    <div>
        <p>{$greeting}</p>
        <i class="cursor-pointer fas fa-search text-primary text-lg md:text-2xl mb-5"></i>
        <input type="text" id="name" name="name" bind:value={$name} >
    </div>
    <p class='text-primary text-lg md:text-2xl '>{today}</p>
    <p class='text-primary font-bold  text-2xl md:text-4xl '>{statement}</p>
</div>    