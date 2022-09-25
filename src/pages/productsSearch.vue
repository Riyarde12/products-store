<template>
	<section class="products-search">
		<products-list v-if="products" :products="products" />
		<h1 v-else-if="!selectedDay && !products">
			Please select a date to display relevant products
		</h1>
		<h1 v-else-if="isLoading">Loading products</h1>
	</section>
</template>
<script>
	import { getProductData } from "../services/productsService.js";
	import productsList from "../components/products/productsList.vue";
	export default {
		name: "products-search",
		components: {
			productsList,
		},
		created() {
			this.getProducts();
		},
		data() {
			return {
				products: null,
				selectedDay: null,
				loading: false,
			};
		},
		methods: {
			async getProducts() {
				this.loading = true;
				const res = await getProductData(this.selectedDay);
				this.loading = false;
				if (res.data) {
					console.log("data", res.data);
					this.products = res.data;
				} else {
					this.loading = false;
					console.log(res.errs);
				}
			},
		},
	};
</script>