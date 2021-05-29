<script>
    export let data;
    export let alt;
    export let imageClass;

    import { idToImage } from '../../store';

    const sunrise = data.sys.sunrise
    const sunset = data.sys.sunset
    const pod = data.sys.pod

    let link;

    // Function to check which image we have to take depend of the id
    const convertIdToImage = () => {
        const actualHour = new Date()

        idToImage.forEach(array => {
            if(data.weather[0].id === array.id) {
                // If the image it's in the part of the day or night --> next hours
                if(pod) {
                    if(pod === 'd') {
                        link = array.day
                    } else if(pod === 'n') {
                        link = array.night
                    }
                } else if(sunrise && sunset) { // If the weather as sunrise and sunset data
                    const sunriseHour = new Date(sunrise * 1000)
                    const sunsetHour = new Date(sunset * 1000)

                    if(actualHour > sunriseHour && actualHour < sunsetHour) {
                        link = array.day
                    } else {
                        link = array.night
                    }
                }
            }
        })
    }

    convertIdToImage()
</script>


<img src={link} alt={alt} class={imageClass} />