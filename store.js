//API KEY
export const API_key =__myapp.env.API_WEATHER_KEY

//Get today's date
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Septembre', 'Octubre', 'Nevember', 'December']
export const today = new Date()

export const cities = [
	'Paris',
	'New York',
	'Londres',
	'San Francisco',
	'Tokyo',
	'Moscow'
]

//Get url parameters -> city name
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
export const city = urlParams.get('name');

//Say hello politly to the right time of the day
const actualHour = today.getHours()
export let statement 

if (actualHour >= 6 && actualHour < 12) {
	statement = 'Good Morning'
} else if (actualHour >=12 && actualHour < 17) {
	statement = 'Good Afternoon'
} else if (actualHour >= 17 || actualHour < 6){
	statement = 'Good Evening'
}

// Array to convert every id to an image
export const idToImage = [
	{
		id: 200,
		day: '/images/sun/16.png',
		night: '/images/moon/11.png'
	},
	{
		id: 201,
		day: '/images/cloud/17.png',
		night: '/images/moon/11.png'
	},
	{
		id: 202,
		day: '/images/cloud/17.png',
		night: '/images/moon/11.png'
	},
	{
		id: 210,
		day: '/images/cloud/12.png',
		night: '/images/moon/11.png'
	},
	{
		id: 211,
		day: '/images/cloud/12.png',
		night: '/images/moon/11.png'
	},
	{
		id: 212,
		day: '/images/cloud/12.png',
		night: '/images/moon/20.png'
	},
	{
		id: 221,
		day: '/images/cloud/12.png',
		night: '/images/moon/20.png'
	},
	{
		id: 230,
		day: '/images/cloud/17.png',
		night: '/images/moon/11.png'
	},
	{
		id: 231,
		day: '/images/cloud/17.png',
		night: '/images/moon/11.png'
	},
	{
		id: 232,
		day: '/images/cloud/17.png',
		night: '/images/moon/20.png'
	},
	{
		id: 300,
		day: '/images/sun/8.png',
		night: '/images/moon/2.1.png'
	},
	{
		id: 301,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 302,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 310,
		day: '/images/sun/8.png',
		night: '/images/moon/2.1.png'
	},
	{
		id: 311,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 312,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 313,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 314,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 321,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 500,
		day: '/images/sun/8.png',
		night: '/images/moon/1.png'
	},
	{
		id: 501,
		day: '/images/sun/8.png',
		night: '/images/moon/1.png'
	},
	{
		id: 502,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 503,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 504,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 511,
		day: '/images/cloud/22.png',
		night: '/images/moon/21.png'
	},
	{
		id: 520,
		day: '/images/sun/8.png',
		night: '/images/moon/1.png'
	},
	{
		id: 521,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 522,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 531,
		day: '/images/cloud/7.png',
		night: '/images/moon/1.png'
	},
	{
		id: 600,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 601,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 602,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 611,
		day: '/images/cloud/23.png',
		night: '/images/moon/19.png'
	},
	{
		id: 612,
		day: '/images/cloud/23.png',
		night: '/images/moon/19.png'
	},
	{
		id: 613,
		day: '/images/cloud/23.png',
		night: '/images/moon/19.png'
	},
	{
		id: 615,
		day: '/images/cloud/22.png',
		night: '/images/moon/21.png'
	},
	{
		id: 616,
		day: '/images/cloud/22.png',
		night: '/images/moon/21.png'
	},
	{
		id: 620,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 621,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 622,
		day: '/images/cloud/18.png',
		night: '/images/moon/19.png'
	},
	{
		id: 701,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 711,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 721,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 731,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 741,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 751,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 761,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 762,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 771,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 781,
		day: '/images/sun/4.png',
		night: '/images/moon/2.2.png'
	},
	{
		id: 800,
		day: '/images/sun/26.png',
		night: '/images/moon/10.png'
	},
	{
		id: 801,
		day: '/images/sun/27.png',
		night: '/images/moon/15.png'
	},
	{
		id: 802,
		day: '/images/cloud/35.png',
		night: '/images/moon/15.png'
	},
	{
		id: 803,
		day: '/images/cloud/35.png',
		night: '/images/moon/15.png'
	},
	{
		id: 804,
		day: '/images/cloud/35.png',
		night: '/images/moon/15.png'
	}
]