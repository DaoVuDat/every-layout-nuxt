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
			console.log("Box web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Box web component:", err);
		});

	import("~/components/layouts/Center.js")
		.then(() => {
			console.log("Center web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Center web component:", err);
		});

	import("~/components/layouts/Cluster.js")
		.then(() => {
			console.log("Cluster web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Cluster web component:", err);
		});
});
