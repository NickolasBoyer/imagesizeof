import '../public/global.css'
import App from './App.svelte';

import profiles from './profiles.js'

const app = new App({
	target: document.body,
	props: {
		profiles
	}
});

window.app = app;

export default app;