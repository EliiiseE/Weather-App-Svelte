import { writable, derived } from 'svelte/store';

export const name = writable('world');

export const greeting = derived(
	name,
	$name => `Hello ${$name}!`
);

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

export const city = 'Moscow' // Exemple