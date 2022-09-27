<template>
	<section class="product-list-item">
		<div class="flex">
			<span>Product </span>
			<span>{{ product.name }} </span>
		</div>
		<div class="flex">
			<span>Price </span>
			<span>{{ product.price }}</span>
		</div>
		<span>Will take {{ product.times.makeDays }} days to make</span>
		<ul>
			<span>Available in days: </span>
			<li v-for="(day, index) in getAvailableDaysOfWeek" :key="index">
				{{ dayOfTheWeek(day) }}
			</li>
		</ul>
	</section>
</template>

<script>
	import { makeDaysOfWeek } from "../../services/utils/date";

	export default {
		name: "product-list-item",
		components: {},
		props: {
			product: { type: Object, required: true },
		},

		created() {},
		data() {
			return {};
		},
		methods: {
			dayOfTheWeek(day) {
				return makeDaysOfWeek(day);
			},
		},
		computed: {
			getAvailableDaysOfWeek() {
				return this.product.times.availableDaysOfWeek;
			},
		},
	};
</script>

<style>
.product-list-item{
	@apply flex;
	@apply flex-col;
	@apply gap-1;
}

.flex{
	@apply justify-between
}

ul{
	@apply text-sm;
	@apply flex;
	@apply flex-wrap;
	@apply justify-between;
	@apply flex-col;
	@apply gap-1;
}
</style>
