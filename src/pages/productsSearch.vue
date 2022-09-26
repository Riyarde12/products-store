<template>
	<section class="products-search">
		<products-list
			:products="products"
			:isLoading="isLoading"
			@onSelectedDate="selectedDate"
		/>
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
		created() {},
		data() {
			return {
				products: null,
				userDateSelected: null,
				isLoading: false,
			};
		},
		methods: {
			async getProducts() {
				this.isLoading = true;
				const res = await getProductData(this.userDateSelected);
				// just to fake REST requests like in a real application
				setTimeout(() => {
					if (res.type === "getProductsSuccessed") {
						this.products = res.data;

						this.isLoading = false;
					} else {
						this.loading = false;
						console.log(res.errs);
					}
				}, 3000);
			},
			selectedDate(date) {
				this.products = [];
				this.userDateSelected = date;
				this.getProducts();
			},
		},
	};
</script>

<style>
.products-search{
	 @apply h-3/4; 
	 @apply mt-8;
	@apply mr-8;
	@apply ml-24;
	@apply mb-20;
	@apply flex;
	@apply flex-grow-2

}

</style>