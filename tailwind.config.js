/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Catamaran', 'sans-serif'],
			heading: ['Playfair Display', 'sans-serif'],
			main: ['Tangerine']
		},
		extend: {
			colors: {
				primary: '#D7AE1E',
				secondary: '#E2DFDA',
				black: '#1E1E1E',
				gray: '#F0F0F0',
				white: '#FFF',
				error: '#FF0404'
			},
			boxShadow: {
				'2xl': '0px 5px 20px rgba(0, 0, 0, 0.13)'
			}
		}
	},
	plugins: []
};
