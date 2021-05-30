<script>
    export let today;
    export let statement;
</script>


<div class='flex flex-col'>
    <div>
        <form action="city" method="get">
            <button type="submit" class="border-none"><i class="cursor-pointer fas fa-search text-primary text-lg md:text-2xl mb-5"></i></button>
            <input type="text" id="name" name="name" placeholder="Search a city"  class="border-t-0 border-r-0 border-l-0 font-base"required >
        </form>
    </div>
    <p class='text-primary text-lg md:text-2xl '>{today}</p>
    <p class='text-primary font-bold  text-2xl md:text-4xl '>{statement}</p>
</div>    