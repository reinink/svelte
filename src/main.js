import Inertia from './Inertia.svelte';

let App = document.getElementById('app')

const app = new Inertia({
	target: App,
	props: {
        initialPage: JSON.parse(App.dataset.page),
	}
});

export default app;
