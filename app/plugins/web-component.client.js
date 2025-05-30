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

	import("~/components/layouts/Sidebar.js")
		.then(() => {
			console.log("Sidebar web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Sidebar web component:", err);
		});

	import ("~/components/layouts/Switcher.js")
		.then(() => {
			console.log("Switcher web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Switcher web component:", err);
		});

	import ("~/components/layouts/Cover.js")
		.then(() => {
			console.log("Cover web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Cover web component:", err);
		});

	import ("~/components/layouts/Grid.js")
		.then(() => {
			console.log("Grid web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Grid web component:", err);
		});

	import ("~/components/layouts/Frame.js")
		.then(() => {
			console.log("Frame web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Frame web component:", err);
		});

	import('~/components/layouts/Reel.js')
		.then(() => {
			console.log("Reel web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Reel web component:", err);
		});

	import ('~/components/layouts/Imposter.js')
		.then(() => {
			console.log("Imposter web component loaded");
		})
		.catch((err) => {
			console.error("Failed to load Imposter web component:", err);
		});
});
