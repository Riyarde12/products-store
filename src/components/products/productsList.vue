<template>
	<section class="products-list">
		<div class="grid gap-x-6 gap-y-6">
			<date-picker class="col-span-3" @onSelected="onSelectedDate" />
			<div class="list" v-for="product in products" :key="product.id">
				<products-list-item :product="product" />
			</div>

			<div>
				<h1 v-if="!products">
					Please select a date to display relevant products
				</h1>
			</div>

			<div v-if="isLoading">Loading...</div>
		</div>
	</section>
</template>

<script>
	import productsListItem from "./productsListItem.vue";
	import datePicker from "../inputs/datePicker.vue";
	export default {
		name: "products-list",
		props: {
			products: { type: Array },
			isLoading: { type: Boolean },
		},
		components: {
			productsListItem,
			datePicker,
		},
		created() {},
		data() {
			return {};
		},
		methods: {
			onSelectedDate(date) {
				this.$emit("onSelectedDate", date);
			},
		},
	};
</script>

<style>

.products-list{
	@apply flex-grow-2
}

.list{

@apply border-solid;
@apply border-black;
@apply border;
@apply rounded-2xl;
@apply p-3
}

.grid{
	@apply row-start-auto
}
</style>