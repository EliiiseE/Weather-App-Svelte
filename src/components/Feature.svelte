<script>
    export let text;
    export let src = '/images/star/37.png';
    export let number;
</script>




<div class=' relative border-2 border-grey-100 rounded-large h-28 w-28 flex flex-col bg-secondary items-center m-5'>
    <p class='font-sans text-base text-center text-grey-200 pt-1'>{text}</p>
    <img src={src} alt="weatherImage" class='w-14 items-center'>
    <p class=' absolute inset-x-5 -bottom-2 text-center text-secondary px-1 py-0 w-16 bg-accent rounded'>{number}</p>
</div>    

