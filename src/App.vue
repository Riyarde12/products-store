<template>
	<section class="app">
		<app-header />
		<products-search />
		<app-footer />
	</section>
</template>

<script>
	import productsSearch from "./pages/productsSearch.vue";
	import appFooter from "./components/appFooter.vue";
	import appHeader from "./components/appHeader.vue";
	export default {
		name: "App",
		components: {
			productsSearch,
			appFooter,
			appHeader,
		},
		created() {},
		data() {
			return {};
		},
	};
</script>

<style>
*{
	@apply box-border;

}

body{
	@apply m-0;
	@apply h-screen
}

.app{
	@apply flex;
	@apply flex-col;
	@apply justify-between;
    @apply min-h-screen;
}

</style>