export default defineNuxtPlugin(() => {
	import("~/components/layouts/Stack.js")
		.then(() => {
			console.log("Stack web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Stack web component:", err);
		});

	import("~/components/layouts/Box.js")
		.then(() => {
			console.log("Stack web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Stack web component:", err);
		});
});
