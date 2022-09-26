<template>
	<section class="product-list-item">
		<h1>{{ product.name }}</h1>
		<h3>{{ product.price }}</h3>
		<h3>{{ product.times.makeDays }}</h3>
		<ul>
			<li v-for="(day, index) in getAvailableDaysOfWeek" :key="index">
				{{ get(day) }}
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
			get(day) {
				return makeDaysOfWeek(day);
			},
		},
		computed: {
			getAvailableDaysOfWeek() {
				// console.log(day);

				return this.product.times.availableDaysOfWeek;
			},
		},
	};
</script>

<style>
ul{
	@apply text-sm;
	@apply flex;
	@apply flex-wrap;
	@apply justify-between;
}
</style>


//     font-size: 0.75rem;
//     line-height: 1rem;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
// 