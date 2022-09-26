<template>
	<section class="products-list">
		<div class="grid grid-flow-row auto-rows-max gap-x-6 gap-y-6">
			<date-picker class="col-span-3" @onSelected="onSelectedDate" />
			<div v-for="product in products" :key="product.id">
				<products-list-item :product="product" />
			</div>

			<div>
				<h1 v-if="!products">
					Please select a date to display relevant products
				</h1>
			</div>
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
