<script>
    export let text;
    export let src = '/images/star/37.png';
    export let number;
</script>




<div class=' relative border-2 border-grey-100 rounded-large h-20 w-20 md:h-28 md:w-28 flex flex-col bg-secondary items-center m-1 md:m-5'>
    <p class='font-sans text-sm md:text-base text-center text-grey-200 pt-1'>{text}</p>
    <img src={src} alt="weatherImage" class=' w-10 md:w-14 items-center'>
    <p class='absolute md:inset-x-5 -bottom-2 text-sm md:font-base text-center text-secondary px-1 py-0 w-16 bg-accent rounded'>{number}</p>
</div>    

