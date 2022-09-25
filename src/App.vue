<template>
	<section>
		<products-search />
	</section>
</template>

<script>
	import productsSearch from "./pages/productsSearch.vue";
	export default {
		name: "App",
		components: {
			productsSearch,
		},
		created() {},
		data() {
			return {};
		},
	};
</script>