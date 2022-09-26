<template>
	<section class="products-search">
		<products-list :products="products" @onSelectedDate="selectedDate" />
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
				if (res.type === "getProductsSuccessed") {
					this.products = res.data;
					console.log("res.data", res.data);
					this.isLoading = false;
				} else {
					this.loading = false;
					console.log(res.errs);
				}
			},
			selectedDate(date) {
				this.userDateSelected = date;
				this.getProducts();
			},
		},
	};
</script>

<style>
.products-search{
	@apply h-main-screen-75;
	@apply mt-8;
	@apply mr-8;
	@apply ml-24;

}
/* height: 80vh;
    /* display: flex; */
    /* justify-content: center; */
    /* margin-top: 2rem;
    margin-right: 2rem;
    margin-left: 6rem; */ 

</style>